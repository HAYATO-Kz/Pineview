import React from 'react';
import { Modal } from 'react-native';

import {
  LoadingGif,
  LoadingText,
  ModalWrapper,
  ModalContainer,
  GifWrapper,
} from './LoadingModal.style';
import LoadingSource from '../../assets/images/loading.gif';

interface LoadingModalProps {
  visible: boolean;
}

export const LoadingModal = (props: LoadingModalProps) => {
  const { visible } = props;

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <ModalWrapper>
        <ModalContainer>
          <GifWrapper>
            <LoadingGif source={LoadingSource} />
          </GifWrapper>
          <LoadingText>กำลังโหลด...</LoadingText>
        </ModalContainer>
      </ModalWrapper>
    </Modal>
  );
};
