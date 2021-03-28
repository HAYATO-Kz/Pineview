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
import { CollectionAction } from '../CollectionAction/CollectionAction';

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
  const [actionModalVisible, setActionModalVisible] = useState(false);

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
            onPress={() => setActionModalVisible(true)}
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
      <CollectionAction
        visible={actionModalVisible}
        onCancel={() => setActionModalVisible(false)}
        onEdit={() => {
          setActionModalVisible(false);
          onEdit && onEdit();
        }}
        onDelete={() => {
          setActionModalVisible(false);
          setModalVisible(true);
        }}
        onShare={() => {
          setActionModalVisible(false);
          onShare && onShare();
        }}
      />
    </>
  );
};
