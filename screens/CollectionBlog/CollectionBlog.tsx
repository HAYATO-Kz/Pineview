import React, { useState, useEffect } from 'react';
import { AsyncStorage, Clipboard } from 'react-native';

import {
  Title,
  SubText,
  ButtonContainer,
  GridWrapper,
  ShareCollectionButton,
  ShareCollectionButtonText,
  UserContainer,
} from './CollectionBlog.style';
import {
  Grid,
  CollectionBlogCard,
  ContainerWithSafeArea,
  ShareCollectionModal,
  ProfileImage,
} from '../../components';
import ShareIcon from '../../assets/icons/share_icon.svg';
import PlusIcon from '../../assets/icons/plus_icon.svg';
import { backendAPI } from '../../utils/api';

interface CollectionBlogProps {
  navigation: any;
  route: any;
}

export const CollectionBlog = (props: CollectionBlogProps) => {
  const { navigation, route } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [collectionData, setCollectionData] = useState({
    title: 'title',
    owner: { username: 'username', color: '#ffffff' },
    isOwner: false,
    review_blogs: [],
  });
  const [loading, setLoading] = useState(false);

  const getCollection = async () => {
    setLoading(true);
    const authToken = await AsyncStorage.getItem('authToken');
    const response = await backendAPI
      .get(`/collection/${route.params.collectionId}?token=${authToken}`)
      .catch((err) => {
        console.log(err);
      });

    if (response) {
      const { title, owner, isOwner, blogs } = response.data;
      setCollectionData({
        title: title,
        isOwner: isOwner,
        owner: {
          username: isOwner ? `${owner.username} (ฉัน)` : owner.username,
          color: owner.color,
        },
        review_blogs: blogs,
      });
    }
    setLoading(false);
  };

  const onCopy = () => {
    Clipboard.setString(`${route.params.collectionId}`);
    setModalVisible(false);
  };

  const onCopyCollection = async () => {
    const authToken = await AsyncStorage.getItem('authToken');
    const body = {
      userToken: authToken,
      collection_id: route.params.collectionId,
    };
    const response = await backendAPI
      .post('/copy_collection', body)
      .catch((err) => console.log(err));

    if (response) {
      navigation.goBack();
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
    <ContainerWithSafeArea padding="16px" isInTabMode loading={loading}>
      <Title>{collectionData.title}</Title>
      <SubText>
        มี {collectionData.review_blogs.length} รีวิวอยู่ในคอลเลกชันนี้
      </SubText>
      <ButtonContainer>
        <UserContainer>
          <SubText>สร้างโดย: </SubText>
          <ProfileImage size={30} color={collectionData.owner.color} />
          <SubText> {collectionData.owner.username}</SubText>
        </UserContainer>
        {collectionData.isOwner ? (
          <ShareCollectionButton onPress={() => setModalVisible(true)}>
            <ShareIcon />
            <ShareCollectionButtonText>แชร์</ShareCollectionButtonText>
          </ShareCollectionButton>
        ) : (
          <ShareCollectionButton onPress={() => onCopyCollection()}>
            <PlusIcon />
            <ShareCollectionButtonText>
              เพิ่มเข้าคอลเลกชันของฉัน
            </ShareCollectionButtonText>
          </ShareCollectionButton>
        )}
      </ButtonContainer>
      {collectionData.review_blogs.length !== 0 && (
        <GridWrapper>
          <Grid
            keyBase="collection_blog"
            data={collectionData.review_blogs.map((data) => (
              <CollectionBlogCard
                title={data.kratoo_title}
                onPress={() =>
                  navigation.navigate('Review', { id: data.kratoo_id })
                }
              />
            ))}
          />
        </GridWrapper>
      )}
      <ShareCollectionModal
        collectionId={route.params.collectionId}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onConfirm={onCopy}
      />
    </ContainerWithSafeArea>
  );
};
