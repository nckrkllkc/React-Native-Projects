import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  innerContainer: {
    padding: 5,
  },
  title: {
    fontSize : 18,
    fontWeight : 'bold',
    color: 'black'
  },
  description: {
    marginTop : 3
  },
  author:{
    fontStyle : 'italic',
    textAlign : 'right'
  },
});

//styles olarak export etmenize gerek yok. bu şekilde kullanırsanız, import ettiğiniz yerde gelen modüle
//istediğiniz ismi verebilirsiniz. fakat burada styles olarak tanımlarsanız import ettiğiniz yerde de styles olarak tanımlamak
//zorundasınız.
