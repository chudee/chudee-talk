import React from "react";
import { MdLooksOne } from "react-icons/lib/md";

import { Title, ListGroupItem } from "Components";
import {
  FigureImageWrapper,
  ListGroupItemBody,
  ListGroupItemBodyRow
} from "Components/Wrapper";

const MoreItem = ({ item }) => {
  return (
    <ListGroupItem height="60px" active={true}>
      <FigureImageWrapper width="50px">
        <MdLooksOne size={30} />
      </FigureImageWrapper>
      <ListGroupItemBody>
        <ListGroupItemBodyRow>
          <Title text={item.title} />
        </ListGroupItemBodyRow>
      </ListGroupItemBody>
    </ListGroupItem>
  );
};

export default MoreItem;
