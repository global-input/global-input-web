
const styleData = {
  icon: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fieldContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  labelIcon: {
    marginRight: 5,
  },
  labelAndIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginRight: 5,
  },
  label: {
    fontSize: 10,
    color: '#4880ED',
    height: 15,
    marginBottom: 0,
    paddingBottom: 0,
    fontFamily: 'Futura-Medium',
  },
  inputText: {
    display:"flex",
    fontSize: 20,
    

    color: '#4880ED',
    backgroundColor: 'transparent',
    width: '100%',
    margin: 0,
    padding: 0,
    paddingTop: 14,
    paddingBottom: 14,
  },
  textInputContainer: {
    display: 'flex',
    flex: 1,
    minHeight: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    
    flexDirection: 'column',
    
    alignItems: 'flex-start',
    borderColor: '#B9C3CE',
    borderBottomWidth: 1,
  },
  selectionFieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderColor: '#4880ED',
    borderBottomWidth: 1,
  },
  selectionSelectedRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  selectionSelectedValueText: {
    fontSize: 20,
    color: '#4880ED',
    width: '100%',
    margin: 0,
    padding: 0,
  },

  optionRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  optionLabel: {
    width: 35,
    height: 25,
  },
  optionText: {
    fontSize: 20,
    color: '#4880ED',
    margin: 0,
    padding: 0,
  },

  picker: {
    height: 150,
    width: 200,
  },
}
export const styles = styleData

export function stylesWithNumberOfLines (nlines = 1) {
  var height = nlines * 25 + 50
  return {
    textarea: {
      display: 'flex',
      backgroundColor: '#ffffff',
      paddingLeft: 15,
      paddingRight: 15,
      flex: 1,
      borderColor: 'rgba(72,128,237,1)',
      borderWidth: 1,
      borderStyle: 'solid',
      color: 'rgba(72,128,237,1)',
    },
    textAreaContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: height,
      width: '100%',
      paddingLeft: 10,
      paddingRight: 10,
    },
  }
}
