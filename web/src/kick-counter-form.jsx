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
    <form onSubmit={handleSubmit} className="mt-4 grid justify-items-center">
      <button
        type="submit"
        className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        Kick
      </button>
    </form>
  );
}
