import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    height: Dimensions.get('screen').height / 2.5,
  },
  mealName: {
    fontSize: 35,
    fontFamily: 'Roboto-Bold',
    color: '#A52A2A',
    marginLeft: 8,
  },
  mealArea: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#A52A2A',
    marginLeft: 8,
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginVertical: 4,
  },
  mealInstructions: {
    marginLeft: 8,
    color: 'black',
    fontFamily: 'Roboto-Regular',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    margin: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
});
