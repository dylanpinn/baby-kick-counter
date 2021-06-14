import React from "react";

export default function KickCounterForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const dateTimeNow = new Date();
    console.log("kick recorded at", dateTimeNow.toLocaleString());
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Kick</button>
    </form>
  );
}
