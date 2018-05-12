import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";
// import "./fonts.css";
import Roboto from "assets/fonts/Roboto-Black.ttf";

export default () => injectGlobal`
  ${styledNormalize}
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('ttf');
    font-weight: normal;
    font-style: normal;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`;
