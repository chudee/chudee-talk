import React from "react";

import {
  ListGroupItem,
  FigureImage,
  Badge,
  Time,
  Title,
  Text
} from "Components";
import {
  FigureImageWrapper,
  ListGroupItemBody,
  ListGroupItemBodyCol,
  ListGroupItemBodyRow
} from "Components/Wrapper";

const ChattingItem = () => {
  return (
    <ListGroupItem height="80px" active={true}>
      <FigureImageWrapper width="80px">
        <FigureImage
          size="45px"
          url={
            "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100"
          }
        />
      </FigureImageWrapper>
      <ListGroupItemBody>
        {/* <ListGroupItemBodyCol col="1"> */}
        <ListGroupItemBodyRow>
          <Title />
          <Time />
        </ListGroupItemBodyRow>
        <ListGroupItemBodyRow>
          <Text />
          <Badge pill primary text="1" />
        </ListGroupItemBodyRow>
        {/* </ListGroupItemBodyCol> */}
      </ListGroupItemBody>
    </ListGroupItem>
  );
};

export default ChattingItem;
