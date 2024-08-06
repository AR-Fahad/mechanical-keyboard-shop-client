declare module "react-rating" {
  import * as React from "react";

  interface ReactStarsRatingProps {
    className?: string;
    emptySymbol?: React.ReactElement;
    fullSymbol?: React.ReactElement;
    initialRating?: number;
    readonly?;
  }

  const ReactStarsRating: React.FC<ReactStarsRatingProps>;
  export default ReactStarsRating;
}
