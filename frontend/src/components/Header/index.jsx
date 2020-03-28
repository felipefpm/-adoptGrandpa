import React from "react";

import "./style.css";

export default function Header({ children }) {
  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
}
