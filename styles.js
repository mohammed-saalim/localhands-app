import { styled } from 'nativewind';

export const Container = styled.View`
  flex: 1;
  justify-center: center;
  align-items: center;
  bg-custom-blue;
`;

export const Logo = styled.Image`
  width: 128px;
  height: 128px;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;
`;
     
export const Button = styled.TouchableOpacity`
  background-color: #FFC107;
  padding: 16px 32px;
  border-radius: 9999px;
  margin-bottom: 16px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
