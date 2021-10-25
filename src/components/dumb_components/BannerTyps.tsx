import {
  DivBanner,
  DivBothInfo,
  DivInfoWrapper,
  DivInnerBanner,
  DivTextInfoTyps,
  GridInfo,
  PInfoMobile,
} from "../../App";
import { Grid } from "@mui/material";
import { getSlugName } from "../../functions/getSlugName";
import { refactorUrl } from "../../functions/refactorUrl";
import { useLocation } from "react-router";

export const BannerTyps = () => {
  const location = useLocation();

  return (
    <DivInfoWrapper>
      <Grid container alignItems="center" margin="0 auto">
        <GridInfo item xs={12} padding="0">
          <DivBothInfo>
            <DivBanner>
              <DivInnerBanner banner={getSlugName(location, 1)} />
            </DivBanner>
            <DivTextInfoTyps>
              <PInfoMobile>{`${refactorUrl(
                getSlugName(location, 1)
              )}`}</PInfoMobile>
            </DivTextInfoTyps>
          </DivBothInfo>
        </GridInfo>
      </Grid>
    </DivInfoWrapper>
  );
};
