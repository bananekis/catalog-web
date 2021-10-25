import { DivAbout, H1 } from "../../App";
import { Grid } from "@mui/material";
import { getSlugName } from "../../functions/getSlugName";
import { refactorUrl } from "../../functions/refactorUrl";
import { useLocation } from "react-router";

const About = () => {
  const location = useLocation();

  return (
    <>
      <Grid xs={12} container justifyContent="center">
        <H1>{refactorUrl(getSlugName(location, 1))}</H1>
      </Grid>
      <Grid xs={12} container justifyContent="center">
        <DivAbout>
          <p>
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
      <Grid
        xs={12}
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item xs={12}>
          <H1>Cena dopravy</H1>
        </Grid>
        <Grid item xs={12}>
          <DivAbout>
            <p>Holíč: ZADARMO </p>
            <p>Skalica: 3€</p>
            <p>Ostatné (okres SI): 30 centov / KM * 2</p>
          </DivAbout>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
