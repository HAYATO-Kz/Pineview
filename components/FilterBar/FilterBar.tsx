import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Tab, TabProps } from '../Tab/Tab';
import { FilterContainer } from './FilterBar.style';

interface FilterBarProps {
  /**
   * Tabs
   */
  tabs: Omit<TabProps, 'onPress' | 'isActive'>[];
  /**
   * default tab value
   */
  defaultValue?: string;
  /**
   * Call when selected tab is changed
   */
  onChange?: (newValue: string) => void;
}

export const FilterBar = (props: FilterBarProps) => {
  const { tabs, onChange, defaultValue = tabs[0].value } = props;

  const [selected, setSelected] = useState(defaultValue);

  const onTabSelect = (value: string) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ overflow: 'visible' }}>
      <FilterContainer>
        {tabs.map((tab) => (
          <Tab
            onPress={() => onTabSelect(tab.value)}
            {...tab}
            isActive={tab.value === selected}
            key={`tab-${tab.value}`}
          />
        ))}
      </FilterContainer>
    </ScrollView>
  );
};
