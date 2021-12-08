import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
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
    fontSize : 12
  },
  soldoutContainer: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
});
