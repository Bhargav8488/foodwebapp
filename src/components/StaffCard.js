import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const StaffCard = ({ name, role, about, image }) => {
  return (
    <CardContainer className="staffCardContainer">
      <StaffImages
        src={`/images/${image}`}
        width={200}
        height={400}
        alt="staff images"
      />
      <Details>
        <Title>{name}</Title>
        <Role>{role}</Role>
        <About>{about}</About>
        <IconGroup className="iconGroup">
          <IconImage>
            <FaFacebook size={26} />
          </IconImage>
          <IconImage>
            <AiOutlineInstagram size={28} />
          </IconImage>
          <IconImage>
            <AiOutlineTwitter size={28} />
          </IconImage>
        </IconGroup>
      </Details>
    </CardContainer>
  );
};

export default StaffCard;

const CardContainer = tw.div`
flex
items-start
w-full
xl:w-[40%]
my-3
`;

const Details = tw.div`
ml-2
`;

const StaffImages = tw(Image)`
object-cover

`;
const Title = tw.h1`
text-3xl
text-blue-500
font-normal
mb-3
`;

const Role = tw.h3`
text-red-800
text-xl
mb-6
`;

const About = tw.p``;

const IconGroup = tw.div`
flex
items-center
`;
const IconImage = tw.div`
hover:bg-gray-500
hover:text-white
mx-1
my-8
px-1
py-1
cursor-pointer
rounded-sm
duration-200
`;
