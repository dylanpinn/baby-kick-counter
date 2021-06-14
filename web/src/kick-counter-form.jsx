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
      console.log(__SNOWPACK_ENV__);
      const url = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL;
      const data = { kickAt };
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
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
