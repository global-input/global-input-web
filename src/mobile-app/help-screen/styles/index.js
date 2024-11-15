

import {commonStyles} from '../../common-styles';

const stylesData = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingBottom: 45,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'rgba(72,128,237,1)',
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  subtitleText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Futura-Medium',
    color: 'white',
  },
  subtitleContainer: {
    width: '100%',
    paddingRight: 20,
    marginBottom: 10,
  },
  titlesContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    justifyContent: 'center',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 12,
    marginBottom: 10,
  },
  textBlockContainer: {
    marginLeft: 5,
  },
  description: {
    fontSize: 16,
    
    marginBottom: 12,
    color: 'rgba(72,128,237,1)',
  },
  link: {
    
    color: '#1e90ff',
    textDecorationLine: 'underline',
    
  },
  linkContainer: {
    paddingVertical: 1, // Adjust if needed
  },
};
export const styles =  Object.assign({}, commonStyles, stylesData);
