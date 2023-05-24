import { SMTPClient } from "emailjs";

export default async function handler(req, res) {
  const {
    name,
    email,
    message,
    number,
    simType,
    autoSelection,
    getKnowledge,
    totalPrice,
    itemQuantity,
    simName,
  } = req.body;

  const _message = `Full Name: ${name} \n Email: ${email} \n Phone Number: ${number} \n SIM Type: ${simType} \n Auto Selection: ${autoSelection} \n Get Knowledge: ${getKnowledge} \n Total Price: ${
    totalPrice ? `$${totalPrice}` : "-"
  } \n Item Quantity: ${itemQuantity ? itemQuantity : "-"} \n SIM Name: ${
    simName ? simName : "-"
  } \n Message: ${message}`;

  const authInfo = {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
    host: "smtp.gmail.com",
    ssl: true,
    port: 465,
  };

  const client = new SMTPClient(authInfo);

  try {
    client.send({
      text: _message,
      from: email,
      to: authInfo.user,
      subject: `CleanIOT ${
        itemQuantity !== "" ? "- New Order -" : ""
      } ${name} - ${email}`,
    }),
      (err, message) => {
        console.log(err || message);
      };
  } catch (error) {
    res.status(400).end(JSON.stringify({ message: "Error sending email" }));
  }
  res.status(200).end(JSON.stringify({ message: "Send email" }));
}
