import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    borderColor: '#bebebe',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    minHeight: 100,
    borderRadius: 20,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
  },
  price: {
    textAlign: 'right',
    color: 'black',
  },
});
