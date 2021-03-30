import styled from 'styled-components/native';

export const IconWrapper = styled.TouchableOpacity<{ padding: string }>`
  padding: ${(p) => p.padding};
`;
