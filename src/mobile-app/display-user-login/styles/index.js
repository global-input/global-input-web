

import {deviceDetector} from '../../components/menu/styles'

const stylesData = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(72,128,237,1)',
    height: '100vh',
    width: '100vw',    // Add this
    margin: 0,         // Add this
    padding: 0,        // Add this
    position: 'fixed', // Add this
    top: 0,           // Add this
    left: 0,          // Add this
    overflowY: 'auto' // Add this to ensure content is scrollable
  },
  header: {
    backgroundColor: 'rgba(72,128,237,1)',
    width: '100%',
    minHeight: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5
  },
  logo: {
    marginTop: 30,
    backgroundColor: 'rgba(72,128,237,1)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    maxWidth:600
  },
  logoText: {
    backgroundColor: 'rgba(72,128,237,1)',
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    marginBottom: 30,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  dialogHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 20,

    marginBottom: 10,
  },
  formItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    width:"90%"
    
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Futura-Medium',
    textAlign: 'center',
    marginRight: 10,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  errorMessage: {
    width: '100%',
    fontSize: 20,
    fontFamily: 'Futura-Medium',
    color: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 20,
    marginLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 5,

    flexWrap: 'wrap',
  },
  helpContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15    
  },
  helpText: {
    fontSize: 14,    
    color: '#FFFFFF',
  },
}

if (deviceDetector.isAndroid()) {
  stylesData.header.minHeight = 0
}
const styles = stylesData;
export {deviceDetector, styles}
