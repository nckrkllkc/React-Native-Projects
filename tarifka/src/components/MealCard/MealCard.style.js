import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'rgba(0,0,0,0.5)',
    textAlign: 'right',
    paddingRight: 4,
    fontFamily: 'Roboto-Bold',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('screen').height / 3.8,
    overflow: 'hidden',
    borderRadius: 10,
  },
  top: {
    flex: 1,
  },
});
