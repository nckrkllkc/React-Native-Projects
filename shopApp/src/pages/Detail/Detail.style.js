import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Roboto-Light',
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
  },
  price: {
    textAlign: 'right',
    color: 'black',
    fontSize: 19,
  },
  description: {
    marginVertical: 5,
  },
});
