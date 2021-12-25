import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  rightContainer: {
    marginLeft: 20,
  },
  time: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  temperature: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  status: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
