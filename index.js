import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post("/ussd", (req, res) => {
  const { text } = req.body;

  let response = "";

  if (text === "") {
    response = `CON Welcome to FlexiDataGH
1. Buy Data & Airtime
2. Results Checker
3. DStv Subscription
0. Exit`;
  } 
  else if (text === "1") {
    response = `CON Buy Data & Airtime
1. Data
2. Airtime
0. Back`;
  }
  else if (text === "1*1") {
    response = `CON Select Network
1. MTN
2. AirtelTigo
3. Telecel`;
  }
  else if (text === "0") {
    response = "END Thank you for using FlexiDataGH";
  }
  else {
    response = "END Invalid choice";
  }

  res.set("Content-Type", "text/plain");
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`USSD server running on port ${PORT}`);
});

