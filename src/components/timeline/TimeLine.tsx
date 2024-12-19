import { Box, BoxProps, Flex, FlexProps } from "@radix-ui/themes";
import { forwardRef, RefAttributes } from "react";

type color = {
  color?:
    | "gray"
    | "gold"
    | "bronze"
    | "brown"
    | "yellow"
    | "amber"
    | "orange"
    | "tomato"
    | "red"
    | "ruby"
    | "crimson"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass"
    | "lime"
    | "mint"
    | "sky";
};

type alphaColor = {
  "alpha-color"?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
};

export const TimeLine = forwardRef<HTMLDivElement, BoxProps & RefAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <Box {...props} ref={ref}>
      {props.children}
    </Box>
  );
});

TimeLine.displayName = "TimeLine";

export const TimeLineItem = forwardRef<HTMLDivElement, FlexProps & RefAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <Flex justify={"center"} {...props} ref={ref}>
      {props.children}
    </Flex>
  );
});

TimeLineItem.displayName = "TimeLineItem";

export const TimeLineSeparator = forwardRef<HTMLDivElement, FlexProps & RefAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <Flex direction={"column"} justify={"center"} align={"center"} {...props} ref={ref}>
      {props.children}
    </Flex>
  );
});

TimeLineSeparator.displayName = "TimeLineSeparator";

export const TimeLineContent = forwardRef<HTMLDivElement, BoxProps & RefAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <Box {...props} ref={ref} pb={"4"}>
      {props.children}
    </Box>
  );
});

TimeLineContent.displayName = "TimeLineContent";

export const TimeLineConnector = forwardRef<
  HTMLDivElement,
  FlexProps & RefAttributes<HTMLDivElement> & color & alphaColor
>((props, ref) => {
  return (
    <Flex
      {...props}
      ref={ref}
      flexGrow={"1"}
      style={{
        width: "0.125rem",
        backgroundColor: `var(--${props.color ?? "orange"}-a${props["alpha-color"] ?? "10"})`
      }}
    >
      {props.children}
    </Flex>
  );
});

TimeLineConnector.displayName = "TimeLineConnector";

export const TimeLineDot = forwardRef<HTMLDivElement, BoxProps & color & RefAttributes<HTMLDivElement> & alphaColor>(
  (props, ref) => {
    return (
      <Box
        {...props}
        style={{
          width: "0.75rem",
          height: "0.75rem",
          borderRadius: "0.5rem",
          marginTop: "0.3rem",
          backgroundColor: `var(--${props.color ?? "orange"}-a${props["alpha-color"] ?? "10"})`,
          ...props.style
        }}
        ref={ref}
      >
        {props.children}
      </Box>
    );
  }
);

TimeLineDot.displayName = "TimeLineDot";
