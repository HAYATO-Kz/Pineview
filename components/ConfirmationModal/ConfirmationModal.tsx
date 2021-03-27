import React from 'react';
import { Modal } from 'react-native';
import { Text } from 'react-native-svg';

import {
  TextContainer,
  Title,
  SubText,
  ButtonContainer,
  Button,
  ConfirmButtonText,
  CancelButtonText,
  ModalWrapper,
  ModalContainer,
} from './ConfirmationModal.style';

interface ConfirmationModalProps {
  title: string;
  subtitle: string;
  confirmText?: string;
  cancelText?: string;
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationModal = (props: ConfirmationModalProps) => {
  const {
    title,
    subtitle,
    confirmText = 'confirm',
    cancelText = 'cancel',
    visible,
    onConfirm,
    onCancel,
  } = props;

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <ModalWrapper>
        <ModalContainer>
          <TextContainer>
            <Title>{title}</Title>
            <SubText>{subtitle}</SubText>
          </TextContainer>
          <ButtonContainer>
            <Button>
              <CancelButtonText onPress={onCancel}>
                {cancelText}
              </CancelButtonText>
            </Button>
            <Button>
              <ConfirmButtonText onPress={onConfirm}>
                {confirmText}
              </ConfirmButtonText>
            </Button>
          </ButtonContainer>
        </ModalContainer>
      </ModalWrapper>
    </Modal>
  );
};
