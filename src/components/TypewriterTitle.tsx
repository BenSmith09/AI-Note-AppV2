"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Amplify efficiency")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Turbocharged AI assistance")
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
