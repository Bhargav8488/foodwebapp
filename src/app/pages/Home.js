"use client";
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import tw from "tailwind-styled-components";
import useSWR from "swr";
import { fetcher } from "@/data/fatcher";
import { useRouter } from "next/navigation";

const Home = () => {
  const [selectedButton, setSelectedButton] = useState("Pizza");
  const [mealData, setMealData] = useState([]);
  const [selectedText, setSelectedText] = useState("Home");
  const route = useRouter();

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
        <Banner selectedText={selectedText} setSelectedText={setSelectedText} />
      </ParallaxProvider>

      <BodyContainer>
        <Title>Welcome to Simple House</Title>
        <Details>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
          repellendus consequatur ut veniam voluptatum culpa totam eveniet
          consequuntur iusto numquam recusandae necessitatibus laboriosam illum
          est non perferendis rerum, aut impedit.
        </Details>
        <ButtonContainer className="buttonContainer">
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
      <Details>Note: All data is fetched dynamically by themealdb api</Details>
      <Wrapper>
        {mealData.length > 0 ? (
          mealData.map((meal) => {
            return (
              <Card
                title={meal.strMeal}
                key={meal.idMeal}
                imageUrl={meal.strMealThumb}
              />
            );
          })
        ) : (
          <Details>No Data Found</Details>
        )}
      </Wrapper>
      <HistoryContainer>
        <HistoryImage
          src={"./images/about-06.jpg"}
          alt="image"
          loading="lazy"
        />
        <HistoryDetails>
          <HistoryTitle>History of our restaurant</HistoryTitle>
          <HistoryDetailsText>
            Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit
            amet justo. Maecenas posuere lorem id augue interdum vehicula.
            Praesent sed leo eget libero ultricies congue. Redistributing this
            template as a downloadable ZIP file on any template collection site
            is strictly prohibited. You will need to contact TemplateMo for
            additional permissions about our templates. Thank you.
          </HistoryDetailsText>
          <ViewMore onClick={() => route.push("/about")}>View More</ViewMore>
        </HistoryDetails>
      </HistoryContainer>
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
text-gray-500
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

const HistoryContainer = tw.div`
mt-10
sm:w-4/5
mx-auto
flex
items-center
flex-col
md:flex-row
justify-center
text-center
`;

const HistoryImage = tw.img`
w-[80%]
md:w-2/4
h-80
rounded-md
object-contain

`;

const HistoryDetails = tw.div`
md:ml-8
`;

const HistoryTitle = tw.h1`
text-3xl
mb-4

`;

const HistoryDetailsText = tw.p`
text-gray-500

`;

const ViewMore = tw.button`
px-5
py-2
hover:bg-gray-700
hover:text-white
duration-300
border-[1px]
border-gray-500
mt-4
rounded-md
`;
