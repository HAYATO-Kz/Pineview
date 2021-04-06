import React, { useState, useEffect } from 'react';
import HTML from 'react-native-render-html';
import {
  Share,
  Linking,
  useWindowDimensions,
  ActionSheetIOS,
  AsyncStorage,
} from 'react-native';

import { getDate } from '../../utils/timestamp';
import {
  Title,
  SubText,
  HTMLWrapper,
  FavoriteContainer,
  TextContainer,
} from './Review.style';
import {
  ContainerWithSafeArea,
  TouchableIcon,
  Favorite,
  ReviewAction,
} from '../../components';
import { backendAPI } from '../../utils/api';
import BackIcon from '../../assets/icons/back_icon.svg';
import MoreFunctionIcon from '../../assets/icons/more_function_icon.svg';
import ActiveFavoriteIcon from '../../assets/icons/favorite_active_icon.svg';
import FavoriteIcon from '../../assets/icons/favorite_icon.svg';

interface ReviewProps {
  navigation: any;
  route: any;
}

export const Review = (props: ReviewProps) => {
  const [collection, setCollection] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const [favoriteModalVisible, setFavoriteModalVisible] = useState(false);
  const [actionVisible, setActionVisible] = useState(false);

  const { navigation, route } = props;

  const contentWidth = useWindowDimensions().width - 72;

  const [kratoo, setKratoo] = useState();
  const tagsStyles = {
    i: { fontFamily: 'Kanit', color: '#613400' },
    div: { fontFamily: 'Kanit', color: '#613400' },
    p: { fontFamily: 'Kanit', color: '#613400' },
    span: { fontFamily: 'Kanit', color: '#613400' },
    h1: { fontFamily: 'Kanit', color: '#613400' },
    h2: { fontFamily: 'Kanit', color: '#613400' },
    h3: { fontFamily: 'Kanit', color: '#613400' },
    h4: { fontFamily: 'Kanit', color: '#613400' },
    h5: { fontFamily: 'Kanit', color: '#613400' },
  };
  /**
   *  Redirect to google map application with use lat & long to set destination
   * @param lat latitude's blog
   * @param long longitude's blog
   */
  const openInGoogleMap = async (lat: number, long: number) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${long}&dir_action=navigate`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Invalid: ${url}`);
    }
  };

  /**
   * share pantip blog to other social medai applcation
   * @param id Pantip blog's id
   */
  const share = async (id: string) => {
    try {
      const result = await Share.share({
        message: `https://pantip.com/topic/${id}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onAddFavorite = async (
    selectedValues: string[],
    initialValue: string[],
  ) => {
    let collectoinIds = '';
    selectedValues.forEach(
      (selectedValue, index) =>
        (collectoinIds += `${index !== 0 ? ',' : ''}${selectedValue}`),
    );

    const favoriteCollection = {
      kratoo_id: route.params.id,
      collection_id: collectoinIds,
    };
    const response = await backendAPI
      .post('/add_to_collection', favoriteCollection)
      .catch((err) => console.log(err));

    getCollection(route.params.id);
    setFavoriteModalVisible(false);
  };

  const onUpdateFavorite = async (
    selectedValues: string[],
    initialValue: string[],
  ) => {
    const difference = selectedValues.filter(
      (value) => initialValue.indexOf(value) === -1,
    );
    const difference2 = initialValue.filter(
      (value) => selectedValues.indexOf(value) === -1,
    );

    const updatedCollection = [...difference, ...difference2];
    let differenceValueCollectoinIds = '';
    updatedCollection.forEach(
      (differenceValue, index) =>
        (differenceValueCollectoinIds += `${
          index !== 0 ? ',' : ''
        }${differenceValue}`),
    );

    if (differenceValueCollectoinIds !== '') {
      const favoriteCollection = {
        kratoo_id: route.params.id,
        collection_ids: differenceValueCollectoinIds,
      };

      const response = await backendAPI
        .put('/update_to_collection', favoriteCollection)
        .catch((err) => console.log(err));
      getCollection(route.params.id);
    }
    setFavoriteModalVisible(false);
  };

  const getReview = async (kratooId: string) => {
    const response = await backendAPI
      .get(`/kratoo/${kratooId}`)
      .catch((err) => console.log(err));

    if (response) {
      setKratoo(response.data.kratoo);
    }
  };

  const getCollection = async (kratooId: string) => {
    const authToken = await AsyncStorage.getItem('authToken');
    if (!!authToken) {
      setIsSignin(true);
    }

    const response = await backendAPI
      .get(`/collection/kratoo/${kratooId}?token=${authToken}`)
      .catch((err) => console.log(err));

    if (response) {
      setCollection(response.data.collections);
      setFavorite(response.data.checkFavorite);
    }
  };

  useEffect(() => {
    getReview(route.params.id);
    getCollection(route.params.id);
  }, [route.params]);

  return (
    <ContainerWithSafeArea
      header={{
        leftComponent: (
          <TouchableIcon
            icon={<BackIcon />}
            onPress={() => navigation.goBack()}
          />
        ),
        title: 'เนื้อหารีวิว',
        rightComponent: (
          <TouchableIcon
            icon={<MoreFunctionIcon />}
            onPress={() => setActionVisible(true)}
          />
        ),
        hasBorder: true,
      }}
      padding="26px">
      {kratoo && (
        <>
          <Title>{kratoo.kratooTitle}</Title>
          <SubText>ผู้เขียน : {kratoo.nickname}</SubText>
          <FavoriteContainer>
            <TextContainer>
              <SubText>วันที่รีวิว : {getDate(kratoo.created_time)}.</SubText>
              <SubText>เนื้อหารีวิว :</SubText>
            </TextContainer>
            {isSignin && (
              <>
                {favorite ? (
                  <TouchableIcon
                    onPress={() => setFavoriteModalVisible(true)}
                    icon={<ActiveFavoriteIcon />}
                  />
                ) : (
                  <TouchableIcon
                    onPress={() => setFavoriteModalVisible(true)}
                    icon={<FavoriteIcon />}
                  />
                )}
              </>
            )}
          </FavoriteContainer>
          <HTMLWrapper>
            <HTML
              source={{
                html: `<div>${kratoo.kratooDesc}</div>` || '<div></div>',
              }}
              contentWidth={contentWidth}
              tagsStyles={tagsStyles}
              computeEmbeddedMaxWidth={(s) => contentWidth - 50}
            />
          </HTMLWrapper>
        </>
      )}
      {collection.length !== 0 && (
        <Favorite
          visible={favoriteModalVisible}
          onDone={favorite ? onUpdateFavorite : onAddFavorite}
          onCreateNewCollection={() => {
            setFavoriteModalVisible(false);
            navigation.navigate('NewCollection');
          }}
          options={collection}
          initialValue={
            favorite
              ? collection
                  .filter((col) => col.isFavorite)
                  .map((col) => col.collection.collectionID)
              : [collection[0].collection.collectionID]
          }
        />
      )}
      <ReviewAction
        visible={actionVisible}
        onShare={() => {
          share(kratoo.kratooId);
          setActionVisible(false);
        }}
        onRedirect={() => {
          openInGoogleMap(kratoo.postions.latitude, kratoo.postions.longtitude);
          setActionVisible(false);
        }}
        onCancel={() => setActionVisible(false)}
      />
    </ContainerWithSafeArea>
  );
};
