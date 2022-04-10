import React from "react";
// import styled from "styled-components";
import styled from 'styled-components/native';

import { Text, View} from 'react-native';
import { withTheme } from "@callstack/react-theme-provider";

const Header = ({ theme }) => (
  <Container textColor={theme.textColor} background={theme.backgroundColor}>
        <Text>this is some text </Text>
  </Container>
);



const Container = styled.View`
  box-sizing: border-box;
  width: 100%;
  color: ${props => props.textColor};
  background-color: ${props => props.background};
  padding: 4rem;
  text-align: center;
  font-size: 2rem;
`;

export default withTheme(Header);
