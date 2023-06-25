import { StatusBar, SafeAreaView } from "expo-status-bar";
import styled from "dty;ed-components/native"

export const SafeArea = styled(SafeAreaView)`
flex:1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
