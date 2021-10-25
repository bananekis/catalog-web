import {
  A,
  Button,
  H1,
  PInfo,
  PLike,
  PPopis,
  PPrice,
  PSpecificTypes,
  PSpecification,
  SpanSpecification,
} from "../../App";
import { Grid } from "@mui/material";
import { Img } from "react-image";
import { color, telNumber } from "../../config";
import { executeScroll } from "../../functions/executeScroll";
import { getSlugName } from "../../functions/getSlugName";
import { products } from "../../products";
import { randomNumbers } from "../../functions/randomNumbers";
import { refactorUrl } from "../../functions/refactorUrl";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useTheme } from "@mui/material/styles";
import loader from "../../assets/gif/loader.gif";
import useMediaQuery from "@mui/material/useMediaQuery";

const SpecificAlcohol = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesLike = useMediaQuery(theme.breakpoints.down(900));

  const bottle = products.find((obj) => obj.id === +getSlugName(location, 2));
  const img = getSlugName(location, 2);
  const offerProductsID = randomNumbers();

  //image load

  useEffect(() => {
    setLoading(true);
  }, [location.pathname]);

  const handleOnLoad = () => {
    setLoading(false);
    executeScroll();
  };

  if (bottle !== undefined) {
    return (
      <>
        <Grid item xs={12} container justifyContent="center">
          <H1>{refactorUrl(getSlugName(location, 1)).toUpperCase()}</H1>
        </Grid>
        <Grid
          container
          margin="0 auto"
          alignItems="center"
          justifyContent="center"
          flexDirection={matches ? "row" : "column"}
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={10}
            style={{ display: loading ? "none" : "flex" }}
          >
            <Img
              src={require(`../../assets/img/${img}.jpg`).default}
              onLoad={handleOnLoad}
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={10}
            justifyContent="center"
            style={{ display: loading ? "flex" : "none" }}
          >
            <img src={loader}></img>
          </Grid>
          <Grid
            item
            lg={6}
            md={5}
            sm={5}
            xs={10}
            textAlign={matches ? "left" : "center"}
          >
            {bottle.typ !== "Párty sety" && bottle.typ !== "Nealko" ? (
              <PInfo>
                {bottle.produkt + " " + bottle.obsah + " " + bottle.objem}
              </PInfo>
            ) : (
              <PInfo>{bottle.produkt}</PInfo>
            )}

            <PPopis>{bottle.popis}</PPopis>
            <SpanSpecification>
              <PSpecification>Objem:</PSpecification>
              {bottle.objem}
            </SpanSpecification>
            {bottle.typ === "Nealko" ? (
              ""
            ) : (
              <SpanSpecification>
                <PSpecification>Obsah:</PSpecification>
                {bottle.obsah}
              </SpanSpecification>
            )}

            <SpanSpecification>
              <PSpecification>Doba doručenia:</PSpecification>
              do 25 minút
            </SpanSpecification>

            <PPrice>{`Cena: ${bottle.cena} €`}</PPrice>
            <a href={`tel:${telNumber}`}>
              <Button>
                <PSpecificTypes>Objednaj telefonicky</PSpecificTypes>
                <strong style={{ fontSize: "1.2em" }}>{telNumber}</strong>
              </Button>
            </a>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item lg={6} xs={8} marginTop="5em">
            <PLike>Mohlo by sa Vám páčiť...</PLike>
          </Grid>
        </Grid>
        <Grid
          container
          margin="0 auto"
          alignItems="baseline"
          justifyContent={matches ? "" : "center"}
        >
          {Array.from({ length: 4 }, (_, index) => {
            let newObject = products.find(
              (obj) => obj.id === offerProductsID[index]
            );

            if (newObject !== undefined) {
              return (
                <Grid
                  item
                  lg={2}
                  md={3}
                  sm={4}
                  xs={5}
                  margin={matchesLike ? "0 auto" : ""}
                  textAlign="center"
                  key={Math.random()}
                  mb={2}
                >
                  <A
                    to={`/${newObject?.typ.toLocaleLowerCase()}/${
                      newObject?.id
                    }`}
                    style={{ color: color.black, fontWeight: 500 }}
                    onClick={executeScroll}
                  >
                    <Img
                      src={
                        require(`../../assets/img/${newObject?.id}.jpg`).default
                      }
                      alt={`${newObject?.produkt}`}
                      style={{ width: "100%", height: "100%" }}
                    />
                    {newObject?.produkt}
                  </A>
                </Grid>
              );
            }
          })}
        </Grid>
      </>
    );
  } else
    return (
      <Grid item xs={12} container justifyContent="center">
        <H1>Nenašli sa žiadne výsledky.</H1>
      </Grid>
    );
};

export default SpecificAlcohol;
