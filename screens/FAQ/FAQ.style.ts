import styled from 'styled-components/native';

import { DefaultText } from '../../components';

export const Container = styled.View`
    display:flex;
    flex-direction:column;
    width:100%;
`

export const Question = styled(DefaultText)`
  font-size: 15px;
  font-weight: 600;
`;

export const Answer = styled(DefaultText)`
  font-size: 15px;
  font-weight: 400;
`;

export const Divider = styled.View`
  margin: 18px 0;
  height: 1px;
  background: #dddddd;
`;
