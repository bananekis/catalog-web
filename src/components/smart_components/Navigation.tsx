import {
  A,
  ImgClose,
  ImgHamburger,
  ImgNav,
  Li,
  LiDropWrapper,
  Nav,
  Ul,
  UlDrop,
} from "../../App";
import { Grid } from "@mui/material";
import { executeScroll } from "../../functions/executeScroll";
import { products } from "../../products";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import arrowDown from "../../assets/svg/arrowDown.svg";
import cross from "../../assets/svg/cross.svg";
import hamburger from "../../assets/svg/hamburger.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Navigation = () => {
  const [nav, setNav] = useState<boolean>(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(1200));
  const matchesHamburger = useMediaQuery(theme.breakpoints.down("md"));

  const categories = new Set(products.map((i) => i.typ));

  const uniqueCategoryObject = products
    .map((_, index) => {
      return products.find((obj) => obj.typ === Array.from(categories)[index]);
    })
    .filter((i) => i !== undefined);

  const filteredMenu = uniqueCategoryObject.filter(
    (i) => i?.typ !== "Párty sety" && i?.typ !== "Nealko"
  );

  return (
    <Grid item lg={6} md={12} xs={6} width={matches ? "80%" : ""}>
      <ImgHamburger
        matches={matchesHamburger}
        src={hamburger}
        onClick={() => setNav(!nav)}
      />
      <Nav>
        <Ul nav={nav}>
          <ImgClose src={cross} onClick={() => setNav(!nav)} />

          <LiDropWrapper>
            <A to="#" style={{ cursor: "default" }}>
              ALKOHOL
            </A>
            <ImgNav src={arrowDown} />
            <UlDrop>
              {Object.keys(filteredMenu).map((_, index) => (
                <Li key={filteredMenu[index]?.id}>
                  <A
                    to={`/${filteredMenu[index]?.typ.toLowerCase()}`}
                    onClick={executeScroll}
                  >
                    {filteredMenu[index]?.typ}
                  </A>
                </Li>
              ))}
            </UlDrop>
          </LiDropWrapper>
          <Li>
            <A to="/nealko" onClick={executeScroll}>
              NEALKO
            </A>
          </Li>
          <Li>
            <A to="/párty-sety" onClick={executeScroll}>
              PÁRTY SETY
            </A>
          </Li>
          <LiDropWrapper>
            <A to="#" onClick={executeScroll} style={{ cursor: "default" }}>
              TYPY
            </A>
            <ImgNav src={arrowDown} />
            <UlDrop>
              <Li>
                <A to={`/čo-sa-pije-v-zime`} onClick={executeScroll}>
                  Čo sa pije v zime
                </A>
              </Li>
              <Li>
                <A to={`/čo-sa-pije-v-lete`} onClick={executeScroll}>
                  Čo sa pije v lete
                </A>
              </Li>
            </UlDrop>
          </LiDropWrapper>
          <Li>
            <A to="/naše-služby" onClick={executeScroll}>
              NAŠE SLUŽBY
            </A>
          </Li>
          <Li>
            <A to="/kontakt" onClick={executeScroll}>
              KONTAKT
            </A>
          </Li>
        </Ul>
      </Nav>
    </Grid>
  );
};

export default Navigation;
