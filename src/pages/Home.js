"use client";
import Error from "@/app/error";
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Card from "@/components/Card";
import React, { useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import tw from "tailwind-styled-components";

const Home = () => {
  const [selectedButton, setSelectedButton] = useState("Pizza");
  const getResponse = async ({ keyword }) => {
    console.log(keyword);
    const response = await fetch({
      url: `https://www.themealdb.com/api/json/v1/1/searchxzczx.php?s=${keyword}`,
      method: "get",
    });
    if (!response.ok) {
      throw new Error("something went wrong");
    }
    return response.json();
  };

  async function getData() {
    const response = await getResponse("pizza");
    console.log(response);
  }

  getData();
  return (
    <ParallaxProvider>
      <HomeContainer>
        <Banner />
        <BodyContainer>
          <Title>Welcome to Simple House</Title>
          <Details>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            repellendus consequatur ut veniam voluptatum culpa totam eveniet
            consequuntur iusto numquam recusandae necessitatibus laboriosam
            illum est non perferendis rerum, aut impedit.
          </Details>
          <ButtonContainer>
            <Button
              title={"Pizza"}
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
            />
            <Button
              title={"Salad"}
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
            />
            <Button
              title={"Noodle"}
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
            />
          </ButtonContainer>
        </BodyContainer>
        <Wrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Wrapper>
      </HomeContainer>
    </ParallaxProvider>
  );
};

export default Home;

const HomeContainer = tw.div`
w-full
bg-white
`;

const BodyContainer = tw.div``;
const Title = tw.h1`
text-center
sm:text-4xl
mt-10

`;

const Details = tw.p`
text-center
justify-self-center
sm:w-3/5
mx-auto
my-5

`;

const ButtonContainer = tw.div`
flex
items-center
justify-center

`;

const Wrapper = tw.div`
grid
grid-cols-4
gap-8
justify-self-center
align-middle
sm:w-4/5
place-self-center
mx-auto
mt-9

`;
