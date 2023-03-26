import React from "react";
import tw from "tailwind-styled-components";

const Button = ({ title, selectedButton, setSelectedButton }) => {
  return (
    <Container
      onClick={() => setSelectedButton(title)}
      className={selectedButton === title && "bg-[#2f956d] text-white "}
    >
      {title}
    </Container>
  );
};

export default Button;

const Container = tw.button`
mr-4
py-2
px-8
text-[#2f956d]
border-[1px]
border-[#2f956d]
rounded-sm
shadow-lg
transition-colors
duration-500
hover:bg-[#2f956d]
hover:text-white
`;
