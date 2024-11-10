import React, { Component } from 'react';
import { styles, stylesData } from './styles';
import { formDataUtil } from '../../store';

export default class DisplayContent extends Component {
  MAX_ARRAY_LENGTH = 500;
  MAX_URL_LENGTH = 500;
  MAX_CONTENT_LENGTH = 1000;

  isValidContent(content, maxLength = this.MAX_CONTENT_LENGTH) {
    if (!content) {
      return false;
    }
    return content.length < maxLength;
  }

  isValidURL(url) {
    if (!url) {
      return false;
    }
    if (url.length > this.MAX_URL_LENGTH) {
      console.warn('URL is too long');
      return false;
    }
    if (
      url.startsWith &&
      (url.startsWith('http://') || url.startsWith('https://'))
    ) {
      return true;
    } else {
      return null;
    }
  }

  renderTextContent(content, textStyle, key) {
    const Tag = 'p'; // You can change this to 'span' or 'div' as needed
    if (typeof key === 'undefined') {
      if (typeof content === 'object') {
        return (
          <Tag style={textStyle}>
            {this.renderItem(content)}
          </Tag>
        );
      } else {
        return <Tag style={textStyle}>{content}</Tag>;
      }
    } else if (typeof content === 'object') {
      return (
        <Tag style={textStyle} key={key}>
          {this.renderItem(content)}
        </Tag>
      );
    } else {
      return (
        <Tag style={textStyle} key={key}>
          {content}
        </Tag>
      );
    }
  }

  renderLinkTextContent(content, url, textStyle, key) {
    if (!this.isValidURL(url)) {
      return this.renderTextContent(content, textStyle, key);
    } else {
      if (typeof key === 'undefined') {
        if (typeof content === 'object') {
          return (
            <a href={url} style={textStyle}>
              {this.renderItem(content)}
            </a>
          );
        } else {
          return (
            <a href={url} style={textStyle}>
              {content}
            </a>
          );
        }
      } else if (typeof content === 'object') {
        return (
          <a href={url} style={textStyle} key={key}>
            {this.renderItem(content)}
          </a>
        );
      } else {
        return (
          <a href={url} style={textStyle} key={key}>
            {content}
          </a>
        );
      }
    }
  }

  renderViewContent(content, viewStyle, key) {
    if (typeof key === 'undefined') {
      if (typeof content === 'object') {
        return <div style={viewStyle}>{this.renderItem(content)}</div>;
      } else {
        return <p style={viewStyle}>{content}</p>;
      }
    } else if (typeof content === 'object') {
      return (
        <div style={viewStyle} key={key}>
          {this.renderItem(content)}
        </div>
      );
    } else {
      return (
        <p style={viewStyle} key={key}>
          {content}
        </p>
      );
    }
  }

  renderItem(item, index) {
    const key = this.buildKey(item, index);
    if (typeof item === 'object') {
      if (Array.isArray(item)) {
        if (item.length > this.MAX_ARRAY_LENGTH) {
          console.log('array is too big');
          return null;
        } else if (typeof key === 'undefined') {
          return item.map(this.renderItem.bind(this));
        } else {
          return <div key={key}>{item.map(this.renderItem.bind(this))}</div>;
        }
      } else if (!item.type || item.type === 'text') {
        if (item.url) {
          const textStyle = formDataUtil.getStyleFromItem({
            item,
            styles,
            data: stylesData,
            name: 'linkText',
          });

          return this.renderLinkTextContent(
            item.content,
            item.url,
            textStyle,
            key
          );
        } else {
          const textStyle = formDataUtil.getStyleFromItem({
            item,
            styles,
            data: stylesData,
            name: 'contentText',
          });
          return this.renderTextContent(item.content, textStyle, key);
        }
      } else if (item.type === 'view') {
        const viewStyle = formDataUtil.getStyleFromItem({
          item,
          styles,
          data: stylesData,
          name: 'viewStyle',
        });
        return this.renderViewContent(item.content, viewStyle, key);
      } else if (item.type === 'row') {
        const viewStyle = formDataUtil.getStyleFromItem({
          item,
          styles,
          data: stylesData,
          name: 'rowStyle',
        });
        return this.renderViewContent(item.content, viewStyle, key);
      } else if (item.type === 'col') {
        const viewStyle = formDataUtil.getStyleFromItem({
          item,
          styles,
          data: stylesData,
          name: 'columnStyle',
        });
        return this.renderViewContent(item.content, viewStyle, key);
      } else if (item.type === 'paragraph') {
        const viewStyle = formDataUtil.getStyleFromItem({
          item,
          styles,
          data: stylesData,
          name: 'rowStyle',
        });
        return this.renderViewContent(item.content, viewStyle, key);
      } else {
        return null;
      }
    } else if (typeof key === 'undefined') {
      return this.renderTextContent(item, styles.contentText);
    } else {
      return this.renderTextContent(item, styles.contentText, key);
    }
  }

  buildKey(item, index) {
    if (typeof index === 'undefined') {
      return index;
    } else if (typeof item === 'object') {
      let key = index;
      if (item.id) {
        key = item.id;
      }
      if (item.key) {
        key = item.key;
      }
      return key;
    } else {
      return `${index}_${item}`;
    }
  }

  render() {
    if (
      typeof this.props.content === 'object' &&
      Array.isArray(this.props.content)
    ) {
      if (this.props.content.length > this.MAX_ARRAY_LENGTH) {
        console.log('array is too big');
        return null;
      } else {
        return (
          <div style={styles.columnStyle}>
            {this.props.content.map(this.renderItem.bind(this))}
          </div>
        );
      }
    } else if (this.props.content) {
      return this.renderItem(this.props.content);
    } else {
      return null;
    }
  }
}