import React from "react";

import { ListGroupItem, FigureImage, StatusMessage, Title } from "Components";
import {
  FigureImageWrapper,
  ListGroupItemBody,
  ListGroupItemBodyCol,
  ListGroupItemBodyRow
} from "Components/Wrapper";

const UserItem = () => {
  return (
    <ListGroupItem height="60px" active={true}>
      <FigureImageWrapper width="80px">
        <FigureImage
          size="45px"
          url={
            "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100"
          }
        />
      </FigureImageWrapper>
      <ListGroupItemBody>
        <ListGroupItemBodyRow>
          <Title />
          <StatusMessage />
        </ListGroupItemBodyRow>
      </ListGroupItemBody>
    </ListGroupItem>
  );
};

export default UserItem;
