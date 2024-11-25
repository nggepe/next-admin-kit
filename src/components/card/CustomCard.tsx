import { Card, CardProps } from "@radix-ui/themes";
import { forwardRef } from "react";
import classes from "./CustomCard.module.css";

const CustomCard = forwardRef<HTMLDivElement, CardProps>((props: CardProps, ref) => {
  return (
    <Card ref={ref} {...props} className={`${classes.borderCard} ${props.className?.trim() ?? ""}`}>
      {props.children}
    </Card>
  );
});

CustomCard.displayName = "CustomCard";

export default CustomCard;
