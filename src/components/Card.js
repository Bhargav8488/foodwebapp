import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

const Card = ({ title, imageUrl }) => {
  return (
    <Container>
      <CardImage src={imageUrl} width={300} height={300} />
      <CardDetails>
        <Title>{title}</Title>
      </CardDetails>
    </Container>
  );
};

export default Card;

const Container = tw.div`
flex
flex-col
items-center
border-gray-300
border-[1px]
mx-2
sm:w-80
h-72
rounded-lg
hover:shadow-xl
hover:shadow-slate-500
cursor-pointer
duration-300
ease-in-out
my-3
`;
const CardImage = tw(Image)`
w-96
h-48
object-cover
`;
const CardDetails = tw.div`
px-3
py-4
`;
const Title = tw.h1`
text-center
text-sm
sm:text-2xl
`;
const Details = tw.p``;
