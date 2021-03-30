import React, { useState } from 'react';
import { Modal } from 'react-native';

import {
  ModalContainer,
  ModalWrapper,
  HeaderContainer,
  OptionContainer,
  HeaderText,
  Button,
  ButtonText,
  OptionLabel,
  CreateNewCollection,
  CreateNewCollectionText,
} from './Favorite.style';
import CheckIcon from '../../assets/icons/check_icon.svg';
import PlusBlackIcon from '../../assets/icons/plus_black_icon.svg';

interface FavoriteProps {
  options: { label: string; value: string }[];
  initialValue?: string[];
  visible: boolean;
  onDone: (selectedValue: string[]) => void;
  onCreateNewCollection: () => void;
}

export const Favorite = (props: FavoriteProps) => {
  const {
    options,
    visible,
    initialValue,
    onDone,
    onCreateNewCollection,
  } = props;
  const [selectedOption, setSelectedOption] = useState<string[]>(
    initialValue || [],
  );

  const onOptionsPressHandle = (value: string) => {
    const updateSelectedOption = [...selectedOption];
    const index = updateSelectedOption.indexOf(value);
    if (index === -1) {
      updateSelectedOption.push(value);
    } else {
      updateSelectedOption.splice(index, 1);
    }
    setSelectedOption(updateSelectedOption);
  };

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <ModalWrapper>
        <ModalContainer>
          <HeaderContainer>
            <HeaderText>เพิ่มไปยัง...</HeaderText>
            <Button onPress={() => onDone(selectedOption)}>
              <ButtonText>เสร็จ</ButtonText>
            </Button>
          </HeaderContainer>
          <CreateNewCollection onPress={onCreateNewCollection}>
            <PlusBlackIcon />
            <CreateNewCollectionText>
              สร้างคอลเลกชันใหม่
            </CreateNewCollectionText>
          </CreateNewCollection>
          {options.map((option, index) => (
            <OptionContainer
              key={`option_${index}`}
              onPress={() => onOptionsPressHandle(option.value)}>
              <OptionLabel>{option.label}</OptionLabel>
              {selectedOption.indexOf(option.value) > -1 && <CheckIcon />}
            </OptionContainer>
          ))}
        </ModalContainer>
      </ModalWrapper>
    </Modal>
  );
};