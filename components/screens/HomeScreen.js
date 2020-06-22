import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components';

import Text from '../Text';
import categoryList from '../../util/categories.js';

export default HomeScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Header>
        <Text large>
          Hello,{' '}
          <Text large bold>
            Kharioki
          </Text>
          {`\n`}
          <Text large bold>
            Best games for today.
          </Text>
        </Text>

        <Avatar source={require('../../assets/bit19.png')} />
      </Header>

      <Categories horizontal={true}>
        {categoryList.map((category, index) => {
          return (
            <Category key={index}>
              <CategoryName>{category}</CategoryName>
            </Category>
          );
        })}
      </Categories>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 32px 0 32px;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;

const Categories = styled.ScrollView``;

const Category = styled.TouchableOpacity``;

const CategoryName = styled(Text)``;
