import { logger } from 'global-input-logging';

export default class FormDataUtil {
  MAX_FORM_ID_LENGTH = 500;

  constructor() {
    this.formIdTemplateIdentifier = '###';
  }

  _findPlaceHolderRange(formIdTemplate, findFrom) {
    var findPlaceHolderIdentifier = startI => {
      return formIdTemplate.indexOf(this.formIdTemplateIdentifier, startI);
    };
    var range = {};
    range.start1 = findPlaceHolderIdentifier(findFrom);

    if (range.start1 < 0) {
      return null;
    }
    range.start2 = range.start1 + this.formIdTemplateIdentifier.length;
    if (range.start2 >= formIdTemplate.length) {
      return null;
    }
    range.end1 = findPlaceHolderIdentifier(range.start2);
    if (range.end1 < 0) {
      return null;
    }
    range.end2 = range.end1 + this.formIdTemplateIdentifier.length;
    range.vname = formIdTemplate.substring(range.start2, range.end1);
    return range;
  }

  getFormId(formData) {
    if (!formData) {
      return null;
    }
    return this.getFormIdFromTemplateAndFields(formData.id, formData.fields);
  }
  getFormIdFromTemplateAndFields(formIdTemplate, formFields) {
    if (!formIdTemplate) {
      return null;
    }
    if (formIdTemplate.length > this.MAX_FORM_ID_LENGTH) {
      return null;
    }
    if (!formFields) {
      return formIdTemplate;
    }

    var range = this._findPlaceHolderRange(formIdTemplate, 0);
    if (!range) {
      return formIdTemplate;
    }

    var resultContent = '';
    var startIndex = 0;
    try {
      while (range) {
        if (startIndex < range.start1) {
          resultContent += formIdTemplate.substring(startIndex, range.start1);
        }
        if (!range.vname) {
          resultContent += formIdTemplate.substring(range.start1, range.end2);
        } else {
          var matchedFields = formFields.filter(f => f.id === range.vname);
          if (matchedFields && matchedFields.length > 0) {
            if (matchedFields[0].value) {
              resultContent += matchedFields[0].value;
            }
          }
        }
        startIndex = range.end2;
        var r = this._findPlaceHolderRange(formIdTemplate, startIndex);
        if (!r) {
          if (startIndex < formIdTemplate.length) {
            resultContent += formIdTemplate.substring(startIndex);
          }
        }
        range = r;
      }
    } catch (error) {
      logger.warn(error);
      return null;
    }
    return resultContent;
  }
  getFormIdFromInitData(initData) {
    if (initData && initData.form) {
      return this.getFormId(initData.form);
    } else {
      return null;
    }
  }
  isInitDataFormData(initData) {
    return (
      initData &&
      initData.dataType === 'form' &&
      initData.form &&
      initData.form.id
    );
  }

  fieldHasContent(formField) {
    return (
      (!formField.type || formField.type === 'text') &&
      formField.id &&
      formField.value &&
      formField.value.trim().length > 0
    );
  }
  formHasContent(formData) {
    if (!formData.fields) {
      return false;
    }
    if (!formData.fields.length) {
      return false;
    }
    for (var i = 0; i < formData.fields.length; i++) {
      if (this.fieldHasContent(formData.fields[i])) {
        return true;
      }
    }
    return false;
  }
  shouldSaveFormData(formData, appStore) {
    if (!formData) {
      return false;
    }
    var formid = this.getFormId(formData);
    if (!formid) {
      return false;
    }
    if (!this.formHasContent(formData)) {
      return false;
    }
    let matchedFormData = appStore.appdata.getFormContentById(formid);
    if (!matchedFormData) {
      matchedFormData = appStore.appdata.searchFormDataById(formid);
      if (!matchedFormData) {
        return true;
      }
    }
    for (var i = 0; i < formData.fields.length; i++) {
      var formField = formData.fields[i];
      if (this.fieldHasContent(formField)) {
        var matchedFormFields = matchedFormData.fields.filter(
          f => f.id === formData.fields[i].id,
        );
        if (!matchedFormFields.length || !matchedFormFields.length) {
          return true;
        }
        var value = appStore.decryptContent(matchedFormFields[0].value);
        if (formData.fields[i].value !== value) {
          return true;
        }
      }
    }
    return false;
  }
  async convertToStoreFormData(formData, appStore) {
    var storeFormData = Object.assign({}, formData);
    storeFormData.id = this.getFormId(formData);
    storeFormData.fields = [...formData.fields];
    for (var i = 0; i < storeFormData.fields.length; i++) {
      storeFormData.fields[i] = Object.assign({}, formData.fields[i]);
      if (
        storeFormData.fields[i].id &&
        storeFormData.fields[i].value &&
        storeFormData.fields[i].value.trim().length > 0
      ) {        
        storeFormData.fields[i].value = await appStore.encryptContent(
          storeFormData.fields[i].value,
        );
      }
    }
    return storeFormData;
  }

  searchByLabel(formDataList, label) {
    if (!formDataList) {
      return formDataList;
    }
    return formDataList.filter(m => {
      if (!label && !m.label) {
        return true;
      } else if (m.label === label) {
        return true;
      } else {
        return false;
      }
    });
  }

  searchFormDataBySearchFilter(formDataList, searchFilter) {
    if (!formDataList) {
      return formDataList;
    }
    if (searchFilter) {
      searchFilter = searchFilter.trim();
    }

    if (!searchFilter) {
      return formDataList;
    }
    searchFilter = searchFilter.toLowerCase();
    return formDataList.filter(m => {
      if (m.id.toLowerCase().indexOf(searchFilter) >= 0) {
        return true;
      }
      if (m.label && m.label.toLowerCase().indexOf(searchFilter) >= 0) {
        return true;
      }
      return false;
    });
  }

  getDateString(dateValue) {
    var date = new Date(dateValue);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ret = '';
    if (hour < 10) {
      hour += '0';
    }
    ret += hour;
    ret += ':';
    if (minute < 10) {
      ret += '0';
    }
    ret += minute;
    ret += ' ';
    ret += year;
    ret += '-';
    if (month < 10) {
      ret += '0';
    }
    ret += month;
    ret += '-';
    if (day < 10) {
      ret += '0';
    }
    ret += day;
    return ret;
  }
  getAllLabelsFromFormDataList(formDataList) {
    var labels = new Set();
    var hasNotLabelRecord = false;
    formDataList.forEach(f => {
      if (f.label) {
        labels.add(f.label);
      } else {
        hasNotLabelRecord = true;
      }
    });
    //labels.add("");
    return [...labels];
  }
  buildTextContentResolved(encryptionKey, textContent) {
    var keyname = 'App';

    if (encryptionKey) {
      keyname = encryptionKey.name;
    }
    var p1 = [];
    textContent.forEach(h => {
      p1.push(h.replace(new RegExp('{name}', 'g'), keyname));
    });
    return p1;
  }

  getStyleFromItem(request) {
    try {
      var {styles, item, data, name} = request;
      if (request.item && request.item.style) {
        var stdata = {};
        stdata[request.name] = Object.assign(
          {},
          request.data[name],
          item.style,
        );
        return stdata[request.name];
      }
    } catch (error) {
      logger.warn("Error:"+error, error);
    }
    return styles[request.name];
  }
  getContentAndStyle(request) {
    if (typeof request.content === 'object') {
      return {
        style: this.getStyleFromItem({
          item: request.content,
          data: request.data,
          name: request.name,
          styles: request.styles,
        }),
        content: request.content.content,
      };
    } else {
      return {style: request.styles[request.name], content: request.content};
    }
  }
}


const formDataUtil = new FormDataUtil();

export {formDataUtil};