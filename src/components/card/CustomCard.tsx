import { Card, CardProps } from "@radix-ui/themes";
import { forwardRef } from "react";
import classes from "./CustomCard.module.css";

/**this card is only for refactoring @radix-ui contain: paint style and overflow to be visible */
const CustomCard = forwardRef<HTMLDivElement, CardProps>((props: CardProps, ref) => {
  return (
    <Card
      ref={ref}
      {...props}
      className={`${classes.containLayout} ${classes.overflowVisible} ${props.className?.trim() ?? ""}`}
    >
      {props.children}
    </Card>
  );
});

CustomCard.displayName = "CustomCard";

export default CustomCard;
