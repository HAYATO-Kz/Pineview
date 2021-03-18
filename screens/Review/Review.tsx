import React, { useState, useEffect } from 'react';
import HTML from 'react-native-render-html';
import {
  Share,
  Linking,
  useWindowDimensions,
  ActionSheetIOS,
} from 'react-native';

import { getDate } from '../../utils/timestamp';
import { Title, SubText } from './Review.style';
import { ContainerWithSafeArea, TouchableIcon } from '../../components';
import BackIcon from '../../assets/icons/back_icon.svg';
import MoreFunctionIcon from '../../assets/icons/more_function_icon.svg';

import { MOCKDATA } from '../../mock_data';

interface ReviewProps {
  navigation: any;
  route: any;
}

export const Review = (props: ReviewProps) => {
  const [love, setLove] = useState(false);

  const { navigation, route } = props;

  const contentWidth = useWindowDimensions().width - 30;

  const [source, setSource] = useState<any>('');

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

  /**
   * Open action sheet (redirect to google map, share to other social media applcation)
   */
  const openActionSheet = async () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Go to google map', 'Share', 'Cancel'],
        destructiveButtonIndex: 3,
        cancelButtonIndex: 3,
      },
      (buttonIndex) => {
        console.log(buttonIndex);
        if (buttonIndex === 2) {
          // cancel action
        } else if (buttonIndex === 0) {
          openInGoogleMap(source.latitude, source.longtitude);
        } else if (buttonIndex === 1) {
          share(source.id);
        }
      },
    );
  };

  useEffect(() => {
    if (route.params) {
      setSource(MOCKDATA[route.params.id]);
    }
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
            onPress={openActionSheet}
          />
        ),
        hasBorder: true,
      }}
      padding="20px">
      <Title>{source.title}</Title>
      <SubText>ผู้เขียน : {source.nickname}</SubText>
      <SubText>วันที่รีวิว : {getDate(source.created_time)}.</SubText>
      <HTML
        source={{ html: source.desc_full || '<div></div>' }}
        contentWidth={contentWidth}
        computeEmbeddedMaxWidth={(s) => contentWidth - 50}
      />
    </ContainerWithSafeArea>
  );
};
