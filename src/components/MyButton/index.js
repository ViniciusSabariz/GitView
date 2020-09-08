import React from 'react'
import { View, Text, Button } from 'react-native'

import styled, {css} from 'styled-components/native'

export default function MyButton({text= 'Meu botão', activeButton}) {
  return (
    <ButtonContainer onPress={()=> activeButton()}>
      {text}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.Text `
  height: 36px;
  width: 100%;
  background-color: #2EA44F;
  color: white;
  border-radius: 16px;
  margin-top: 16px;
  text-align: center;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Quicksand;
`