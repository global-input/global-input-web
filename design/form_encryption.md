copyFieldsToGlobalInputFields

```mermaid
graph TD
    subgraph formData
copyFieldsToGlobalInputFields --> fillContentEncryptionForm



copyFieldsToGlobalInputFields --> autoFillWithFormData


fillContentEncryptionForm--> onEncryptedContent

end



subgraph globalInputConnector
fillContentEncryptionForm --> connector_fillContentEncryptionForm[fillContentEncryptionForm]



connector_fillContentEncryptionForm --> onPairingData

end



subgraph ExportEncryptedEncryptionKey
connector_fillContentEncryptionForm --> onCompleted
end


subgraph DeviceInputView
onPairingData --> DeviceInputView_onPairingData[onPairingData]
end

subgraph EncryptContentView


onEncryptedContent --> onContentEncrypted
end



```

```javascript
const value = isEncrypted
  ? appStore.decryptContent(matchedFields[0].value)
  : matchedFields[0].value
```

copyFieldsToGlobalInputFields() returns an array of structure:

```javascript
{
  id, value, isEncrypted
}
```
