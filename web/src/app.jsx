import React from "react";
import KickCounterForm from "./kick-counter-form";

export default function App() {
  return (
    <React.Fragment>
      <h1 className="font-sans text-4xl text-center mt-4">
        Let's Count Baby Kicks...
      </h1>
      <KickCounterForm />
    </React.Fragment>
  );
}
