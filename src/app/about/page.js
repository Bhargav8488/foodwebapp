"use client";
import Banner from "@/components/Banner";
import StaffCard from "@/components/StaffCard";
import React, { useState } from "react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import tw from "tailwind-styled-components";

const AboutPage = () => {
  const [selectedText, setSelectedText] = useState("About");

  return (
    <Container>
      <ParallaxProvider>
        <Banner selectedText={selectedText} setSelectedText={setSelectedText} />
      </ParallaxProvider>
      <Wrapper>
        <AboutTitle>About Simple House</AboutTitle>
        <DetailsText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          voluptas sit recusandae, debitis magnam velit molestiae sunt, qui quam
          quaerat nulla. Autem ratione neque facilis aspernatur perferendis
          optio minus, sed in obcaecati amet. Natus, quos? Tempore eaque
          adipisci deleniti, ad inventore praesentium fugit rerum atque iusto,
          provident explicabo optio et.
        </DetailsText>
        <CardsContainer>
          <StaffCard
            image={"about-01.jpg"}
            name={"Jennifer Soft"}
            role={"Founder and CEO"}
            about={
              "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio."
            }
          />
          <StaffCard
            image={"about-02.jpg"}
            name={"Daisy Walker"}
            role={"Executive Chef"}
            about={`Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.`}
          />
        </CardsContainer>
        <CardsContainer>
          <StaffCard
            image={"about-03.jpg"}
            name={"Florence Nelson"}
            role={"Kitchen Manager"}
            about={`Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.`}
          />
          <StaffCard
            image={"about-04.jpg"}
            name={"Valentina Martin"}
            role={"Culinary Director"}
            about={`Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.`}
          />
        </CardsContainer>
      </Wrapper>
      <ParallaxProvider>
        <ParallaxBanner
          style={{ aspectRatio: "4 / 1", width: "90%", margin: "auto" }}
        >
          <ParallaxBannerLayer image="./images/about-05.jpg" speed={30} />
        </ParallaxBanner>
      </ParallaxProvider>
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
        </HistoryDetails>
      </HistoryContainer>
    </Container>
  );
};

export default AboutPage;

const Container = tw.div`
bg-white
pb-20

`;
const Wrapper = tw.div`
flex
flex-col
items-center
`;
const AboutTitle = tw.h1`
text-center
sm:text-4xl
mt-10
`;
const DetailsText = tw.p`
text-center
justify-self-center
sm:w-3/5
mx-auto
my-5
text-gray-500
`;

const CardsContainer = tw.div`
flex
flex-col
xl:flex-row
items-center
justify-center
sm:justify-around
mb-6
mx-4
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
