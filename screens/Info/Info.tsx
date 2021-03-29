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
      'Pineview เป็นแอปพลิเคชันที่พัฒนาขึ้นเพื่อช่วยให้ผู้ใช้งานหารีวิวของสถานที่ต่างๆ (ร้านอาหาร, คาเฟ, แหล่งท่องเที่ยว) ได้รวดเร็ว และสามารถอ่านรีวิวได้ง่ายดายมากยิ่งขึ้น',
  },
  {
    header: 'ผู้สนับสนุน :',
    description:
      'Massive Information and Knowledge Engineering Laboratory (MIKE Lab)',
  },
  {
    header: 'ทีมพัฒนา :',
    description: `  Ms. Kunyaruk Katebunlu
  Mr. Hayato Kawai
  Mr. Thanapoom Rattanathummawat`,
  },
];

export const Info = (props: InfoProps) => {
  const { navigation } = props;
  return (
    <ContainerWithSafeArea
      padding="4px 16px"
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
