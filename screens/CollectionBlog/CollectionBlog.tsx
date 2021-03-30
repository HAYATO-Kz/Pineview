import React from 'react';

import {
  Title,
  SubText,
  TitleContainer,
  GridWrapper,
} from './CollectionBlog.style';
import {
  Grid,
  CollectionBlogCard,
  TouchableIcon,
  ContainerWithSafeArea,
} from '../../components';
import MoreFuctionIcon from '../../assets/icons/more_function_icon.svg';

interface CollectionBlogProps {
  collectionId?: string;
}

const mock_data = {
  title: 'favorite',
  owner: 'username',
  review_blogs: [
    { title: 'review_1' },
    { title: 'review_2_review_review_2_line_place_holder' },
    { title: 'review_3' },
    { title: 'review_4' },
    { title: 'review_5' },
    { title: 'review_6' },
  ],
};

export const CollectionBlog = (props: CollectionBlogProps) => {
  const { collectionId } = props;

  return (
    <ContainerWithSafeArea>
      <TitleContainer>
        <Title>{mock_data.title}</Title>
        {/* use in share feature */}
        {/* <TouchableIcon icon={<MoreFuctionIcon />} onPress={() => {}} /> */}
      </TitleContainer>
      <SubText>
        มี {mock_data.review_blogs.length} รีวิวอยู่ในคอลเลกชันนี้
      </SubText>
      <SubText> สร้างโดย {mock_data.owner} </SubText>
      <GridWrapper>
        <Grid
          keyBase="collection_blog"
          data={mock_data.review_blogs.map((data) => (
            <CollectionBlogCard title={data.title} />
          ))}
        />
      </GridWrapper>
    </ContainerWithSafeArea>
  );
};
