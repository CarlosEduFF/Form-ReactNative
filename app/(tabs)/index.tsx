import React, { useState } from 'react';
import { ScrollView, View, Button, TextInput, Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [email, setEmail] = useState('');
  const [dataN, setDatan] = useState('');

  const handleLogin = () => {
    Alert.alert('Credenciais', `Nome: ${username}\nEmail: ${email}\nData de Nascimento: ${dataN}\nSenha: ${password} `);
  };
  const limparDados = () => {
    setUsername('');
    setPassword('');
    setPassword1('');
    setEmail('');
    setDatan('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <Text style={styles.label}>Digite nome de usuário:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Digite seu nome de usuário"
      />
      <Text style={styles.label}>Digite email do usuário:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu email de usuário"
      />
      <Text style={styles.label}>Digite a data de nascimento de usuário:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDatan}
        value={dataN}
        placeholder="Digite sua data de nascimento"
        
      />
      <Text style={styles.label}>Digite a senha de usuário:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <Text style={styles.label}>Confirme a senha de usuário:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword1}
        value={password1}
        placeholder="Confirme sua senha"
        secureTextEntry
      />
      
      <Button
        title="Entrar"
        onPress={handleLogin}
      />
      <Text></Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={limparDados}
      >
        <Text style={styles.buttonText}>Apagar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#ff0000', // Isso faz o botão ser vermelho
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Isso faz o texto do botão ser branco
  },
});
