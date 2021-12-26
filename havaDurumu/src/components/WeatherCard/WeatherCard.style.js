import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#29b6f6',
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: '#29b6f6',
  },
  header: {
    flex: 1,
  },
  middle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  icon: {
    width: 100,
    height: 100,
  },
  bottom: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  time: {
    textAlign: 'right',
    color: 'white',
    fontSize: 25,
    fontWeight: '100',
    marginRight: 10,
  },
  temperature: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 10,
  },
  status: {
    color: 'white',
    fontSize: 25,
    fontWeight: '100',
    marginLeft: 10,
  },
  city: {
    color: 'white',
    marginLeft: 10,
    marginTop: 5,
    fontSize: 15,
  },
});
