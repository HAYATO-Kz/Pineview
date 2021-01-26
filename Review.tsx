import React, {useState, useEffect} from 'react';
import {
  Container,
  Header,
  Text,
  Content,
  Card,
  CardItem,
  Body,
  Icon,
  Left,
  Button,
  Right,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import HTML from 'react-native-render-html';
import {
  Image,
  Share,
  Linking,
  useWindowDimensions,
  TouchableOpacity,
  ActionSheetIOS,
} from 'react-native';
import styled from 'styled-components/native';
import GoogleMapIcon from './images/google_map_icon.png';

interface ReviewProps {
  navigation: any;
  route: any;
}

const htmlSource = `<div>สวัสดีค่ะ หลังจากที่หายไปนานมากๆ กลับมาครั้งนี้ ซังจะมารีวิวคาเฟ่ที่เพิ่งเปิดใหม่ ที่มีชื่อว่า <u><i><b>82 Concept </b></i></u><br /> เป็นร้านคาเฟ่สไตล์ Minimal Modern คือเรียบหรูมีสไตล์ ไม่เหมือนใคร แสงสวยเหมือนอยู่โซล ดีไปอีก<br />   <br /> <img class="img-in-post" src="https://f.ptcdn.info/738/067/000/q46yjn9iqt296V1MTBWf-o.jpg" data-image="img:1616x1080" /><br /> ร้านนี้ในส่วนของโซนที่นั่ง จะมีทั้ง Indoor / Outdoor / rooftop เลือกนั่งได้ตามสบายมีทั้งร้านอาหารและคาเฟ่ในที่เดียวกัน <br /> <img class="img-in-post" src="https://f.ptcdn.info/738/067/000/q46yrivolb7UQy0Otpr-o.jpg" data-image="img:1616x1080" /> <img class="img-in-post" src="https://f.ptcdn.info/738/067/000/q46yri9l86Oa80e575wT-o.jpg" data-image="img:960x960" /> <img class="img-in-post" src="https://f.ptcdn.info/738/067/000/q46yri4amqas17ub5bj-o.jpg" data-image="img:960x960" /> <img class="img-in-post" src="https://f.ptcdn.info/738/067/000/q46yrimw09cABmFm01N-o.jpg" data-image="img:1153x1536" /><br /> ซึ่งร้านอาหารตอนนี้กำลังจะเปิดในเดือน มกราคม ปี2563 บรรยากาศรอบๆ ช่วงนี้อากาศดี นั่งข้างนอกชิลล์สบายมาก ลมพัดเย็นๆ อากาศสดชื่น<br />  <br /> โซนถ่ายรูปคือดีมาก มีหลายมุมให้เลือกถ่าย แสงตรงไหนก็ดีไปหมด ไปดูรูปได้ ~<br /> <img class="img-in-post" src="https://f.ptcdn.info/738/067/000/q46yk5ykt9C74PE9OHj-o.jpg" data-image="img:2048x1536" /><br /> <img class="img-in-post" src="https://f.ptcdn.info/738/067/000/q46z1e9rm9hlMAPRkwCm-o.jpg" data-image="img:1500x1500" /><img class="img-in-post" src="https://f.ptcdn.info/738/067/000/q46z2g9rm74NqTeY6g2z-o.jpg" data-image="img:1029x1029" /><br /> <i>rooftop ถ่ายให้เห็นเครื่องบินก็ได้ เฮ้ !</i><br /> <hr/>ส่วนอาหารและคาเฟ่ มีหลากหลายเมนู ทั้งอาหารไทยกว่า 50 เมนู เครื่องดื่มก็อร่อย ราคาไม่แพง <img class="img-in-post" src="https://f.ptcdn.info/738/067/000/q46ym3mvvMNl5c5z8rr-o.jpg" data-image="img:960x960" /><br /> ช่วงนี้มีโปรลด 20% ทุกรายการในส่วนของร้านอาหารกำลังจะเปิดเร็วๆนี้นะจ๊ะ 🙂<br />  <br /> แสงในร้านสวยมาก มีมุมให้ถ่ายเยอะ ทุกๆมุมในร้านเหมือนทำมาเพื่อคนชอบถ่ายรูปจริงๆ ทั้งคลีน ทั้งเรียบหรู ดูสบายตา  <br /> <img class="img-in-post" src="https://f.ptcdn.info/738/067/000/q46yqj9l89Ly1eBc8RHR-o.png" data-image="img:1280x1080" /><br />  <br /> ร้านเปิดทุกวัน ตั้งแต่ 7:00 – 20:00 น.<br /> พิกัด : <a target="_blank" href="https://goo.gl/maps/ah6XA7kxGyknPtuN8" rel="nofollow" ><a href="https://goo.gl/maps/ah6XA7kxGyknPtuN8" rel="nofollow" target="_blank" >https://goo.gl/maps/ah6XA7kxGyknPtuN8</a></a><br /> <hr/><a target="_blank" href="https://goo.gl/maps/ah6XA7kxGyknPtuN8" rel="nofollow" ></a><br /> <br /> วันนี้ขอตัวลาไปก่อนสวัสดีค่ะ  <img class="img-in-emotion" title="miniheart" alt="miniheart" src="https://ptcdn.info/emoticons/pantip_toy/korea/korea07.png" /><br /> สามารถเข้าไปพูดคุยกับซังได้ที่<br /> <a href="javascript:void(0);" class="spoil-btn">[Spoil] คลิกเพื่อดูข้อความที่ซ่อนไว้</a><span class="spoil-style" style="display:none;"><a href="https://www.facebook.com/Sungsungblog" rel="nofollow" target="_blank" >https://www.facebook.com/Sungsungblog</a></span></div>`;

const Review = (props: ReviewProps) => {
  const [love, setLove] = useState(false);

  const {navigation, route} = props;

  const contentWidth = useWindowDimensions().width - 30;

  const openInGoogleMap = async () => {
    const url =
      'https://www.google.com/maps/dir/?api=1&destination=13.822907,100.528219&dir_action=navigate';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  };

  const share = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
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
          openInGoogleMap();
        } else if (buttonIndex === 1) {
          share();
        }
      },
    );
  };

  useEffect(() => {
    console.log('id', route.params);
  }, []);

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon
              type="Entypo"
              name="chevron-left"
              button
              onPress={() => {
                navigation.navigate('Map');
              }}
              style={{color: 'black'}}
            />
          </Button>
        </Left>
        <Body>
          <Text>Review Content</Text>
        </Body>
        <Right>
          <TouchableOpacity activeOpacity={1} onPress={openActionSheet}>
            <Image source={GoogleMapIcon} style={{width: 25, height: 35}} />
          </TouchableOpacity>
        </Right>
      </Header>
      <Content style={{padding: 20}}>
        <Grid>
          <Row style={{marginBottom: 20}}>
            <Image
              source={{
                uri:
                  'https://f.ptcdn.info/738/067/000/q46yjn9iqt296V1MTBWf-o.jpg',
              }}
              style={{height: 200, width: null, flex: 1}}
            />
          </Row>
          <Row style={{marginVertical: 5}}>
            <Text>Reviewer : หนูน้อยบนยอดเขาอันหนาวเหน็บ</Text>
          </Row>
          <Row>
            <Col size={3}>
              <Row style={{marginVertical: 5}}>
                <Text>DATE : 16 มกราคม 2563 เวลา 15:50 น.</Text>
              </Row>
              <Row style={{marginVertical: 5}}>
                <Text>REVIEW BLOG:</Text>
              </Row>
            </Col>
            {/* <Col size={1}> */}
            {/* {love ? (
                <Icon
                  name="heart"
                  type="Entypo"
                  button
                  style={{color: 'pink'}}
                  onPress={() => {
                    setLove(false);
                  }}
                />
              ) : (
                <Icon
                  name="heart-outlined"
                  type="Entypo"
                  button
                  onPress={async () => {
                    // setLove(true);
                    const url =
                      'https://www.google.com/maps/dir/?api=1&destination=13.822907,100.528219&dir_action=navigate';
                    console.log(url);
                    console.log(Linking);
                    const supported = await Linking.canOpenURL(url);
                    console.log('sssss');
                    console.log(supported);
                    if (supported) {
                      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                      // by some browser in the mobile
                      await Linking.openURL(url);
                    } else {
                      console.log(`Don't know how to open this URL: ${url}`);
                    }
                  }}
                />
              )} */}
            {/* </Col> */}
          </Row>
          <RowWithStyled style={{marginVertical: 5}}>
            <HTML
              source={{html: htmlSource}}
              contentWidth={contentWidth}
              computeEmbeddedMaxWidth={(s) => contentWidth - 50}
            />
            {/* <Card style={{flex: 1}}>
              <CardItem>
                <Text>
                  ร้านนี้ในส่วนของโซนที่นั่ง จะมีทั้ง Indoor / Outdoor / rooftop
                  เลือกนั่งได้ตามสบายมีทั้งร้านอาหารและคาเฟ่ในที่เดียวกัน
                </Text>
              </CardItem>
              <CardItem>
                <Image
                  source={{
                    uri:
                      'https://f.ptcdn.info/738/067/000/q46yrivolb7UQy0Otpr-o.jpg',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Text>
                  ส่วนอาหารและคาเฟ่ มีหลากหลายเมนู ทั้งอาหารไทยกว่า 50 เมนู
                  เครื่องดื่มก็อร่อย ราคาไม่แพง
                </Text>
              </CardItem>
              <CardItem>
                <Image
                  source={{
                    uri:
                      'https://f.ptcdn.info/738/067/000/q46ym3mvvMNl5c5z8rr-o.jpg',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Text>
                  แสงในร้านสวยมาก มีมุมให้ถ่ายเยอะ
                  ทุกๆมุมในร้านเหมือนทำมาเพื่อคนชอบถ่ายรูปจริงๆ ทั้งคลีน
                  ทั้งเรียบหรู ดูสบายตา
                </Text>
              </CardItem>
              <CardItem>
                <Image
                  source={{
                    uri:
                      'https://f.ptcdn.info/738/067/000/q46yqj9l89Ly1eBc8RHR-o.png',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
            </Card> */}
          </RowWithStyled>
        </Grid>
      </Content>
    </Container>
  );
};

export default Review;

const RowWithStyled = styled(Row)``;
