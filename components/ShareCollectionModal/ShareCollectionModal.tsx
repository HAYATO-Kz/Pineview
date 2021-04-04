import React from 'react';
import { Modal } from 'react-native';

import {
  ModalWrapper,
  ModalContainer,
  ContentContainer,
  ButtonContainer,
  Title,
  SubText,
  CollectionId,
  CollectionIdLabel,
  Button,
  ConfirmButtonText,
  CancelButtonText,
} from './ShareCollectionModal.style';

interface ShareCollectionModalProps {
  collectionId: number;
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ShareCollectionModal = (props: ShareCollectionModalProps) => {
  const { collectionId, visible, onConfirm, onCancel } = props;

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <ModalWrapper>
        <ModalContainer>
          <ContentContainer>
            <Title>แชร์คอลเลกชันนี้</Title>
            <SubText>
              กดปุ่ม ‘คัดลอก’ เพื่อคัดลอกคอลเลกชัน ID
              สำหรับส่งให้เพื่อนมาดูรีวิวเด็ด ๆ ที่คุณรวบรวมไว้!!
            </SubText>
            <CollectionIdLabel>คอลเลกชัน ID:</CollectionIdLabel>
            <CollectionId>{collectionId}</CollectionId>
          </ContentContainer>
          <ButtonContainer>
            <Button>
              <CancelButtonText onPress={onCancel}>ยกเลิก</CancelButtonText>
            </Button>
            <Button>
              <ConfirmButtonText onPress={onConfirm}>คัดลอก</ConfirmButtonText>
            </Button>
          </ButtonContainer>
        </ModalContainer>
      </ModalWrapper>
    </Modal>
  );
};
