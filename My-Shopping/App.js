import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleDiv}>
        <Text style={styles.title}>MyShopping</Text>
        <Text style={styles.subtitle}>monte sua lista de compras</Text>
      </View>
      <View style={styles.buttonDiv}>
        <TextInput style={styles.input} placeholder="e-mail"/>
        <TextInput style={styles.input} placeholder="senha"/>
        <TouchableOpacity style={styles.button}>Entrar</TouchableOpacity>
      </View>
      <View style={styles.functionsDiv}>
        <Text style={styles.text}>Recuperar senha</Text>
        <Text style={styles.text}>Criar minha conta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleDiv: {
    alignItems: 'center',
    position: 'fixed',
    top: '30%',
  },
  buttonDiv: {
    width: '100%',
    alignItems: 'center',
    position: 'fixed',
    top: '40%',
  },
  functionsDiv: {
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    bottom: '30%',
    justifyContent: 'space-around'
  },
  title: {
    color: '#938FE1',
    fontSize: 30,
    alignSelf: 'center',
  },
  subtitle: {
    color: '#938FE1',
    textAlign: 'center',
  },
  input: {
    color: 'gray',
    backgroundColor: '#F2F2F2',
    borderRadius: 3,
    margin: '2%',
    padding: '5%',
    width: '80%'
  },
  button: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#2DB66A',
    borderRadius: 3,
    margin: '2%',
    padding: '5%',
    width: '80%',
    fontFamily: 'Arial',
  },
  text: {
    fontWeight: 'bold',
  },
});
