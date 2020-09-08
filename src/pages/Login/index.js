import React, { useState } from 'react'
import { View, Text, Button, Image } from 'react-native'

import styled from 'styled-components/native'
import { BoxContainer } from '../styles'

// Components
import MyInput from '../../components/MyInput'
import MyButton from '../../components/MyButton'

import api from '../../api'

import Logo from '../../Assets/Images/Logo'

export default function Login({ navigation }) {

  const [userName, setUserName] = useState('stormsamurai1')

  //const [userInfo, setUserInfo] = useState([])
  //const [repoInfo, setRepoInfo] = useState([])

  async function GoToView(){
    let userInfo
    let repoInfo
    let error = false
    await api.get(`/users/${userName}`)
      .then( res => userInfo = res.data )
      .catch( res => {
        console.log(res);
        error = true
      })
      console.log(1)
    await api.get(`/users/${userName}/repos`)
      .then( res => repoInfo = res.data )
      .catch( res => {
        console.log(res)
        error = true
      })
    if(!error){
      navigation.push('ViewRepositoriesScreen', {userInfo, repoInfo})
    }
  }

  return (
    <Container>
      <HeaderContainer>
        <Logo width={'250px'} height={'250px'} />
      </HeaderContainer>
      
      <BoxContainer>
        <BoxContent>
          <MyInput label='Nome do Usuário' value={userName} setChange={setUserName} />
          <ButtonContainer>
            <MyButton activeButton={GoToView} text='Pesquisar' />
          </ButtonContainer> 
        </BoxContent>
      </BoxContainer>
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #F8F9FE;
  display: flex;
  flex-direction: column; 
  align-items: center;
  padding: 0 15px;
  margin-top: 60px
`

const HeaderContainer = styled.View `
  height: auto;
`

const BoxContent = styled.View `
  height: auto;
  width: 100%;
  padding: 20px 35px 20px 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const ButtonContainer = styled.View`
  width: 180px;
`