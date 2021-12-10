import {StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 2,
    borderRadius: 5,
    backgroundColor: '#ECEFF1',
  },
  imageContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 5,
    margin:2,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
  },
  image: {
    width: w * 0.4,
    minHeight: h * 0.3,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    paddingTop: 5,
  },
  title: {
    flex: 1,
    color: 'black',
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    fontSize: 12,
  },
  inStock: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
  },
});
