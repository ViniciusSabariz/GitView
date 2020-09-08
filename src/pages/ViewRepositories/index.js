import React, {useState, useEffect} from 'react'

import styled from 'styled-components/native'

import { BoxContainer } from '../styles'

import ListedRepo from '../../components/ListedRepo'

export default function ViewRepositories({ route }) {
  
  const {userInfo, repoInfo} = route.params

  console.log(userInfo)
   return (
    <Container>
      <UserInformationContainer>
        <BoxContainer style={{ margin: '15px', display: 'flex', flexDirection: 'row', height: '100px', justifyContent: 'space-evenly', width: 'auto' }} >
          <UserImageContainer>
            <UserImage
                        style={{ width: '80px', height: '80px'}}
                        source={{uri: userInfo.avatar_url ? userInfo.avatar_url : "https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png"}}/>
          </UserImageContainer>

          <UserNameContainer>
            <UserNameText>
              {userInfo.name}
            </UserNameText>
            <UserNameText>
              Seguidores: {userInfo.followers}
            </UserNameText>
            <UserNameText>
              Seguindo: {userInfo.following}
            </UserNameText>
            <UserNameText>
              Repositorios Públicos: {userInfo.public_repos}
            </UserNameText>
          </UserNameContainer>
        </BoxContainer>
      </UserInformationContainer>

      <RepositoriesContainer>
        <RepositoriesList
          data = {repoInfo}
          keyExtractor = {(item)=>{item.id}}
          renderItem = {(item) => <ListedRepo data={item}/>}
        />
      </RepositoriesContainer>
    </Container>
  )
}


const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #F8F9FE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*padding: 0 15px;*/
  flex: 1;
`;

const UserInformationContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

const UserImageContainer = styled.View`
  width: auto;
  align-items: center;
  justify-content: center;
  
`;

const UserImage = styled.Image`
  border-radius: 100px;

`;

const UserNameContainer = styled.View`
  width: auto;
  height: 100%;
  flex-wrap: nowrap;
  display: grid;
  place-items: center
`;

const UserNameText = styled.Text`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  text-align: left;
`;

const RepositoriesContainer = styled.View`
  flex: 3;
  width: 100%;
`;

const RepositoriesList = styled.FlatList`

`;