import React from "react";

const Title = ({
  title,
  position,
}: {
  title: string;
  position: string | "";
}) => (
  <div
    className={`flex ${
      position ? "justify-center" : "justify-start"
    } mt-12 mb-2 mx-5 text-golden font-semibold text-2xl uppercase`}
  >
    {title}
  </div>
);

export default Title;
