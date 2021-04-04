import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import {
  ContentContainer,
  InputWithStyled,
  Title,
  SubText,
  ButtonContainer,
  Button,
  ConfirmButtonText,
  CancelButtonText,
  ModalWrapper,
  ModalContainer,
  InputWrapper,
  ErrorMessage,
} from './InputCollectionModal.style';
import { backendAPI } from '../../utils/api';

interface InputCollectionModalProps {
  visible: boolean;
  onConfirm: (collectionId: string) => void;
  onCancel: () => void;
}

export const InputCollectionModal = (props: InputCollectionModalProps) => {
  const { visible, onConfirm, onCancel } = props;
  const [collectionId, setCollectionId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleConfirm = async () => {
    const response = await backendAPI
      .get(`/collection_detail/${collectionId}`)
      .catch((err) => {
        if (err.response.status === 404) {
          setErrorMessage('ไม่พบคอลเลกชันนี้');
        }
      });

    if (response) {
      onConfirm(collectionId);
    }
  };

  useEffect(() => {
    setCollectionId('');
    setErrorMessage('');
  }, [visible]);

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <ModalWrapper>
        <ModalContainer>
          <ContentContainer>
            <Title>ดูคอลเลกชันของเพื่อน</Title>
            <SubText>กรุณาใส่ ID คอลเลกชันของเพื่อน</SubText>
            <InputWrapper>
              <InputWithStyled
                placeholder="XXXXXXXXX"
                maxLength={9}
                onChangeText={(value: string) => setCollectionId(value)}
              />
            </InputWrapper>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </ContentContainer>
          <ButtonContainer>
            <Button>
              <CancelButtonText onPress={onCancel}>ยกเลิก</CancelButtonText>
            </Button>
            <Button>
              <ConfirmButtonText onPress={handleConfirm}>
                เรียบร้อย
              </ConfirmButtonText>
            </Button>
          </ButtonContainer>
        </ModalContainer>
      </ModalWrapper>
    </Modal>
  );
};
