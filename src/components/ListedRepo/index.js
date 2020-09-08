import React, {useState, useEffect} from 'react'

import * as Linking from 'expo-linking'

import styled from 'styled-components/native'

import { BoxContainer } from '../../pages/styles.js'

export default function ListedRepo({data}){

    return(
        <Container onPress={() => Linking.openURL(data.item.html_url)}>
            <BoxContainer style={{padding: '15px', height: '130px', display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}} >
                <RepoNameContainer>
                    <RepoName>
                        {data.item.name}
                    </RepoName>
                </RepoNameContainer>

                <RepoDescriptionContainer>
                    <RepoDescription>
                        {data.item.description ? data.item.description : "Descrição não informada"}
                    </RepoDescription>
                </RepoDescriptionContainer>

                <GeneralInfoContainer>
                    <GeneralInfoText>{data.item.language}</GeneralInfoText>
                </GeneralInfoContainer>
            </BoxContainer>
        </Container>
    )
}

const Container = styled.TouchableOpacity`
    flex: 1;
    min-height: auto;
    height: auto;
    margin: 15px;
`;

const RepoNameContainer = styled.View`
    height: auto;
    width: 100%;

    flex-wrap: nowrap;

    border-bottom-width: 1px;
    border-bottom-color: rgba(0,0,0,0.1);
`;

const RepoName = styled.Text`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
`;

const RepoDescriptionContainer = styled.View`
    height: auto;
    width: 100%;

    flex-wrap: nowrap;

    border-bottom-width: 1px;
    border-bottom-color: rgba(0,0,0,0.1);
`;

const RepoDescription = styled.Text`
  font-family: Quicksand;
  font-style: normal;
  font-weight: lighter;
  font-size: 18px;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
`;

const GeneralInfoContainer = styled.View`
    height: auto;
    width: 100%;

    flex-wrap: nowrap;
    
    border-bottom-width: 1px;
    border-bottom-color: rgba(0,0,0,0.1);

`;

const GeneralInfoText = styled.Text`
  font-family: Quicksand;
  font-style: normal;
  font-size: 18px;
  line-height: 20px;
`;