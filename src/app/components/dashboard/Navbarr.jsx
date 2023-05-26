import Link from "next/link";
import React from "react";

function Navbarr() {
  return (
    <div>
      <Link href="/home">home</Link>
      <Link href="/about">about</Link>
    </div>
  );
}

export default Navbarr;
