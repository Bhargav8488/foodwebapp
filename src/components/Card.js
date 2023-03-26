import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

const Card = () => {
  return (
    <Container>
      <CardImage src={"/images/01.jpg"} width={300} height={300} />
      <CardDetails></CardDetails>
    </Container>
  );
};

export default Card;

const Container = tw.div``;
const CardImage = tw(Image)``;
const CardDetails = tw.div``;
const Title = tw.h1``;
const Details = tw.p``;
