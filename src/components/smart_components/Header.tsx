import {
  A,
  DivHeader,
  DivHeaderWrapper,
  DivWrapperInput,
  ImgLogo,
  ImgSearch,
  Input,
} from "../../App";
import { Grid } from "@mui/material";
import { executeScroll } from "../../functions/executeScroll";
import { useHistory } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Navigation from "./Navigation";
import logo from "../../assets/svg/logo.svg";
import search from "../../assets/svg/search.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {
  handleSearch: (e: string) => void;
};

export const Header = (props: Props) => {
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(1200));
  const matchesInput = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <DivHeaderWrapper>
      <DivHeader>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={matches ? "column" : "row"}
        >
          <Grid
            item
            lg={3}
            md={4}
            sm={5}
            xs={6}
            display="flex"
            justifyContent="flex-start"
            textAlign={matches ? "center" : "inherit"}
          >
            <A to="/" onClick={() => window.scrollTo(0, 0)}>
              <ImgLogo src={logo} alt="vypime si"></ImgLogo>
            </A>
          </Grid>

          <Navigation />

          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={6}
            display="flex"
            justifyContent="flex-end"
            align-items="flex-end"
          >
            <DivWrapperInput>
              <ImgSearch src={search} />
              <Input
                placeholder="vyhľadať..."
                onChange={(e) => {
                  if (e.target.value === "") {
                    history.push("/");
                    window.scrollTo(0, 0);
                  } else {
                    matchesInput ? "" : executeScroll();
                    history.push("/hľadaný-produkt");
                  }
                  props.handleSearch(e.target.value);
                }}
              />
            </DivWrapperInput>
          </Grid>
        </Grid>
      </DivHeader>
    </DivHeaderWrapper>
  );
};
