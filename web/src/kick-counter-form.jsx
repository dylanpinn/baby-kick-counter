import React from "react";

export default function KickCounterForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const dateTimeNow = new Date();
    console.log("kick recorded at", dateTimeNow.toLocaleString());

    sendData(Number(dateTimeNow)).then((data) => {
      console.log(data);
    });
  }

  async function sendData(kickAt) {
    try {
      const url =
        "https://pg6zk1qbhl.execute-api.ap-southeast-2.amazonaws.com/Prod/kick";
      const data = { kickAt };
      const response = await fetch(url, {
        method: "POST",
        body: JOSN.stringify(data),
      });
      return response.json();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Kick</button>
    </form>
  );
}