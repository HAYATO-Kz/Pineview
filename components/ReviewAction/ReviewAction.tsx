import React from 'react';
import { Modal } from 'react-native';

import {
  ModalContainer,
  ModalWrapper,
  Button,
  ButtonText,
  CancelButtonText,
  Divider,
} from './ReviewAction.style';

interface ReviewActionProps {
  visible: boolean;
  onRedirect?: () => void;
  onShare?: () => void;
  onCancel?: () => void;
}

export const ReviewAction = (props: ReviewActionProps) => {
  const { visible, onShare, onRedirect, onCancel } = props;

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <ModalWrapper>
        <ModalContainer>
          <Button onPress={onShare}>
            <ButtonText>แชร์รีวิวนี้</ButtonText>
          </Button>
          <Button onPress={onRedirect}>
            <ButtonText>ไปยัง Google Maps</ButtonText>
          </Button>
          <Divider />
          <Button onPress={onCancel}>
            <CancelButtonText>ยกเลิก</CancelButtonText>
          </Button>
        </ModalContainer>
      </ModalWrapper>
    </Modal>
  );
};
