import { scroller } from "react-scroll";

export const executeScroll = () => {
  scroller.scrollTo("myScrollToElement", {
    duration: 0,
    smooth: true,
    offset: -100,
  });
};
