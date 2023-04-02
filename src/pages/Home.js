"use client";
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import tw from "tailwind-styled-components";
import useSWR from "swr";
import { fetcher } from "@/data/fatcher";

const Home = () => {
  const [selectedButton, setSelectedButton] = useState("Pizza");
  const [mealData, setMealData] = useState([]);
  const { data, isLoading, error } = useSWR(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedButton}`,
    fetcher
  );
  useEffect(() => {
    if (!isLoading && !error && data) {
      setMealData(data.meals);
    }
  }, [isLoading, data, error, selectedButton]);

  return (
    <HomeContainer>
      <ParallaxProvider>
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
          {mealData.map((meal) => {
            return (
              <Card
                title={meal.strMeal}
                key={meal.idMeal}
                imageUrl={meal.strMealThumb}
              />
            );
          })}
        </Wrapper>
      </ParallaxProvider>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = tw.div`
w-full
bg-white
`;

const BodyContainer = tw.div`
flex
flex-col
items-center

`;
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
self-center
`;

const Wrapper = tw.div`
flex
sm:w-4/5
w-full
mt-9
mx-auto
flex-wrap
items-center
justify-center

`;
