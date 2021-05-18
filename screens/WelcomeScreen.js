import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import styled from 'styled-components/native'

const WelcomeScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const data = { email, password }
    console.log(data)
  }
  return (
    <Container>
      <StatusBar style="light" />
      <Logo source={require("../assets/chat.png")} />
      <InputContainer>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </InputContainer>
      <LoginButtonContainer>
        <Button style={{ marginRight: 10 }} icon="login" mode="contained"
          onPress={handleLogin}>
          login
        </Button>
        <Button color="purple" mode="contained" onPress={() => console.log('Pressed')}>
          register
        </Button>
      </LoginButtonContainer>
    </Container>
  )
}
export default WelcomeScreen;

const Container = styled.View`
flex:1;
justify-content:space-around;
align-items: center;
`
const Logo = styled.Image`
width:250px;
height:250px;
`
const LoginButtonContainer = styled.View`
flex-direction: row;
justify-content:center;
width:200px;
`
const InputContainer = styled.View`
justify-content:space-between;
width:350px;
height: 150px;
`