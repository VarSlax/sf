"use client";

import { useEffect, useState } from "react";

export default function Video() {
  const [visible, setVisible] = useState(true);
  const [touched, setTouched] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTimeout(() => setTouched(true), 3000);
  }, []);

  const removeVideo = () => {
    setTouched(true);
    setScrolled(true);
    setTimeout(() => setVisible(false), 1000);
  };

  return visible ? (
    <div
      onTouchStart={removeVideo}
      onScroll={removeVideo}
      onClick={removeVideo}
      className={`${scrolled ? "-translate-y-64 scale-50 opacity-0" : ""} ${
        touched ? "bg-transparent" : "bg-black"
      } absolute top-0 z-20 h-screen overflow-hidden transition-all duration-700 ease-out lg:overflow-scroll`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`${
          touched ? "translate-y-24" : ""
        } -mt-1 h-[calc(100%+4px)] w-screen object-cover transition-all duration-1000 ease-in-out`}
      >
        <source src="/video.mp4" />
      </video>
    </div>
  ) : null;
}
