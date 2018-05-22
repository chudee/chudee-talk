import React from "react";
import { MdAssignment } from "react-icons/lib/md";
import styled from "styled-components";

import { ListGroupItem, FigureImage, Badge, Title, Text } from "Components";
import {
  FigureImageWrapper,
  ListGroupItemBody,
  ListGroupItemBodyCol,
  ListGroupItemBodyRow
} from "Components/Wrapper";

const IconWrapper = styled(MdAssignment)`
  width: 40px;
  height: 40px;
  color: rgba(0, 0, 0, 0.15);
  margin-right: 2rem;
  &:hover {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const MoreProfile = () => {
  return (
    <ListGroupItem height="6.875rem" bg="rgba(0,0,0,0.03)">
      <FigureImageWrapper width="100px">
        <FigureImage
          size="65px"
          url={
            "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100"
          }
        />
      </FigureImageWrapper>
      <ListGroupItemBody>
        <ListGroupItemBodyRow>
          <ListGroupItemBodyCol col="1">
            <Title size="1rem" mb="1rem" text="chudee" />
            <ListGroupItemBodyRow content="flex-start" mb="0.5rem">
              <Text width="2.5rem" fw="300" text="계정" />
              <Text fw="400" color="#444" text="chudee@gmail.com" />
            </ListGroupItemBodyRow>
            <ListGroupItemBodyRow content="flex-start">
              <Text width="2.5rem" fw="300" text="ID" />
              <Text fw="400" color="#444" text="chudee" />
            </ListGroupItemBodyRow>
          </ListGroupItemBodyCol>
          <FigureImageWrapper width="50px">
            <IconWrapper />
            <Badge
              pill
              primary
              text="3"
              absolute={true}
              top="-3px"
              right="22px"
            />
          </FigureImageWrapper>
        </ListGroupItemBodyRow>
      </ListGroupItemBody>
    </ListGroupItem>
  );
};

export default MoreProfile;
