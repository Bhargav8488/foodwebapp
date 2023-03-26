"use client";

import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components";

const MenuItem = ({ address, title, selectedText, setSelectedText }) => {
  return (
    <MenuTitle
      href={address}
      className={title === selectedText && "border-b-2"}
      onClick={() => setSelectedText(title)}
    >
      {title}
    </MenuTitle>
  );
};

export default MenuItem;

const MenuTitle = tw(Link)`
text-white
font-medium
hover:border-b-[2px]
border-spacing-y-2
py-2
transition-shadow
duration-500
mr-6
text-sm
sm:text-sm
`;
