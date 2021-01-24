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
import {Image, Linking} from 'react-native';

interface ReviewProps {
  navigation: any;
  route: any;
}

const Review = (props: ReviewProps) => {
  const [love, setLove] = useState(false);

  const {navigation, route} = props;

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
          <Icon name="share" type="Entypo" />
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
            <Col size={1}>
              {love ? (
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
              )}
            </Col>
          </Row>
          <Row style={{marginVertical: 5}}>
            <Card style={{flex: 1}}>
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
            </Card>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default Review;
