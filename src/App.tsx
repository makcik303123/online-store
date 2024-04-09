import { useState } from "react";
import "./App.scss";
import { Button } from "./ui/button";

function App() {
  return (
    <>
      <Button type={"multi"}>
        <span>Сommunity</span>
        <span> +</span>
      </Button>

      <Button type={"single"}>
        <span>Сommunity</span>
      </Button>
    </>
  );
}

export default App;
