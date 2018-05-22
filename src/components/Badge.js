import React from "react";
import styled from "styled-components";

const BadgeWrapper = styled.span`
  display: inline-block;
  padding: 0.25rem 0.4rem;
  margin-right: 0.5rem;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: ${p => (p.pill ? "10rem" : ".25rem")};
  padding-right: ${p => (p.pill ? ".6em" : null)};
  padding-left: ${p => (p.pill ? ".6em" : null)};
  color: ${p => (p.primary ? "#ffffff" : "#000000")};
  background-color: ${p => (p.primary ? "#d35400" : "#16a085")};
  position: ${p => (p.absolute ? "absolute" : null)};
  top: ${p => (p.top ? p.top : null)};
  bottom: ${p => (p.bottom ? p.bottom : null)};
  right: ${p => (p.right ? p.right : null)};
  left: ${p => (p.left ? p.left : null)};
`;

// const Badge = ({ pill, primary, text, absolute, top, left, right, bottom }) => {
//   return (
//     <BadgeWrapper pill={pill} primary={primary} absolute={absolute}>
//       {text}
//     </BadgeWrapper>
//   );
// };

const Badge = props => {
  return <BadgeWrapper {...props}>{props.text}</BadgeWrapper>;
};
export default Badge;
