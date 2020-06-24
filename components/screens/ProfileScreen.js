import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components';
import Entypo from 'react-native-vector-icons/Entypo';

import Text from '../Text';
import games from '../../util/gameData';

Entypo.loadFont();

export default ProfileScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Text>Profile screen</Text>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: #343434;
  flex: 1;
`;
