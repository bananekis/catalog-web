import {
  A,
  Button,
  H1,
  PDetail,
  PName,
  PPrice,
  PSpecificTypes,
} from "../../App";
import { Grid } from "@mui/material";
import { Img } from "react-image";
import { executeScroll } from "../../functions/executeScroll";
import { getSlugName } from "../../functions/getSlugName";
import { products } from "../../products";
import { refactorUrl } from "../../functions/refactorUrl";
import { telNumber } from "../../config";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useTheme } from "@mui/material/styles";
import loader from "../../assets/gif/loader.gif";
import useMediaQuery from "@mui/material/useMediaQuery";

const SpecificTypes = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const filteredProducts = products.filter(
    (obj) =>
      obj.typ ===
      getSlugName(location, 1).replace("-", " ").charAt(0).toUpperCase() +
        getSlugName(location, 1).replace("-", " ").slice(1)
  );

  //image load
  let counter = 0;

  useEffect(() => {
    counter = 0;
    setLoading(true);
  }, [location.pathname]);

  const handleOnLoad = () => {
    counter += 1;

    if (counter === filteredProducts.length) {
      setLoading(false);
      executeScroll();
    }
  };

  if (filteredProducts.length !== 0) {
    return (
      <>
        <Grid container justifyContent="center">
          <H1>{refactorUrl(getSlugName(location, 1))}</H1>
        </Grid>
        <Grid
          justifyContent="center"
          container
          style={{
            display: loading ? "flex" : "none",
            marginBottom: "100em",
          }}
        >
          <img src={loader}></img>
        </Grid>
        <Grid
          container
          justifyContent={matches ? "" : "center"}
          margin="0 auto 2em auto"
          alignItems="flex-end"
          style={{
            display: loading ? "none" : "flex",
          }}
        >
          {filteredProducts.map((i) => (
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={10}
              mb={10}
              key={i.id}
              textAlign="center"
            >
              <A
                to={`/${getSlugName(location, 1)}/${i.id}`}
                onClick={executeScroll}
              >
                <Img
                  src={require(`../../assets/img/${i.id}.jpg`).default}
                  onLoad={handleOnLoad}
                  alt={i.produkt}
                  style={{ width: "100%", height: "100%" }}
                />
              </A>
              {i.typ !== "Párty sety" && i.typ !== "Nealko" ? (
                <>
                  <p
                    style={{
                      fontSize: "1.4em",
                      margin: ".5em auto",
                      width: "90%",
                    }}
                  >
                    {i.produkt}
                  </p>
                  <PDetail>Obsah: {i.obsah}</PDetail>
                </>
              ) : (
                <PName>{i.produkt}</PName>
              )}
              <PDetail>Objem: {i.objem}</PDetail>
              <PPrice>{i.cena} €</PPrice>
              <a href={`tel:${telNumber}`}>
                <Button>
                  <div style={{ fontSize: "1em" }}>
                    <PSpecificTypes>Objednaj telefonicky</PSpecificTypes>
                    <strong style={{ fontSize: "1.2em" }}>{telNumber}</strong>
                  </div>
                </Button>
              </a>
            </Grid>
          ))}
        </Grid>
      </>
    );
  } else
    return (
      <>
        <Grid container justifyContent="center">
          <H1>Nenašli sa žiadne výsledky.</H1>
        </Grid>
      </>
    );
};

export default SpecificTypes;
