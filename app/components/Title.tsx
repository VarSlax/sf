import React from "react";

const Title = ({
  title,
  position,
}: {
  title: string;
  position: string | "";
}) => (
  <div
    style={{ display: "flex", justifyContent: position ? "center" : "start" }}
    className="my-2.5 mx-5 text-yellow-500 font-semibold text-2xl uppercase"
  >
    {title}
  </div>
);

export default Title;
