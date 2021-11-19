import "react-confirm-alert/src/react-confirm-alert.css";
import { Banner } from "./components/dumb_components/Banner";
import { BannerTyps } from "./components/dumb_components/BannerTyps";
import { CustomAlert } from "./components/smart_components/CustomAlert";
import { Element } from "react-scroll";
import { Grid } from "@mui/material";
import { Header } from "./components/smart_components/Header";
import { Link, Route, useLocation } from "react-router-dom";
import { Offer } from "./components/smart_components/Offer";
import { TypsSpecific } from "./components/views/WhatToDrink";
import { breakpoint, color } from "./config";
import { getSlugName } from "./functions/getSlugName";
import { useEffect, useState } from "react";
import About from "./components/dumb_components/About";
import Carousel from "react-elastic-carousel";
import Footer from "./components/dumb_components/Footer";
import Kontakt from "./components/dumb_components/Kontakt";
import PriceList from "./components/dumb_components/PriceList";
import SearchResults from "./components/views/SearchResults";
import SpecificAlcohol from "./components/views/SpecificAlcohol";
import SpecificTypes from "./components/views/SpecificTypes";
import banner from "./assets/banner/banner.jpg";
import styled, { keyframes } from "styled-components";
import summer from "./assets/banner/summer.jpg";
import winter from "./assets/banner/winter.jpg";

export const H1 = styled.h1`
  font-size: 2.2em;
  text-align: center;
  font-weight: 500;
  color: ${color.gray};
  @media (max-width: 600px) {
    font-size: 1.7em;
  }
  @media (max-width: 420px) {
    font-size: 1.4em;
  }
`;
export const H2 = styled.h2`
  text-align: center;
  font-weight: 400;
  color: ${color.gray};
  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;
export const DivKontakt = styled.div`
  text-align: center;
  font-size: 1.2em;
  @media (max-width: 420px) {
    font-size: 1em;
  }
`;
export const DivAbout = styled.div`
  font-size: 1.3em;
  text-align: center;

  @media (max-width: 420px) {
    font-size: 1em;
  }
`;
export const DivHeader = styled.div`
  position: relative;
  max-width: ${breakpoint.xl};
  margin: 0 auto;
`;
export const DivSocialMedia = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 1em;
  & > .toRight {
    margin-right: 1em;
  }
`;
export const Input = styled.input`
  outline: none;
  border: none;
  width: 70%;
  height: 115%;
  font-size: 1.2em;
  background: linear-gradient(currentColor, currentColor) bottom / 0 0.1em
    no-repeat;
  transition: 1s background-size;
  -webkit-transition: 1s background-size;
  background-position: right bottom;
  text-align: right;

  &:hover {
    background-size: 100% 0.1em;
    line-height: 0;
  }

  @media (max-width: 1200px) {
    background-size: 100% 0.1em;
    line-height: 0;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Ul = styled.ul<{ nav: boolean }>`
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  position: relative;
  transition: right 0.3s;
  -webkit-transition: right 0.3s;
  top: 0;
  right: 0;
  font-size: 1.1em;
  font-weight: 600;
  @media (max-width: 900px) {
    margin: 0px;
    padding-top: 4em;
    flex-direction: column;
    position: fixed;
    height: 100vh;
    width: 30%;
    top: 0;
    z-index: 999;
    right: ${(props: any) => (props.nav === false ? "-100%" : "0")};
    justify-content: flex-start;
    align-items: center;
    background-color: ${color.lightBlack};
    width: 50%;

    & > Li > A {
      color: ${color.white};
    }

    & > Li > img {
      left: 16px;
      filter: invert(100%) sepia(13%) saturate(7447%) hue-rotate(200deg)
        brightness(114%) contrast(114%);
    }
  }

  @media (max-width: 600px) {
    width: 50%;
    font-size: 0.9em;
    overflow-y: scroll;
  }

  & > Li > A {
    transition: 0.3s background-size;
    -webkit-transition: 0.3s background-size;
    background: linear-gradient(currentColor, currentColor) bottom / 0 0.1em
      no-repeat;
    background-position: left bottom;

    &:hover {
      background-size: 100% 0.1em;
    }
  }
`;

const rotateY = keyframes`
     0% {
      transform: rotateY(90deg)
    }
    80% {
        transform: rotateY(-10deg)
    }
    100% {
        transform: rotateY(0)
    }
`;

export const UlDrop = styled.ul`
  position: absolute;
  display: none;
  flex-direction: column;
  background-color: ${color.gray};
  z-index: 99;
  padding: 10px 5px;
  width: 9em;
  top: 100%;
  animation: ${rotateY} 300ms ease-in-out forwards;
  transform-origin: top center;
  -webkit-transform-origin: top center;

  & > Li {
    display: flex;
    list-style: none;
    padding: 0px 4px;
    font-size: 0.8em;
    text-align: left;
    &:not(:last-child) {
      border-bottom: 1px solid ${color.lightGray};
    }
  }

  @media (max-width: 900px) {
    position: relative;
    top: 9px;
    & > Li {
      font-size: 0.9em;
    }
  }

  & > Li > A {
    color: ${color.white};
    font-weight: 300;
    width: 100%;
    display: flex;
  }
  & > Li > A:hover {
    background-size: 100% 0.1em;
  }
`;
export const Li = styled.li`
  padding: 10px 0;

  @media (max-width: 900px) {
    text-align: center;
  }
`;
export const LiDropWrapper = styled(Li)`
  position: relative;

  & > A {
    background: linear-gradient(white, white) bottom / 0 0.1em no-repeat !important;
    background-position: bottom;
  }

  &:hover > ul {
    display: flex;
  }

  & > ul > li:hover {
    background-color: ${color.lightBlack};
  }

  & > ul > Li > A {
    padding: 5px;
  }
`;
export const ImgSearch = styled.img`
  margin: 0 0.6em;
  @media (max-width: 600px) {
    margin: 0 0 0 0.6em;
  }
`;
export const ImgHamburger = styled.img<{ matches: boolean }>`
  display: ${(props: any) =>
    props.matches === true ? "inline-block" : "none"};

  @media (max-width: 900px) {
    position: absolute;
    cursor: pointer;
    top: 19%;
    right: 9%;
    width: 6%;
  }
`;

export const ContentDiv = styled.div`
  max-width: ${breakpoint.md};
  margin: 2em auto;
  padding: 0 2em;

  & > :not(:last-child) {
    margin-bottom: 2em;
  }
`;
export const Img = styled.img`
  width: 100%;
`;
export const ImgLogo = styled.img`
  width: 70%;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const ImgClose = styled.img`
  display: none;

  @media (max-width: 900px) {
    display: block;
    position: absolute;
    top: 2%;
    left: 5%;
    width: 30px;
    cursor: pointer;
  }
`;
export const ImgNav = styled.img`
  position: relative;
  top: -1px;
  right: -8px;
  filter: invert(0%) sepia(6%) saturate(7437%) hue-rotate(107deg)
    brightness(105%) contrast(99%);
  width: 15px;

  @media (max-width: 900px) {
    left: 72px;
  }
`;
export const SpanSpecification = styled.span`
  display: flex;
  align-items: baseline;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
export const P = styled.p`
  margin: 0;
`;
export const PPopis = styled(P)`
  margin-bottom: 1.5em;
  text-align: left;
`;
export const PDetail = styled(P)`
  font-size: 0.9em;
`;
export const PLike = styled.p`
  border-bottom: 1px solid ${color.gray};
  font-style: italic;
  font-size: 2em;
  color: ${color.gray};
  font-weight: 300;
  margin-bottom: 0;

  @media (max-width: 500px) {
    font-size: 1.4em;
  }
`;
export const PSpecification = styled.p`
  font-weight: 500;
  margin: 0 0.3em 1em 0;
  font-size: 1.1em;
`;
export const PSpecificTypes = styled.p`
  font-size: 1.3em;
  margin-bottom: 0.5em;
  margin-top: 0;
`;
export const PInfo = styled(P)`
  font-size: 2.5em;
  font-weight: 400;
  margin-bottom: 1em;

  @media (max-width: 900px) {
    font-size: 2em;
  }

  @media (max-width: 428px) {
    font-size: 1.7em;
  }
`;
export const PInfoBanner = styled(P)`
  margin: 0 auto;
  font-size: 2.5em;
  font-weight: 400;
  width: 35%;

  @media (max-width: 1100px) {
    width: 45%;
  }
  @media (max-width: 850px) {
    width: 60%;
  }

  @media (max-width: 680px) {
    width: 60%;
  }
  @media (max-width: 680px) {
    width: 70%;
  }
  @media (max-width: 550px) {
    width: 75%;
  }
`;
export const GridInfo = styled(Grid)`
  padding: 10px;
  text-align: center;
`;
export const PInfoPayment = styled(P)`
  margin-top: 0.1em;
  font-size: 1.6em;
  font-weight: 200;
`;
export const PKontakt = styled(P)`
  font-size: 1.1em;
  margin-bottom: 1em;
`;
export const PPrice = styled(P)`
  font-size: 2em;
  font-weight: 500;
  margin-bottom: 0.5em;
  margin-top: 0.5em;

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;
export const PInfoMobile = styled(P)`
  font-weight: 700;
  font-size: 5em;
  margin-bottom: 0.2em;
`;
export const PInfoNonStop = styled(P)`
  font-weight: 600;
  font-size: 3.5em;
`;

export const DivBanner = styled.div`
  background-color: ${color.black};
  width: 100%;
  height: 50vh;

  @media (max-width: 500px) {
    height: 40vh;
  }
`;
export const DivInnerBanner = styled.div<{ banner: string }>`
  width: 100%;
  height: 100%;
  padding: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props: any) =>
    props.banner === "čo-sa-pije-v-zime"
      ? `url(${winter})`
      : props.banner === "čo-sa-pije-v-lete"
      ? `url(${summer})`
      : `url(${banner})`};
  /* opacity: ${(props: any) =>
    props.banner === "čo-sa-pije-v-zime"
      ? "25%"
      : props.banner === "čo-sa-pije-v-lete"
      ? "75%"
      : "25%"};
  -webkit-opacity: ${(props: any) =>
    props.banner === "čo-sa-pije-v-zime"
      ? "25%"
      : props.banner === "čo-sa-pije-v-lete"
      ? "75%"
      : "25%"}; */
`;
export const Atelephone = styled.a`
  text-decoration: none;
  color: ${color.white};
  border: 3px solid ${color.white};
  padding: 0 20px;
`;
export const DivFooter = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 4em;
  text-align: center;
  color: ${color.white};
  font-weight: 200;
  font-size: 15px;
`;
export const A = styled(Link)`
  padding: 10px 0;

  text-decoration: none;
  list-style: none;
  color: ${color.black};
`;
export const Button = styled.button`
  color: ${color.white};
  border: none;
  outline: none;
  background: ${color.black};
  padding: 13px 40px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 900px) {
    font-size: 0.7em;
  }
  @media (max-width: 420px) {
    font-size: 0.6em;
  }
  @media (max-width: 320px) {
    padding: 6px 30px;
  }
`;
export const GridContact = styled(Grid)`
  position: relative;
  & > div > div {
    background: ${color.red};
    padding: 1.5em;
    color: ${color.white};
  }
  & > div:not(:last-child):after {
    content: "";
    position: absolute;
    width: 10%;
    top: 110px;
    border-bottom: 1px solid ${color.white};
  }
`;
export const PImage = styled(P)`
  position: absolute;
  top: 42%;
  width: 100%;
  text-align: center;
  color: ${color.white};
  font-size: 1.5rem;

  @media (max-width: 1000px) {
    width: 95%;
  }
  @media (max-width: 600px) {
    width: 92%;
    font-size: 1rem;
  }
  @media (max-width: 420px) {
    width: 90%;
    font-size: 0.7rem;
  } ;
`;

export const Nav = styled.nav`
  position: relative;
  font-size: 0.9em;
`;
export const DivDropDown = styled.div`
  position: relative;

  &:hover .dropdown-content {
    display: block;
  }
`;
export const DivDropDownItem = styled.div`
  display: none;
  position: absolute;
  top: 25px;
  left: -20px;
  background-color: ${color.lightRed};
  text-align: center;
  padding: 10px;
  z-index: 99;

  & Li {
    margin-bottom: 0.6em;
    padding: 5px;
  }

  & Li > A {
    color: ${color.white};
    font-size: 0.9em;
    display: block;
  }
`;
export const MainDiv = styled.div`
  background-color: ${color.white};
`;
export const DivHeaderWrapper = styled.div`
  background-color: ${color.white};
  position: sticky;
  top: 0;
  z-index: 1000;
`;
export const DivFooterWrapper = styled.div`
  background: ${color.lightBlack};
`;
export const DivWrapperInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row-reverse;
  width: 100%;

  @media (max-width: 1200px) {
    width: 85%;
    margin: 0 auto;
    margin-bottom: 1em;
  }
  @media (max-width: 500px) {
    font-size: 0.9em;
  }
  @media (max-width: 420px) {
    font-size: 0.8em;
  }
  @media (max-width: 380px) {
    font-size: 0.7em;
  }
  @media (max-width: 320px) {
    font-size: 0.5em;
  }
`;
export const DivInfoWrapper = styled.div`
  max-width: ${breakpoint.xl};
  margin: 0 auto;
`;
export const DivTextInfo = styled.div`
  position: absolute;
  width: 100%;
  top: 15%;

  @media (max-width: 1555px) {
    font-size: 0.8em;
  }

  @media (max-width: 550px) {
    font-size: 0.6em;
  }
  @media (max-width: 400px) {
    font-size: 0.5em;
  }
`;
export const DivTextInfoTyps = styled.div`
  position: absolute;
  width: 100%;
  top: 36%;

  @media (max-width: 1555px) {
    font-size: 0.8em;
  }
  @media (max-width: 800px) {
    font-size: 0.7em;
  }

  @media (max-width: 700px) {
    font-size: 0.6em;
  }
  @media (max-width: 500px) {
    font-size: 0.5em;
  }
  @media (max-width: 420px) {
    font-size: 0.4em;
  }
  @media (max-width: 320px) {
    font-size: 0.3em;
  }
`;
export const DivBothInfo = styled.div`
  position: relative;
  text-align: center;
  color: ${color.white};
`;
export const PName = styled.p`
  width: 80%;
  margin: 0 auto 0.4em auto;
  font-size: 1.4em;
`;
export const DivPaddingWrapper = styled.div`
  padding: 0 2em;
`;
export const CustomCarousel = styled(Carousel)`
  .rec.rec-arrow:hover {
    background-color: ${color.black};
  }
  .rec.rec-arrow:focus {
    background-color: ${color.black};
  }
  .rec.rec-dot_active {
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.5);
  }
  .rec.rec-pagination {
    justify-content: center;
  }
`;

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const location = useLocation();

  // const types = ["čo-sa-pije-v-zime", "čo-sa-pije-v-lete"];

  // const someType = types.some((element: string) => {
  //   return element === getSlugName(location, 1);
  // });

  const handleSearch = (e: string) => {
    setSearchValue(e);
  };

  return (
    <MainDiv>
      {/* verify age */}
      <CustomAlert />

      <Header handleSearch={handleSearch} />

      {/* display banner */}
      <Route path="/">
        <Banner />
      </Route>

      {/* <Route path="/:id">
        {someType === true ? <BannerTyps /> : <Banner />}
      </Route> */}

      {/* main content */}

      <Element name="myScrollToElement">
        <ContentDiv>
          <Route path="/" exact>
            <Offer />
          </Route>

          <Route exact path="/:id">
            {getSlugName(location, 1) === "kontakt" ? (
              <Kontakt />
            ) : getSlugName(location, 1) === "naše-služby" ? (
              <About />
            ) : getSlugName(location, 1) === "hľadaný-produkt" ? (
              <SearchResults searchValue={searchValue} />
            ) : getSlugName(location, 1) === "cennik-dopravy" ? (
              <PriceList />
            ) : (
              <SpecificTypes />
            )}
          </Route>

          <Route path="/:id/:id">
            <SpecificAlcohol />
          </Route>
        </ContentDiv>
      </Element>

      <DivFooterWrapper>
        <Footer />
      </DivFooterWrapper>
    </MainDiv>
  );
}
export default App;
