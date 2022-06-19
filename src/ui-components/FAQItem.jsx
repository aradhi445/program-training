/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Radio, Text } from "@aws-amplify/ui-react";
export default function FAQItem(props) {
  const { quiz, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1280px"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "FAQItem")}
    >
      <Flex
        gap="0"
        direction="row"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Container")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="1232px"
          grow="1"
          basis="1232px"
          height="178px"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={quiz?.question}
            {...getOverrideProps(overrides, "Title")}
          ></Text>
          <Radio
            display="flex"
            gap="16px"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            children={quiz?.option1}
            {...getOverrideProps(overrides, "Radio31463063")}
          ></Radio>
          <Radio
            display="flex"
            gap="16px"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            children={quiz?.option2}
            {...getOverrideProps(overrides, "Radio31463057")}
          ></Radio>
          <Radio
            display="flex"
            gap="16px"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            children={quiz?.option3}
            {...getOverrideProps(overrides, "Radio31463069")}
          ></Radio>
        </Flex>
      </Flex>
      <Divider
        height="1px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </Flex>
  );
}
