import React from 'react';

import BackIcon from '../../assets/icons/back_icon.svg';
import { Question, Answer, Divider, Container } from './FAQ.style';
import { ContainerWithSafeArea, TouchableIcon } from '../../components';

interface FAQProps {
  navigation: any;
}

const listOfFAQ = [
  {
    question: 'ฉันจะแชร์คอลเลกชันของฉันได้อย่างไร?',
    answer: `คุณสามารถแชร์คอลเลกชันได้ 2 วิธี

    - วิธีที่ 1 -
    1. ไปที่เมนู “คอลเลกชัน”
    2. กดสัญลักษณ์ “ ⋮ ” ของคอลเลกชันที่ต้องการแชร์
    3. เลือกเมนู “แชร์”
    4. กด “คัดลอกข้อความ”
    5. นำข้อความที่คัดลอกจากเราไปโพสต์ได้เลย
        
    - วิธีที่ 2 -
    1. ไปที่เมนู “คอลเลกชัน”
    2. กดเข้าไปในคอลเลกชันที่ต้องการแชร์
    3. กดสัญลักษณ์ “ ⋮ ” บริเวณมุมบนขวา
    4. เลือกเมนู “แชร์”
    5. กด “คัดลอกข้อความ”
    6. นำข้อความที่คัดลอกจากเราไปโพสต์ได้เลย`,
  },
  {
    question: 'ฉันจะดูคอลเลกชันของเพื่อนได้อย่างไร?',
    answer: `คุณสามารถดูคอลเลกชันของเพื่อนได้โดย

    1. ไปที่เมนู “คอลเลกชัน”
    2. กดปุ่ม “ดูคอลเลกชันของเพื่อน”
    3. ใส่ ID คอลเลกชันที่เพื่อนโพสต์ไว้
    4. กดปุ่ม “เรียบร้อย”`,
  },
  {
    question: 'ฉันจะคัดลอกคอลเลกชันของเพื่อนได้อย่างไร?',
    answer: `คุณสามารถคัดลอกคอลเลกชันของเพื่อนได้โดย

    1. เข้าคอลเลกชันของเพื่อน
    2. กดสัญลักษณ์ “ ⋮ ” บริเวณมุมบนขวา
    3. เลือกเมนู “เพิ่มเข้าคอลเลกชันของฉัน”
    4. กดปุ่ม “สร้างคอลเลกชัน”`,
  },
];

export const FAQ = (props: FAQProps) => {
  const { navigation } = props;
  return (
    <ContainerWithSafeArea
      padding="30px 16px"
      isInTabMode
      header={{
        leftComponent: (
          <TouchableIcon
            icon={<BackIcon />}
            onPress={() => navigation.goBack()}
          />
        ),
        title: 'คำถามที่พบบ่อย',
        hasBorder: true,
      }}>
      {listOfFAQ.map((faq, index) => (
        <Container key={`faq-${index}`}>
          <Question>ถาม: {faq.question}</Question>
          <Answer>
            <Question>ตอบ:</Question> {faq.answer}
          </Answer>
          {index !== listOfFAQ.length - 1 && <Divider />}
        </Container>
      ))}
    </ContainerWithSafeArea>
  );
};
