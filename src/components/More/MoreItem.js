import React from "react";

import { Title, ListGroupItem } from "Components";
import {
  FigureImageWrapper,
  ListGroupItemBody,
  ListGroupItemBodyRow
} from "Components/Wrapper";

const MoreItem = ({ item }) => {
  return (
    <ListGroupItem height="60px" active={true}>
      <FigureImageWrapper width="50px" flexCenter>
        <item.icon size={20} style={{ color: "#aaa" }} />
      </FigureImageWrapper>
      <ListGroupItemBody>
        <ListGroupItemBodyRow>
          <Title text={item.title} size="0.9rem" />
        </ListGroupItemBodyRow>
      </ListGroupItemBody>
    </ListGroupItem>
  );
};

export default MoreItem;
