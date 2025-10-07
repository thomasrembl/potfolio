import Link from "next/link";
import React from "react";

const Showreel = () => {
  return (
    <Link href={"https://www.youtube.com/watch?v=xAn646hZP3s"} target="_blank">
      <p className="showreelBtn">Showreel</p>
    </Link>
  );
};

export default Showreel;
