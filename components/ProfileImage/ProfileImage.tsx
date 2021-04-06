import React from 'react';

import { Wrapper, Image } from './ProfileImage.style';
import ProfileImageSource from '../../assets/images/default_profile_image.png';

interface ProfileImageProps {
  color?: string;
  size: number;
}

export const ProfileImage = (props: ProfileImageProps) => {
  const { color = '#ffffff', size } = props;

  return (
    <Wrapper width={size} color={color}>
      <Image source={ProfileImageSource} resizeMode="contain" />
    </Wrapper>
  );
};
