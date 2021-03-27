import React, { useState } from 'react';
import { ImageProps, ActionSheetIOS } from 'react-native';

import {
  Card,
  CollectionImage,
  Title,
  ReviewCount,
  TextContainer,
  InformationContainer,
} from './CollectionCard.style';
import { TouchableIcon } from '../TouchableIcon/TouchableIcon';
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal';

import DefaultImage from '../../assets/images/collection_default_image.png';
import MoreFunctionIcon from '../../assets/icons/more_function_icon.svg';

interface CollectionCardProps {
  image?: ImageProps['source'];
  title: string;
  reviewCount?: number;
  onPress?: () => void;
  onShare?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const CollectionCard = (props: CollectionCardProps) => {
  const {
    image = DefaultImage,
    title,
    reviewCount,
    onPress,
    onShare,
    onDelete,
    onEdit,
  } = props;

  const [modalVisible, setModalVisible] = useState(false);

  /**
   * Open action sheet ( edit, share, delete )
   */
  const openActionSheet = async () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['แก้ไข', 'แชร์', 'ลบคอลเลกชั่น', 'ยกเลิก'],
        destructiveButtonIndex: 4,
        cancelButtonIndex: 4,
      },
      (buttonIndex) => {
        console.log(buttonIndex);
        if (buttonIndex === 3) {
          // cancel action
        } else if (buttonIndex === 0) {
          onEdit && onEdit();
        } else if (buttonIndex === 1) {
          onShare && onShare();
        } else if (buttonIndex === 2) {
          setModalVisible(true)
        }
      },
    );
  };

  return (
    <>
      <Card onPress={onPress}>
        <CollectionImage source={image} resizeMode="contain" />
        <InformationContainer>
          <TextContainer>
            <Title>{title}</Title>
            <ReviewCount>{reviewCount} รีวิว</ReviewCount>
          </TextContainer>
          <TouchableIcon
            icon={<MoreFunctionIcon heigt={17} width={3} />}
            onPress={openActionSheet}
          />
        </InformationContainer>
      </Card>
      <ConfirmationModal
      title="ลบคอลเลกชัน"
      subtitle="การทำรายการนี้จะลบคอลเลกชันออก และจะไม่สามารถเปลี่ยนแปลงได้ในอนาคต"
        visible={modalVisible}
        cancelText="ยกเลิก"
        confirmText="ลบ"
        onCancel={() => setModalVisible(false)}
        onConfirm={() => onDelete && onDelete()}
      />
    </>
  );
};
