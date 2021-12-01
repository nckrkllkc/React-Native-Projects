import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    flexDirection :'column',
    justifyContent:'space-around',
    width: 190,
    padding: 10,
    backgroundColor: '#ECEFF1',
    borderRadius: 7,
    margin: 4,
  },
  image: {
    width: 170,
    height: 200,
    borderRadius: 7,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 6,
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  inStock: {
    color: 'red',
    fontSize: 14,
    fontWeight: '700',
  },
});
