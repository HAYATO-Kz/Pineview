import React from 'react';

import { TabWrapper, TextWithStyled } from './Tab.style'

export interface TabProps {
  /**
   * Tab's label
   */
  label: string;
  /**
   * Tab's value
   */
  value: string;
  /**
   * Set tab is in active state
   */
  isActive?: boolean;
  /**
   * Tab's primary color
   */
  color?: string;
  /**
   * Called when tab is pressed
   */
  onPress?: () => void;
}

export const Tab = (props: TabProps) => {
  const { label, isActive, color = '#531DAB', onPress } = props;

  return (
    <TabWrapper active={isActive} color={color} onPress={onPress}>
      <TextWithStyled active={isActive} color={color}>
        {label}
      </TextWithStyled>
    </TabWrapper>
  );
};