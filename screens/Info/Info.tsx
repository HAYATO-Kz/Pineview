import React from 'react';

import BackIcon from '../../assets/icons/back_icon.svg';
import { Header, Description, Container } from './Info.style';
import { ContainerWithSafeArea, TouchableIcon } from '../../components';

interface InfoProps {
  navigation: any;
}

const listOfInfo = [
  {
    header: 'เกี่ยวกับ :',
    description:
      'Pineview เป็นแอปพลิเคชันที่พัฒนาขึ้นเพื่อช่วยให้ผู้ใช้งานหารีวิวของสถานที่ต่างๆ รอบตัว (ร้านอาหาร คาเฟ และแหล่งท่องเที่ยว) ได้รวดเร็ว และสามารถอ่านรีวิวของสถานที่ที่มีรีวิวบนพันทิปได้ง่ายดายมากยิ่งขึ้น',
  },
  {
    header: 'ผู้สนับสนุน :',
    description:
      'Massive Information and Knowledge Engineering Laboratory (MIKE Lab)',
  },
  {
    header: 'ทีมพัฒนา :',
    description: ` Ms. Kunyaruk Katebunlu
 Mr. Hayato Kawai
 Mr. Thanapoom Rattanathummawat`,
  },
];

export const Info = (props: InfoProps) => {
  const { navigation } = props;
  return (
    <ContainerWithSafeArea
      paddingTop={4}
      paddingRear={16}
      loading={false}
      header={{
        leftComponent: (
          <TouchableIcon
            icon={<BackIcon />}
            onPress={() => navigation.goBack()}
          />
        ),
        title: 'เกี่ยวกับ Pineview',
        hasBorder: true,
      }}>
      {listOfInfo.map((info, index) => (
        <Container key={`info-${index}`}>
          <Header>{info.header}</Header>
          <Description>{info.description}</Description>
        </Container>
      ))}
    </ContainerWithSafeArea>
  );
};
