import observable from "./observable.js";

function sendData(data) {
  console.log("Send data somewhere:", data);
}

function sendEmail(data) {
  console.log("Send an email:", data);
}

observable.subscribe(sendData);
observable.subscribe(sendEmail);

export default "export";
