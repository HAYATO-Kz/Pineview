import React from 'react';

import { ButtonWithStyled, ButtonText } from './Button.style';

export interface ButtonProps {
  /**
   * Button's text
   */
  text: string;
  /**
   *  Option to fit button width to its parent width
   */
  block?: boolean;
  /**
   * Set the button type to outline
   */
  outline?: boolean;
  /**
   * Set the button to disabled state
   */
  disabled?: boolean;
  /**
   * Called when button is pressed
   */
  onPress: () => void;
}

export const Button = (props: ButtonProps) => {
  const { text, ...buttonProps } = props;
  const { block, onPress, ...textProps } = buttonProps;

  return (
    <ButtonWithStyled {...buttonProps}>
      <ButtonText {...textProps}>{text}</ButtonText>
    </ButtonWithStyled>
  );
};
