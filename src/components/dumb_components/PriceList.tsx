import { Grid } from "@mui/material";
import { H1 } from "../../App";
import { color } from "../../config";
import styled from "styled-components";

const Th = styled.th`
  text-align: left;
  background-color: ${color.black};
  color: ${color.white};
  padding: 8px;
`;

const Td = styled.td`
  border: 1px solid ${color.lightBlack};
  padding: 8px;
`;

const Tr = styled.tr`
  & > td:last-child {
    text-align: end;
    font-weight: 500;
  }
  & > th:last-child {
    text-align: end;
  }
`;

const PriceList = () => {
  return (
    <>
      <Grid xs={12}>
        <H1>CENNÍK DOPRAVY</H1>
      </Grid>
      <Grid item container xs={12} justifyContent="center">
        <table>
          <Tr>
            <Th>Mesto/Obec</Th>
            <Th>Cena</Th>
          </Tr>
          <Tr>
            <Td>Holíč</Td>
            <Td>ZADARMO</Td>
          </Tr>
          <Tr>
            <Td>Skalica</Td>
            <Td>3€</Td>
          </Tr>
          <Tr>
            <Td>Dubovce</Td>
            <Td>4€</Td>
          </Tr>
          <Tr>
            <Td>Kátov</Td>
            <Td>2€</Td>
          </Tr>
          <Tr>
            <Td>Kopčany</Td>
            <Td>2€</Td>
          </Tr>
          <Tr>
            <Td>Mokrý háj</Td>
            <Td>5€</Td>
          </Tr>
          <Tr>
            <Td>Petrova Ves</Td>
            <Td>5€</Td>
          </Tr>
          <Tr>
            <Td>Popudinské Močidlany</Td>
            <Td>3€</Td>
          </Tr>
          <Tr>
            <Td>Prietržka</Td>
            <Td>4€</Td>
          </Tr>
          <Tr>
            <Td>Radimov</Td>
            <Td>4€</Td>
          </Tr>
          <Tr>
            <Td>Radošovce</Td>
            <Td>5€</Td>
          </Tr>
          <Tr>
            <Td>Trnovec</Td>
            <Td>2€</Td>
          </Tr>
          <Tr>
            <Td>Vrádište</Td>
            <Td>3€</Td>
          </Tr>
        </table>
      </Grid>
    </>
  );
};

export default PriceList;
