import { A, Button, Img, P, PPrice } from "../../App";
import { Grid } from "@mui/material";
import { color } from "../../config";
import { executeScroll } from "../../functions/executeScroll";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { useTheme } from "@mui/material/styles";
import loader from "../../assets/gif/loader.gif";
import useMediaQuery from "@mui/material/useMediaQuery";

export const TypsSpecific = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const ref = useRef() as React.MutableRefObject<HTMLImageElement | null>;

  let counter = 0;
  //image load

  useEffect(() => {
    counter = 0;
    if (!(ref.current && ref.current.complete)) {
      setLoading(true);
    }
  }, [location.pathname]);

  const handleOnLoad = () => {
    counter += 1;
    if (counter >= 2) {
      setLoading(false);
      executeScroll();
    }
  };

  return (
    <>
      <Grid
        justifyContent="center"
        container
        style={{ display: loading ? "flex" : "none" }}
      >
        <img src={loader}></img>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems={matchesSM ? "end" : "center"}
        style={{ display: loading ? "none" : "flex" }}
        flexDirection={matches ? "column" : "row"}
      >
        <Grid item xs={5}>
          <Img
            src={require(`../../assets/img/1.jpg`).default}
            onLoad={handleOnLoad}
            style={{ width: "100%", height: "100%" }}
            ref={ref}
          />
        </Grid>
        <Grid item lg={5} md={6} sm={7} xs={12}>
          <div
            style={{
              padding: "10px",
            }}
          >
            <PPrice style={{ margin: "0", color: `${color.gray}` }}>
              Mosow Mule
            </PPrice>
            <P style={{ fontWeight: 600, color: `${color.gray}` }}>
              35 - 70 % alkoholu (najčastejšie 40%)
            </P>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the
            </p>
            <A to={`/párty-sety`} onClick={executeScroll}>
              <Button
                style={{
                  marginRight: "4%",
                  width: "48%",
                  backgroundColor: `${color.shadowWhite}`,
                  color: `${color.black}`,
                }}
              >
                Zobraziť párty sety
              </Button>
            </A>

            <A to={`/`} onClick={() => window.scrollTo(0, 0)}>
              <Button
                style={{ width: "48%", backgroundColor: `${color.gray}` }}
              >
                Zobraziť ponuku
              </Button>
            </A>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems={matchesSM ? "end" : "center"}
        textAlign="end"
        style={{ display: loading ? "none" : "flex" }}
        flexDirection={matches ? "column" : "row-reverse"}
      >
        <Grid item xs={5}>
          <Img
            src={require(`../../assets/img/2.jpg`).default}
            onLoad={handleOnLoad}
            style={{ width: "100%", height: "100%" }}
            ref={ref}
          />
        </Grid>
        <Grid item lg={5} md={6} sm={7} xs={12}>
          <div
            style={{
              padding: "10px",
            }}
          >
            <PPrice style={{ margin: "0", color: `${color.gray}` }}>
              Mosow Mule
            </PPrice>
            <P style={{ fontWeight: 600, color: `${color.gray}` }}>
              35 - 70 % alkoholu (najčastejšie 40%)
            </P>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the
            </p>
            <A to={`/párty-sety`} onClick={executeScroll}>
              <Button
                style={{
                  marginRight: "4%",
                  width: "48%",
                  backgroundColor: `${color.shadowWhite}`,
                  color: `${color.black}`,
                }}
              >
                Zobraziť párty sety
              </Button>
            </A>

            <A to={`/`} onClick={() => window.scrollTo(0, 0)}>
              <Button
                style={{ width: "48%", backgroundColor: `${color.gray}` }}
              >
                Zobraziť ponuku
              </Button>
            </A>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
