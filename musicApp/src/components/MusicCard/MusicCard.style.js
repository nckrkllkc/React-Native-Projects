import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  contentContainer: {
    flexDirection : 'row',
  },
  infoContainer: {
    flex : 1,
    flexDirection: 'row',
    alignItems : 'center'
  },
  year: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12,
  },
  artist: {},
  soldoutTitle: {
    color: 'red',
    fontWeight : 'bold',
    fontSize : 8
  },
  soldoutContainer: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
});
