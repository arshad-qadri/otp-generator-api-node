const express = require("express");
const app = express();

app.get("/get-otp", (req, res) => {
  const digit = "0123456789";
  // const digit = digits.split("")
  let otp = [];

  for (let i = 0; i < 4; i++) {
    let a = Math.floor(Math.random() * 10);

    otp.push(`${digit[a]}`);
  }
  return res.status(200).send({ message: "Otp generated", otp: otp.join("") });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
