/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import FAQItem from "./FAQItem";
import { View } from "@aws-amplify/ui-react";
export default function MyQuiz(props) {
  const { quiz, overrides, ...rest } = props;
  return (
    <View
      width="595px"
      height="842px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MyQuiz")}
    >
      <FAQItem
        display="flex"
        gap="0"
        position="absolute"
        top="57px"
        left="15px"
        direction="column"
        width="564px"
        height="180px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FAQItem31542695")}
      ></FAQItem>
      <FAQItem
        display="flex"
        gap="0"
        position="absolute"
        top="298px"
        left="6px"
        direction="column"
        width="564px"
        height="180px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FAQItem31542720")}
      ></FAQItem>
      <FAQItem
        display="flex"
        gap="0"
        position="absolute"
        top="538px"
        left="6px"
        direction="column"
        width="564px"
        height="180px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FAQItem31542744")}
      ></FAQItem>
    </View>
  );
}
