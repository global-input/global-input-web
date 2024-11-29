// DisplayKeyDetails.js

import React from 'react';

import { styles } from '../styles';
import images  from '../../../configs/images';
import { formDataUtil } from '../../../store';
import * as appStore from '../../../store';

export default function DisplayKeyDetails({ encryptionKeyItem }) {
  const decryptedKeyContent = appStore.decryptedWithPassword(
    encryptionKeyItem.encryptionKey
  );
  const createdAt = formDataUtil.getDateString(encryptionKeyItem.createdAt);
  const name = encryptionKeyItem.name;

  return (
    <div style={styles.formContainer}>
      <div style={styles.itemRow}>
        <div style={styles.labelContainer}>
          <img src={images.labelIcon} style={styles.itemIcon} alt="" />
        </div>
        <div style={styles.fieldValueContainer}>
          <div style={styles.fieldValue}>{name}</div>
        </div>
      </div>
      <div style={styles.itemRow}>
        <div style={styles.labelContainer}>
          <img src={images.key} style={styles.itemIcon} alt="" />
        </div>
        <div style={styles.fieldValueContainer}>
          <div style={styles.fieldValue}>{decryptedKeyContent}</div>
        </div>
      </div>
      <div style={styles.itemRow}>
        <div style={styles.labelContainer}>
          <img src={images.timestampIcon} style={styles.itemIcon} alt="" />
        </div>
        <div style={styles.fieldValueContainer}>
          <div style={styles.fieldValue}>{createdAt}</div>
        </div>
      </div>
    </div>
  );
}