import React from "react";
import { Link } from "../../../navigation";

const Showreel = () => {
  return (
    <Link href={{ pathname: "/bande-demo" }}>
      <p className="showreelBtn">Showreel</p>
    </Link>
  );
};

export default Showreel;
