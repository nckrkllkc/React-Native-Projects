import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64b5f6',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 3,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  bodyContainer: {
    margin: 10,
  },
});
