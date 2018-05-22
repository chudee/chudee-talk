import styled from "styled-components";

const ListGroupItemBodyRow = styled.li`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: ${p => (p.content ? p.content : "space-between")};
  flex-direction: row;
  margin-bottom: ${p => (p.mb ? p.mb : "0")};
`;

export default ListGroupItemBodyRow;
