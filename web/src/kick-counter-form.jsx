import React from "react";

export default function KickCounterForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const dateTimeNow = new Date();
    console.log("kick recorded at", dateTimeNow.toLocaleString());

    sendData(dateTimeNow).then((data) => {
      console.log(data);
    });
  }

  async function sendData(kickAt) {
    try {
      const data = { kickAt };
      const response = await fetch(
        `https://4zntadnggi.execute-api.ap-southeast-2.amazonaws.com/Prod/kick/`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
