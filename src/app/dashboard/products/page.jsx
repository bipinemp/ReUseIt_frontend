"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function page() {
  const pathname = usePathname();
  const modifiedPathname = pathname.split("/");
  const [path, _] = useState(modifiedPathname);

  return (
    <div>
      <h1>
        {path[1]} / {path[2]}
      </h1>
    </div>
  );
}

export default page;
