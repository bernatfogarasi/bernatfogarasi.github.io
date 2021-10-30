import { useEffect, useState } from "react";
import styled from "styled-components";
import Popup from "../Popup";
import PopupText from "../PopupText";

import googlechrome from "./../../assets/icons/browsers/googlechrome.png";
import safari from "./../../assets/icons/browsers/safari.png";
import firefox from "./../../assets/icons/browsers/firefox.png";
import opera from "./../../assets/icons/browsers/opera.png";
import internetexplorer from "./../../assets/icons/browsers/internetexplorer.png";
import microsoftedge from "./../../assets/icons/browsers/microsoftedge.png";

const Browser = styled.a`
  display: flex;
  align-items: center;
`;
const BrowserImage = styled.img`
  margin: 10px;
  width: 30px;
`;

const BrowserName = styled.div`
  margin: 10px;
  font-family: Calibre;
`;

// https://stackoverflow.com/a/26358856
const detectBrowser = () => {
  const userAgent = navigator.userAgent;
  if ((userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR")) !== -1) {
    return "opera";
  } else if (userAgent.indexOf("Chrome") !== -1) {
    return "googlechrome";
  } else if (userAgent.indexOf("Safari") !== -1) {
    return "safari";
  } else if (userAgent.indexOf("Firefox") !== -1) {
    return "firefox";
  } else if (
    userAgent.indexOf("MSIE") !== -1 ||
    !document.documentMode === true
  ) {
    return "internetexplorer";
  } else {
    return "unknown";
  }
};

const browsers = {
  googlechrome: {
    name: "Google Chrome",
    image: googlechrome,
    url: "https://www.google.com/chrome",
    supported: true,
  },
  safari: {
    name: "Safari",
    image: safari,
    url: "https://support.apple.com/downloads/safari",
    supported: true,
  },
  microsoftedge: {
    name: "Microsoft Edge",
    image: microsoftedge,
    url: "https://www.microsoft.com/en-us/edge",
    supported: true,
  },
  opera: {
    name: "Opera",
    image: opera,
    url: "https://www.opera.com/download",
    supported: true,
  },
  firefox: {
    name: "Firefox",
    image: firefox,
    url: "https://www.mozilla.org/en-US/firefox/new/",
    supported: false,
  },
  internetexplorer: {
    name: "Internet Explorer",
    image: internetexplorer,
    url: "https://www.microsoft.com/en-ie/download/internet-explorer.aspx",
    supported: false,
  },
  unknown: {
    name: "Unknown",
    image: null,
    url: null,
    supported: false,
  },
};

const BrowserPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(
      !Object.keys(browsers)
        .filter((key) => browsers[key].supported)
        .includes(detectBrowser())
    );
  }, []);

  return (
    <Popup initialShow={show}>
      <PopupText>Recommended browsers:</PopupText>
      {Object.values(browsers).map(
        ({ name, image, url, supported }) =>
          supported && (
            <Browser key={name} href={url} target="_blank" rel="noreferrer">
              <BrowserImage src={image} alt=""></BrowserImage>
              <BrowserName>{name}</BrowserName>
            </Browser>
          )
      )}
      <PopupText>
        Please switch to a{" "}
        <a
          href="https://www.dummies.com/web-design-development/site-development/common-webkit-browsers/"
          target="_blank"
          rel="noreferrer"
        >
          webkit based browser
        </a>{" "}
        for a better experience.
      </PopupText>
    </Popup>
  );
};

export default BrowserPopup;
