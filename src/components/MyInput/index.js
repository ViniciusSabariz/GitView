import React, { useState } from 'react'
import { View, Text } from 'react-native'

import styled, { css } from 'styled-components/native'

export default function MyInput({ label='Name', value, setChange, keyBoard='default', ...rest }) {

  const [focus, setFocus] = useState(false)

  return (
    <View style={{width: '100%'}} >
      <InputContainer>
        <Input
          {...rest}
          inFocus={focus}
          value={value}
          onChangeText={cur => setChange(cur)  }
          onFocus={()=> setFocus(true)}
          onBlur={()=> setFocus(false)}
          keyboardType={keyBoard}
        />
      </InputContainer>
      <Label>
        <Span inFocus={focus} myValue={value !== ''} >
          {label}
        </Span>
      </Label>
    </View>
  )
}

const InputContainer = styled.View `
  display: flex;
`

const Input = styled.TextInput`
  width: 100%;
  border-bottom-color: #24292E;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  font-size: 16px;
  font-weight: 600;
  padding-top: 18px;
  z-index: 1000;
  font-family: Quicksand;
  outline-color: transparent;
`

const Label = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1000;

`

const Span = styled.Text`
  position: absolute;
  bottom: 5px;
  left: 0;
  color: black;
  font-family: Quicksand
  ${(props) => 
		props.inFocus &&
		css`
      top: 0;
      font-size: 12px;
      color: #24292E; 

		`}

  ${(props) =>
		props.myValue &&
		css`
      top: 0;
      font-size: 12px;
      color: #24292E; 
    `}
`