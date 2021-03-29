import styled from 'styled-components/native';

import { DefaultText } from '../../components';

export const Header = styled(DefaultText)`
  font-size: 15px;
  font-weight: 600;
`;

export const Description = styled(DefaultText)`
  font-size: 15px;
  font-weight: 400;
  margin-left: 8px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 17px;
`;
