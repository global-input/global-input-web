// Since this is a utility class, we don't need to import any React-specific modules
// Remove the React Native import
// import { StyleSheet } from 'react-native';

export default class FormDataUtil {
  MAX_FORM_ID_LENGTH = 500;

  constructor() {
    this.formIdTemplateIdentifier = '###';
  }

  _findPlaceHolderRange(formIdTemplate, findFrom) {
    const findPlaceHolderIdentifier = (startI) => {
      return formIdTemplate.indexOf(this.formIdTemplateIdentifier, startI);
    };
    const range = {};
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

    let range = this._findPlaceHolderRange(formIdTemplate, 0);
    if (!range) {
      return formIdTemplate;
    }

    let resultContent = '';
    let startIndex = 0;
    try {
      while (range) {
        if (startIndex < range.start1) {
          resultContent += formIdTemplate.substring(startIndex, range.start1);
        }
        if (!range.vname) {
          resultContent += formIdTemplate.substring(range.start1, range.end2);
        } else {
          const matchedFields = formFields.filter((f) => f.id === range.vname);
          if (matchedFields && matchedFields.length > 0) {
            if (matchedFields[0].value) {
              resultContent += matchedFields[0].value;
            }
          }
        }
        startIndex = range.end2;
        const r = this._findPlaceHolderRange(formIdTemplate, startIndex);
        if (!r) {
          if (startIndex < formIdTemplate.length) {
            resultContent += formIdTemplate.substring(startIndex);
          }
        }
        range = r;
      }
    } catch (error) {
      console.warn(error);
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
    for (let i = 0; i < formData.fields.length; i++) {
      if (this.fieldHasContent(formData.fields[i])) {
        return true;
      }
    }
    return false;
  }

  shouldSaveFormData(formData, appdata) {
    if (!formData) {
      return false;
    }
    const formid = this.getFormId(formData);
    if (!formid) {
      return false;
    }
    if (!this.formHasContent(formData)) {
      return false;
    }
    let matchedFormData = appdata.getFormContentById(formid);
    if (!matchedFormData) {
      matchedFormData = appdata.searchFormDataById(formid);
      if (!matchedFormData) {
        return true;
      }
    }
    for (let i = 0; i < formData.fields.length; i++) {
      const formField = formData.fields[i];
      if (this.fieldHasContent(formField)) {
        const matchedFormFields = matchedFormData.fields.filter(
          (f) => f.id === formData.fields[i].id
        );
        if (!matchedFormFields.length) {
          return true;
        }
        const value = appdata.decryptContent(matchedFormFields[0].value);
        if (formData.fields[i].value !== value) {
          return true;
        }
      }
    }
    return false;
  }

  convertToStoreFormData(formData, appdata) {
    const storeFormData = { ...formData };
    storeFormData.id = this.getFormId(formData);
    storeFormData.fields = [...formData.fields];
    for (let i = 0; i < storeFormData.fields.length; i++) {
      storeFormData.fields[i] = { ...formData.fields[i] };
      if (
        storeFormData.fields[i].id &&
        storeFormData.fields[i].value &&
        storeFormData.fields[i].value.trim().length > 0
      ) {
        storeFormData.fields[i].value = appdata.encryptContent(
          storeFormData.fields[i].value
        );
      }
    }
    return storeFormData;
  }

  searchByLabel(formDataList, label) {
    if (!formDataList) {
      return formDataList;
    }
    return formDataList.filter((m) => {
      if ((!label && !m.label) || m.label === label) {
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
    return formDataList.filter((m) => {
      if (m.id.toLowerCase().includes(searchFilter)) {
        return true;
      }
      if (m.label && m.label.toLowerCase().includes(searchFilter)) {
        return true;
      }
      return false;
    });
  }

  getDateString(dateValue) {
    const date = new Date(dateValue);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ret = '';

    if (hour < 10) {
      hour = '0' + hour;
    }
    ret += hour + ':';
    if (minute < 10) {
      ret += '0';
    }
    ret += minute + ' ';
    ret += year + '-';
    if (month < 10) {
      ret += '0';
    }
    ret += month + '-';
    if (day < 10) {
      ret += '0';
    }
    ret += day;
    return ret;
  }

  getAllLabelsFromFormDataList(formDataList) {
    const labels = new Set();
    formDataList.forEach((f) => {
      if (f.label) {
        labels.add(f.label);
      }
    });
    return [...labels];
  }

  buldTextContentResolved(encryptionKey, textContent) {
    let keyname = 'App';

    if (encryptionKey) {
      keyname = encryptionKey.name;
    }
    const resolvedContent = textContent.map((h) =>
      h.replace(/{name}/g, keyname)
    );
    return resolvedContent;
  }

  getStyleFromItem(request) {
    try {
      const { styles, item, data, name } = request;
      if (item && item.style) {
        const combinedStyle = { ...data[name], ...item.style };
        return combinedStyle;
      }
    } catch (error) {
      console.warn(error);
    }
    return request.styles[request.name];
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
      return {
        style: request.styles[request.name],
        content: request.content,
      };
    }
  }
}