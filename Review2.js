import React, {useState} from 'react';
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
import {Image} from 'react-native';

const Review2 = ({navigation}) => {
  const [love, setLove] = useState(false);
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
          <Text>รีวิว Chuanpisamai Café ชวนพิสมัย ชื่อไทยๆแต่ทำไมวินเทจ</Text>
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
            <Text>Reviewer : สมาชิกหมายเลข 241508623</Text>
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
                  onPress={() => {
                    setLove(true);
                  }}
                />
              )}
            </Col>
          </Row>
          <Row style={{marginVertical: 5}}>
            <Card style={{flex: 1}}>
              <CardItem>
                <Text>
                  ร้านคาเฟ่บรรยากาศวินเทจ น่ารักๆซ่อนตัวในซอยอารีย์
                  ร้านนี้ตั้งอยู่ที่ซอย อารีย์สัมพันธ์ 7 เดิมอยู่ซอยอารีย์ 3
                  ทางร้านได้เป็นร้านเช่า/ขายชุดวินเทจ ชุดแต่งงาน อยู่ก่อนแล้ว
                  การตกแต่งจะออกสไตล์วินเทจหวาน ๆแบบอังกฤษ
                </Text>
              </CardItem>
              <CardItem>
                <Image
                  source={{
                    uri:
                      'https://f.ptcdn.info/056/059/000/pd4olgp44A7NGkOCCob-o.jpg',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Text>
                  ดินเข้ามาด้านซ้ายก็จะเป็นร้านที่ให้เช่าชุดเจ้าสาวสไตล์วินเทจ
                  แต่วันนี้เราไม่ได้มาเช่าชุด เราจะไปหาของกินกั้น...
                  การตกแต่งก็มีของตกแต่งมากมายสไตล์วินเทจให้ได้ถ่ายรูปกัน
                  สามารถนั่งด้านนอกได้ เช่นกัน
                </Text>
              </CardItem>
              <CardItem>
                <Image
                  source={{
                    uri:
                      'https://f.ptcdn.info/056/059/000/pd4ot490hvg3hjOGrxr-o.jpg',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Text>
                  เข้ามาก็จะพบกับตู้โชว์ชุดชา สวยๆ ไว้ให้เลือกใส่ชาหอมๆๆ
                  ถ่ายรูปสวยๆ
                </Text>
              </CardItem>
              <CardItem>
                <Image
                  source={{
                    uri:
                      'https://f.ptcdn.info/057/059/000/pd4p1ciryP3OWHXqDvO-o.jpg',
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

export default Review2;
