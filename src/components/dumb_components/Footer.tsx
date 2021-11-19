import { DivFooter } from "../../App";
import { Grid } from "@mui/material";
import { color } from "../../config";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <>
      <DivFooter>
        <Grid item xs={12}>
          Vypime SI je služba, ktorá ti doručí tvoj obľúbený alkohol v okrese SI{" "}
          <br /> <br /> © 2021 BOMARI s.r.o. IČO: 47 162 996
        </Grid>
        <Grid item xs={12} mt={2}>
          <a
            href="../../../VOP-vypime-si.sk.pdf"
            target="_blank"
            style={{ color: color.white }}
          >
            Všeobecné obchodné podmienky
          </a>
        </Grid>
        <Grid item xs={12} justifyContent="center">
          <SocialMedia />
        </Grid>
      </DivFooter>
    </>
  );
};

export default Footer;
