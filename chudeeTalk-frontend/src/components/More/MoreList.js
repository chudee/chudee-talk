import React from "react";
import { ListGroup } from "Components";
import { MoreItem } from "Components/More";

const MoreList = ({ list }) => {
  return (
    <ListGroup>
      {list.length > 0 &&
        list.map(item => <MoreItem key={item.id} item={item} />)}
    </ListGroup>
  );
};

export default MoreList;
