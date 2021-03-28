import React from 'react';
import { Modal } from 'react-native';

import {
  ModalContainer,
  ModalWrapper,
  HeaderContainer,
  HeaderText,
  Button,
  ButtonText,
  CancelButtonText,
  Divider,
} from './CollectionAction.style';

interface CollectionActionProps {
  visible: boolean;
  onEdit?: () => void;
  onShare?: () => void;
  onDelete?: () => void;
  onCancel?: () => void;
}

export const CollectionAction = (props: CollectionActionProps) => {
  const { visible, onEdit, onShare, onDelete, onCancel } = props;

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <ModalWrapper>
        <ModalContainer>
          <HeaderContainer>
            <HeaderText>การตั้งค่าคอลเลกชัน</HeaderText>
          </HeaderContainer>
          <Button onPress={onEdit}>
            <ButtonText>แก้ไข</ButtonText>
          </Button>
          <Button onPress={onShare}>
            <ButtonText>แชร์</ButtonText>
          </Button>
          <Button onPress={onDelete}>
            <ButtonText>ลบคอลเลกชัน</ButtonText>
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
