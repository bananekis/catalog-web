import { A, CustomCarousel, H1, Img } from "../../App";
import { Grid } from "@mui/material";
import { color } from "../../config";
import { getSlugName } from "../../functions/getSlugName";
import { products } from "../../products";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { useTheme } from "@mui/material/styles";
import loader from "../../assets/gif/loader.gif";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Offer = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const theme = useTheme();
  const location = useLocation();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesMobile = useMediaQuery(theme.breakpoints.down(430));

  const carouselRef = useRef<any>(undefined);

  const categories = new Set(products.map((i) => i.typ));

  const uniqueCategoryObject = products
    .map((_, index) => {
      return products.find((obj) => obj.typ === Array.from(categories)[index]);
    })
    .filter((i) => i !== undefined);

  //image load
  let counter = 0;

  useEffect(() => {
    counter = 0;
    setLoading(true);
  }, [location.pathname]);

  const handleOnLoad = () => {
    counter += 1;
    if (counter >= 11) {
      setLoading(false);
      setTimeout(() => window.scrollTo(0, 0), 100);
    }
  };

  return (
    <>
      <Grid container justifyContent="center">
        <H1>NAŠA PONUKA</H1>
      </Grid>
      <Grid
        justifyContent="center"
        container
        style={{ display: loading ? "flex" : "none" }}
      >
        <img src={loader}></img>
      </Grid>
      <Grid
        item
        lg={12}
        md={11}
        sm={11}
        xs={10}
        container
        justifyContent="center"
        margin="0 auto"
        style={{ display: loading ? "none" : "flex" }}
      >
        <CustomCarousel
          isRTL={false}
          itemsToShow={matchesMobile === true ? 1 : matches === true ? 2 : 4}
          itemsToScroll={matchesMobile === true ? 1 : matches === true ? 2 : 4}
          enableSwipe={true}
          enableAutoPlay={true}
          autoPlaySpeed={3000}
          ref={carouselRef}
          showEmptySlots={true}
          onChange={(_, pageIndex) => {
            const paginationLength = carouselRef.current.state.pages.length - 1;
            if (
              pageIndex === paginationLength &&
              getSlugName(location, 1) === ""
            ) {
              setTimeout(() => carouselRef.current?.goTo(0), 3000);
            }
          }}
        >
          {Object.keys(uniqueCategoryObject).map((_, index) => (
            <Grid
              item
              lg={10}
              md={11}
              sm={11}
              xs={10}
              justifyContent="center"
              key={uniqueCategoryObject[index]?.id}
              textAlign="center"
              fontSize="1.3em"
              fontWeight={500}
              mb={3}
            >
              <A
                to={`/${uniqueCategoryObject[index]?.typ.toLowerCase()}`}
                style={{ color: color.black }}
              >
                <Img
                  src={
                    require(`../../assets/img/${uniqueCategoryObject[index]?.id}.jpg`)
                      .default
                  }
                  alt={`${uniqueCategoryObject[index]?.typ.toLowerCase()}`}
                  onLoad={handleOnLoad}
                />
                {uniqueCategoryObject[index]?.typ}
              </A>
            </Grid>
          ))}
        </CustomCarousel>
      </Grid>
    </>
  );
};
