import React from 'react';

import { ButtonWithStyled, ButtonText } from './ErrorButton.style';

export interface ErrorButtonProps {
  /**
   * Button's text
   */
  text: string;
  /**
   *  Option to fit button width to its parent width
   */
  block?: boolean;
  /**
   * Called when button is pressed
   */
  onPress: () => void;
}

export const ErrorButton = (props: ErrorButtonProps) => {
  const { text, ...buttonProps } = props;
  const { block, onPress, ...textProps } = buttonProps;

  return (
    <ButtonWithStyled {...buttonProps}>
      <ButtonText {...textProps}>{text}</ButtonText>
    </ButtonWithStyled>
  );
};
