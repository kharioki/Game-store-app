import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

import Text from '../Text';
import gameData from '../../util/gameData';

Icon.loadFont();

export default GameScreen = ({route, navigation}) => {
  const {game} = route.params;
  return (
    <GameContainer>
      <StatusBar barStyle="light-content" />

      <GameArtContainer>
        <GameArt source={game.cover} />
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="ios-close" size={48} color="#ffffff" />
        </BackButton>
      </GameArtContainer>

      <GameInfoContainer>
        <GameThumbContainer>
          <GameThumb source={game.cover} />
        </GameThumbContainer>
        <GameInfo>
          <Text heavy medium>
            {game.title}
          </Text>
          <Text color="#9a9a9a">{game.teaser}</Text>
        </GameInfo>
        <Download>
          <Icon name="md-cloud-download" size={24} color="#ffffff" />
        </Download>
      </GameInfoContainer>

      <GameStatsContainer>
        <Text>{game.rating}</Text>
        <Text>{game.category[0]}</Text>
        <Text>{game.age}</Text>
        <Text>Game of the day</Text>
      </GameStatsContainer>
    </GameContainer>
  );
};

const GameContainer = styled.View`
  background-color: #343434;
  flex: 1;
`;

const GameArtContainer = styled.View`
  position: relative;
`;

const GameArt = styled.Image`
  height: 350px;
  width: 100%;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 48px;
  left: 16px;
`;

const GameInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  margin: 8px 16px;
`;

const GameThumbContainer = styled.View`
  shadow-color: #000000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;

const GameThumb = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 16px;
`;
const GameInfo = styled.View`
  width: 0;
  flex-grow: 1;
  margin: 0 8px 0 16px;
`;

const Download = styled.View`
  background-color: #819ee5;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const GameStatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px;
`;
