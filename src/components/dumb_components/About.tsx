import { DivAbout, H1 } from "../../App";
import { Grid } from "@mui/material";
import { color } from "../../config";
import { getSlugName } from "../../functions/getSlugName";
import { refactorUrl } from "../../functions/refactorUrl";
import { useLocation } from "react-router";

const About = () => {
  const location = useLocation();

  return (
    <>
      <Grid xs={12}>
        <H1>{refactorUrl(getSlugName(location, 1))}</H1>
      </Grid>
      <Grid xs={12} container justifyContent="center">
        <DivAbout>
          <p style={{ marginTop: 0 }}>
            Máte doma súkromnú párty a v tom najlepšom sa Vám minie Váš obľúbený
            alkohol? Vonku je chladno a čerpacia stanica ďaleko? Alebo sa Vám
            len nechce v noci nasadzovať rúško a vychádzať z teplého domova?
          </p>
          <p style={{ fontWeight: 500 }}>
            V tom prípade urobte objednávku a my Vám všetko potrebné behom 25
            min privezieme k Vám domov.
          </p>
          <p>Rozvážame alkoholické aj nealkoholické nápoje.</p>
          <p>
            V našej pestrej ponuke nájdete druhy alkoholu ako{" "}
            <strong>vodka</strong>, <strong>whiskey</strong>,{" "}
            <strong>rum</strong>, <strong>gin</strong>,{" "}
            <strong>tequilla</strong> a ďalšie.
          </p>
        </DivAbout>
      </Grid>
    </>
  );
};

export default About;
