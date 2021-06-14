import React from "react";

export default function KickCounterForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const dateTimeNow = new Date();
    const kickDate = dateTimeNow.toISOString().split("T")[0];
    const kickTime = dateTimeNow.toTimeString().split(" ")[0];
    console.log("kick recorded at", dateTimeNow);

    sendData({ kickDate, kickTime }).then((data) => {
      console.log(data);
    });
  }

  async function sendData({ kickDate, kickTime }) {
    try {
      const data = { kickDate, kickTime };
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
      <button type="submit" style={{ width: '80%', height: '100px' }}>Kick</button>
    </form>
  );
}
