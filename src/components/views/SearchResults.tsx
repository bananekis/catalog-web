import {
  A,
  Button,
  H1,
  Img,
  PDetail,
  PName,
  PPrice,
  PSpecificTypes,
} from "../../App";
import { Grid, useTheme } from "@mui/material";
import { executeScroll } from "../../functions/executeScroll";
import { getSlugName } from "../../functions/getSlugName";
import { products } from "../../products";
import { refactorUrl } from "../../functions/refactorUrl";
import { telNumber } from "../../config";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import loader from "../../assets/gif/loader.gif";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {
  searchValue: string | null;
};

const SearchResults = (props: Props) => {
  const [imgsLoaded, setImgsLoaded] = useState<boolean>(false);
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const filteredProducts = products.filter(
    (obj) =>
      obj.produkt.toLowerCase().indexOf(props.searchValue!.toLowerCase()) >
        -1 ||
      obj.typ.toLowerCase().indexOf(props.searchValue!.toLowerCase()) > -1
  );

  useEffect(() => {
    let counter = 0;
    setImgsLoaded(false);

    const loadImage = (url: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = url;

        loadImg.onload = () => {
          counter++;
          if (counter >= filteredProducts.length - 1) {
            resolve(url);
          }
        };

        loadImg.onerror = (err) => reject(err);
      });
    };
    Promise.all(
      filteredProducts.map((image) => {
        loadImage(require(`../../assets/img/${image.id}.jpg`).default)
          .then(() => {
            setImgsLoaded(true);
          })
          .catch((err) => alert("Failed to load images, error: " + err));
      })
    );
  }, [props.searchValue]);

  if (filteredProducts.length !== 0) {
    return (
      <>
        <Grid container justifyContent="center">
          <H1>{refactorUrl(getSlugName(location, 1)).toUpperCase()}</H1>
        </Grid>
        <Grid
          container
          justifyContent={matches ? "" : "center"}
          margin="0 auto"
          alignItems="flex-end"
        >
          {imgsLoaded ? (
            filteredProducts.map((i) => (
              <Grid
                item
                lg={4}
                md={4}
                sm={5}
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
                    alt={i.produkt}
                  />
                </A>
                {i.typ !== "Párty sety" ? (
                  <>
                    <p
                      style={{
                        fontSize: "1.6em",
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
            ))
          ) : (
            <Grid
              justifyContent="center"
              container
              style={{ display: imgsLoaded ? "none" : "flex" }}
            >
              <img src={loader} style={{ marginBottom: "100vh" }}></img>
            </Grid>
          )}
        </Grid>
      </>
    );
  } else
    return (
      <Grid container justifyContent="center">
        <H1>Neboli nájdené žiadne produkty.</H1>
      </Grid>
    );
};

export default SearchResults;
