import React, { useState, useEffect } from 'react';
import { AsyncStorage, Clipboard } from 'react-native';

import {
  Title,
  SubText,
  ButtonContainer,
  GridWrapper,
  ShareCollectionButton,
  ShareCollectionButtonText,
} from './CollectionBlog.style';
import {
  Grid,
  CollectionBlogCard,
  ContainerWithSafeArea,
  ShareCollectionModal,
} from '../../components';
import ShareIcon from '../../assets/icons/share_icon.svg';
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
    owner: 'owner',
    isOwner: false,
    review_blogs: [],
  });

  const getCollection = async () => {
    const authToken = await AsyncStorage.getItem('authToken');
    const response = await backendAPI
      .get(`/collection/${route.params.collectionId}?token=${authToken}`)
      .catch((err) => {
        console.log(err);
      });

    if (response) {
      const { title, owner, isOwner, blogs } = response.data;
      console.log(blogs);
      setCollectionData({
        title: title,
        isOwner: isOwner,
        owner: isOwner ? `${owner} (ฉัน)` : owner,
        review_blogs: blogs,
      });
    }
  };

  const onCopy = () => {
    Clipboard.setString(`${route.params.collectionId}`);
    setModalVisible(false);
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <ContainerWithSafeArea padding="16px" isInTabMode>
      <Title>{collectionData.title}</Title>
      <SubText>
        มี {collectionData.review_blogs.length} รีวิวอยู่ในคอลเลกชันนี้
      </SubText>
      <ButtonContainer>
        <SubText> สร้างโดย {collectionData.owner} </SubText>
        {collectionData.isOwner && (
          <ShareCollectionButton onPress={() => setModalVisible(true)}>
            <ShareIcon />
            <ShareCollectionButtonText>แชร์</ShareCollectionButtonText>
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
