import {
  Atelephone,
  DivBanner,
  DivBothInfo,
  DivInfoWrapper,
  DivInnerBanner,
  DivTextInfo,
  GridInfo,
  PInfoBanner,
  PInfoMobile,
  PInfoNonStop,
  PInfoPayment,
} from "../../App";
import { Grid } from "@mui/material";
import { Location } from "../../types";
import { getSlugName } from "../../functions/getSlugName";
import { telNumber } from "../../config";
import { useLocation } from "react-router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation<Location>();

  return (
    <DivInfoWrapper>
      <Grid container alignItems="center" margin="0 auto">
        <GridInfo item xs={12} padding="0">
          <DivBothInfo>
            <DivBanner>
              <DivInnerBanner banner={getSlugName(location, 1)} />
            </DivBanner>
            <DivTextInfo>
              <PInfoMobile>
                <Atelephone
                  style={
                    matches ? { fontSize: "inherit" } : { fontSize: ".9em" }
                  }
                  href={`tel:${telNumber}`}
                >
                  {telNumber}
                </Atelephone>
              </PInfoMobile>
              <PInfoBanner>
                Donáška alkoholu Holíč a okolie do 25 minút.
              </PInfoBanner>
              <PInfoPayment>Platba v hotovosti aj kartou</PInfoPayment>
              <PInfoPayment style={{ fontSize: "1.5em" }}>
                22:00-03:00
              </PInfoPayment>
              <PInfoNonStop>Pia-So</PInfoNonStop>
            </DivTextInfo>
          </DivBothInfo>
        </GridInfo>
      </Grid>
    </DivInfoWrapper>
  );
};
