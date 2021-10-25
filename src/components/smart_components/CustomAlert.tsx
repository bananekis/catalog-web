import { Button, H1 } from "../../App";
import { Grid } from "@mui/material";
import { confirmAlert } from "react-confirm-alert";
import { useEffect } from "react";
import { useLocalStorage } from "../../customHooks/localStorage";

export const CustomAlert = () => {
  const [confirm, setConfirm] = useLocalStorage("Vypime-Si-Auth", "");

  useEffect(() => {
    if (confirm === "") {
      confirmAlert(options);
    }
  }, []);

  const options = {
    customUI: ({ onClose }: any) => {
      return (
        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <H1>Potvrzdujem, že mám viac ako 18 rokov</H1>
            <Grid item xs={8} margin="0 auto" textAlign="center">
              <Button
                onClick={() => {
                  setConfirm("authentificated");
                  onClose();
                }}
                style={{ padding: "7px 40px" }}
              >
                <p style={{ fontSize: "1.1em", margin: ".5em .5em" }}>
                  Pokračovať
                </p>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      );
    },
    closeOnClickOutside: false,
    closeOnEscape: false,
  };
  return <></>;
};
