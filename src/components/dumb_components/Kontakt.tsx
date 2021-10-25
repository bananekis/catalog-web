import { Button, DivKontakt, H1, PKontakt } from "../../App";
import { Grid, useMediaQuery } from "@mui/material";
import { getSlugName } from "../../functions/getSlugName";
import { telNumber } from "../../config";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import mail from "../../assets/svg/mail.svg";
import phone from "../../assets/svg/phone.svg";

const Kontakt = () => {
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid container justifyContent="center" margin="0!important">
        <H1>{getSlugName(location, 1).toUpperCase()}</H1>
      </Grid>
      <Grid container justifyContent="center">
        <DivKontakt>
          <p style={{ fontWeight: 500 }}>BOMARI s.r.o.</p>
          <p>Sídlo: Moyzesova 660/11, 908 51 Holíč</p>
          <p>IČO: 47 162 996</p>
          <p>DIČ: 2023779736</p>
        </DivKontakt>
      </Grid>
      <Grid
        container
        justifyContent="center"
        item
        lg={5}
        md={6}
        sm={8}
        xs={12}
        margin="0 auto"
        alignItems="center"
        textAlign="center"
        flexDirection={matches ? "column" : "row"}
      >
        <Grid item lg={6} xs={7} mb={matches ? 5 : 2}>
          <img src={phone} style={{ width: "25%" }} />
          <PKontakt>{telNumber}</PKontakt>
          <a href={`tel:${telNumber}`}>
            <Button>Zavolajte nám</Button>
          </a>
        </Grid>
        <Grid item lg={6} xs={7} mb={matches ? 5 : 2}>
          <img src={mail} style={{ width: "25%" }} />
          <PKontakt>vypimesi@gmail.com</PKontakt>
          <a href={`mailto:vypimesi@gmail.com`}>
            <Button>Napíšte nám</Button>
          </a>
        </Grid>
      </Grid>
    </>
  );
};

export default Kontakt;
