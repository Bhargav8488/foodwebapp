"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import tw from "tailwind-styled-components";
import MenuItem from "./MenuItem";

const Banner = ({ selectedText, setSelectedText }) => {
  return (
    <BannerContainer>
      <ParallaxBanner
        layers={[{ image: "/images/banner.jpg", speed: -15 }]}
        className="h-[100%]"
      />
      <Menu className="headerContainer">
        <Logo className="logoContainer">
          <Image src={"/images/logo.png"} width={60} height={60} alt="logo" />
          <div className="ml-2">
            <AppTitle>Simple House</AppTitle>
            <SmallTitle>new restaurant template</SmallTitle>
          </div>
        </Logo>
        <MenuList className="menuListContainer">
          <MenuItem
            title={"Home"}
            address="/"
            selectedText={selectedText}
            setSelectedText={setSelectedText}
          />
          <MenuItem
            title={"About"}
            address="/about"
            selectedText={selectedText}
            setSelectedText={setSelectedText}
          />
        </MenuList>
      </Menu>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = tw.div`
w-full
h-[460px]
relative
overflow-hidden
`;

const Menu = tw.div`
absolute
bottom-8
items-center
justify-between
w-full
flex
sm:px-10
`;
const Logo = tw.div`
flex
items-center
`;
const MenuList = tw.div``;

const AppTitle = tw.h1`
text-white
sm:text-3xl
my-2
`;
const SmallTitle = tw.h2`
text-white
sm:text-lg
`;
