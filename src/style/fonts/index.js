import { css } from "styled-components";

import CalibreRegularWoff from "./Calibre/Calibre-Regular.woff";
import CalibreSemiboldWoff from "./Calibre/Calibre-Semibold.woff";
import SFMonoRegularWoff from "./SFMono/SFMono-Regular.woff";

const Fonts = css`
  @font-face {
    font-family: Calibre;
    src: url(${CalibreRegularWoff});
  }
  @font-face {
    font-family: CalibreSemibold;
    src: url(${CalibreSemiboldWoff});
  }
  @font-face {
    font-family: SFMono;
    src: url(${SFMonoRegularWoff});
  }
`;

export default Fonts;
