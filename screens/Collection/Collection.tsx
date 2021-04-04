import React, { useState, useEffect } from 'react';
import { AsyncStorage, Clipboard } from 'react-native';

import {
  Title,
  SubContainer,
  ShareCollectionButton,
  ShareCollectionButtonText,
  SubContainerText,
  GridWrapper,
  NewCollectionButtonCard,
  NewCollectionText,
} from './Collection.style';
import NewCollectionIcon from '../../assets/icons/new_collection_icon.svg';
import FireOutline from '../../assets/icons/fire_outline_icon.svg';
import {
  CollectionCard,
  Grid,
  ContainerWithSafeArea,
  InputCollectionModal,
  ConfirmationModal,
  ShareCollectionModal,
  CollectionAction,
} from '../../components';
import { backendAPI } from '../../utils/api';

interface CollectionProps {
  navigation: any;
}

export const Collection = (props: CollectionProps) => {
  const { navigation } = props;
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(
    false,
  );
  const [actionModalVisible, setActionModalVisible] = useState(false);
  const [collectionDatas, setCollectionData] = useState([]);
  const [activeCollectionId, setActiveCollectionId] = useState(0);

  const onDelete = async () => {
    const deleted = { collection_id: activeCollectionId };
    const response = await backendAPI
      .delete(`/delete_collection`, { data: deleted })
      .catch((err) => console.log(err));

    setConfirmationModalVisible(false);
    getCollection();
  };
  const onShare = () => {
    Clipboard.setString(`${activeCollectionId}`);
    setShareModalVisible(false);
  };

  const getCollection = async () => {
    const authToken = await AsyncStorage.getItem('authToken');
    const response = await backendAPI
      .get(`/collections?token=${authToken}`)
      .catch((err) => console.log(err));

    if (response) {
      setCollectionData(response.data);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getCollection();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <ContainerWithSafeArea isInTabMode>
      <Title>คอลเลกชัน</Title>
      <SubContainer>
        <SubContainerText>คอลเลกชันทั้งหมด</SubContainerText>
        <ShareCollectionButton
          onPress={() => {
            setInputModalVisible(true);
          }}>
          <FireOutline />
          <ShareCollectionButtonText>
            ดูคอลเลกชันของเพื่อน
          </ShareCollectionButtonText>
        </ShareCollectionButton>
      </SubContainer>
      <GridWrapper>
        <Grid
          keyBase="collection"
          data={[{}, ...collectionDatas].map((data, index) => {
            if (index === 0) {
              return (
                <NewCollectionButtonCard
                  onPress={() => {
                    navigation.navigate('NewCollection');
                  }}>
                  <NewCollectionIcon />
                  <NewCollectionText>สร้างคอลเลกชันใหม่</NewCollectionText>
                </NewCollectionButtonCard>
              );
            } else {
              return (
                <CollectionCard
                  title={data.collectionTitle}
                  color={data.collectionColor}
                  icon={data.collectionIcon}
                  reviewCount={data.kratooCount}
                  collectionId={data.collectionID}
                  onMore={(collectionId) => {
                    setActiveCollectionId(collectionId);
                    setActionModalVisible(true);
                  }}
                  onPress={() => {
                    navigation.navigate('CollectionBlog', {
                      collectionId: data.collectionID,
                    });
                  }}
                />
              );
            }
          })}
        />
      </GridWrapper>
      <InputCollectionModal
        visible={inputModalVisible}
        onCancel={() => setInputModalVisible(false)}
        onConfirm={(collectionId) => {
          setInputModalVisible(false);
          navigation.navigate('CollectionBlog', {
            collectionId: collectionId,
          });
        }}
      />
      <ConfirmationModal
        title="ลบคอลเลกชัน"
        subtitle="การทำรายการนี้จะลบคอลเลกชันออก และจะไม่สามารถเปลี่ยนแปลงได้ในอนาคต"
        visible={confirmationModalVisible}
        cancelText="ยกเลิก"
        confirmText="ลบ"
        onCancel={() => setConfirmationModalVisible(false)}
        onConfirm={onDelete}
      />
      <ShareCollectionModal
        collectionId={activeCollectionId}
        visible={shareModalVisible}
        onCancel={() => setShareModalVisible(false)}
        onConfirm={onShare}
      />
      <CollectionAction
        visible={actionModalVisible}
        onCancel={() => setActionModalVisible(false)}
        onEdit={() => {
          setActionModalVisible(false);
          navigation.navigate('EditCollection', {
            collectionId: activeCollectionId,
          });
        }}
        onDelete={() => {
          setActionModalVisible(false);
          setConfirmationModalVisible(true);
        }}
        onShare={() => {
          setActionModalVisible(false);
          setShareModalVisible(true);
        }}
      />
    </ContainerWithSafeArea>
  );
};
