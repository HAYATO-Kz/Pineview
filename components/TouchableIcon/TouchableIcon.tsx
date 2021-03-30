import React from 'react';

import { IconWrapper } from './TouchableIcon.style';

interface TouchableIconProps {
  onPress: () => void;
  icon: React.ReactNode;
  padding?: string;
}

export const TouchableIcon = (props: TouchableIconProps) => {
  const { onPress, icon, padding = '0px 16px' } = props;

  return (
    <IconWrapper onPress={onPress} padding={padding}>
      {icon}
    </IconWrapper>
  );
};
