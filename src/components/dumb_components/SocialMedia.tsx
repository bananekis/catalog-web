import { DivSocialMedia } from "../../App";

import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";

const SocialMedia = () => {
  return (
    <DivSocialMedia>
      <a
        href="https://www.instagram.com/vypime_si/"
        className="toRight"
        style={{ lineHeight: 0 }}
      >
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://www.facebook.com/vypimesi">
        <img src={facebook} alt="facebook" style={{ lineHeight: 0 }} />
      </a>
    </DivSocialMedia>
  );
};

export default SocialMedia;
