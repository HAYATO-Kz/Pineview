import React, {useState, useEffect} from 'react';
import {
  Container,
  Header,
  Text,
  Content,
  Body,
  Icon,
  Left,
  Button,
  Right,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import HTML from 'react-native-render-html';
import {getDate} from '../utils/timestamp';
import {
  Share,
  Linking,
  useWindowDimensions,
  ActionSheetIOS,
} from 'react-native';
import styled from 'styled-components/native';

import {MOCKDATA} from '../mock_data';

interface ReviewProps {
  navigation: any;
  route: any;
}

const Review = (props: ReviewProps) => {
  const [love, setLove] = useState(false);

  const {navigation, route} = props;

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
      console.log(`Don't know how to open this URL: ${url}`);
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
    <Container>
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => {
              navigation.navigate('Map');
            }}>
            <Icon type="Entypo" name="chevron-left" style={{color: 'black'}} />
          </Button>
        </Left>
        <Body>
          <Text>Review Content</Text>
        </Body>
        <Right>
          <Button transparent onPress={openActionSheet}>
            <Icon
              name="dots-three-vertical"
              type="Entypo"
              style={{color: '#000'}}
            />
          </Button>
        </Right>
      </Header>
      <Content style={{padding: 20}}>
        <Grid>
          <Row style={{marginBottom: 20}}>
            <Title>{source.title}</Title>
          </Row>
          <Row style={{marginVertical: 5}}>
            <Text>Reviewer : {source.nickname}</Text>
          </Row>
          <Row>
            <Col size={3}>
              <Row style={{marginVertical: 5}}>
                <Text>DATE : {getDate(source.created_time)}.</Text>
              </Row>
            </Col>
          </Row>
          <RowWithStyled style={{marginVertical: 5}}>
            <HTML
              source={{html: source.desc_full || '<div></div>'}}
              contentWidth={contentWidth}
              computeEmbeddedMaxWidth={(s) => contentWidth - 50}
            />
          </RowWithStyled>
        </Grid>
      </Content>
    </Container>
  );
};

export default Review;

const RowWithStyled = styled(Row)``;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;
