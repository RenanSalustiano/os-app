import styled from "styled-components/native";
import { SafeAreaView, ViewProps } from "react-native";

interface ContainerProps extends ViewProps {
  top: number;
}
export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  margin-top: ${(props) => props.top}px;
`;
