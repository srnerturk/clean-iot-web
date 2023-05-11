import "../styles/globals.css";
import Layout from "../components/layouts";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [simCards, setSimCards] = useState([
    {
      id: 0,
      type: 0,
      name: "NB-IoT SIM Tri-Punch (2FF-3FF-4FF)",
      price: 5,
    },
    {
      id: 1,
      type: 1,
      name: "Mini SIM (2FF)",
      price: 10,
    },
    {
      id: 2,
      type: 1,
      name: "Micro SIM (3FF)",
      price: 13,
    },
    {
      id: 3,
      type: 1,
      name: "Nano SIM (4FF)",
      price: 15,
    },
  ]);

  const [selectedSimCard, setSelectedSimCard] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [isOrder, setIsOrder] = useState(false);

  console.log("isOrder", isOrder);

  return (
    <Layout>
      <Component
        simCards={simCards}
        selectedSimCard={selectedSimCard}
        setSelectedSimCard={setSelectedSimCard}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        isOrder={isOrder}
        setIsOrder={setIsOrder}
        {...pageProps}
      />
    </Layout>
  );
}

export default MyApp;
