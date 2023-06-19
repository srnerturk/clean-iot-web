import "../styles/globals.css";
import Layout from "../components/layouts";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [simCards, setSimCards] = useState([
    {
      id: 0,
      type: 1,
      name: "TRIONBIOTSIMNC (Tri-punch Narrow Band IoT)",
      price: 1,
    },
    {
      id: 1,
      type: 0,
      name: "M2M 2FF Consumer",
      price: 1,
    },
    {
      id: 2,
      type: 0,
      name: "M2M 2FF Industrial",
      price: 3,
    },
    {
      id: 3,
      type: 0,
      name: "M2M 3FF Consumer",
      price: 1,
    },
  ]);

  const [selectedSimCard, setSelectedSimCard] = useState(-1);

  const [totalPrice, setTotalPrice] = useState(0);

  const [isOrder, setIsOrder] = useState(false);
  const [prices, setPrices] = useState([
    {
      planId: 1,
      value: "1",
      unit: "MB",
      price: "1.70",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 2,
      value: "10",
      unit: "MB",
      price: "1.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 3,
      value: "25",
      unit: "MB",
      price: "2.45",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 4,
      value: "50",
      unit: "MB",
      price: "2.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 5,
      value: "100",
      unit: "MB",
      price: "3.45",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 6,
      value: "150",
      unit: "MB",
      price: "4.45",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 7,
      value: "250",
      unit: "MB",
      price: "5.45",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 8,
      value: "500",
      unit: "MB",
      price: "7.45",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 9,
      value: "750",
      unit: "MB",
      price: "9.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 10,
      value: "1",
      unit: "GB",
      price: "11.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 11,
      value: "2",
      unit: "GB",
      price: "23.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 12,
      value: "3",
      unit: "GB",
      price: "34.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 13,
      value: "4",
      unit: "GB",
      price: "45.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 14,
      value: "5",
      unit: "GB",
      price: "56.45",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 15,
      value: "10",
      unit: "GB",
      price: "109.95",
      perPrice: [
        {
          value: "4 cents",
          unit: "MB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 16,
      value: "25",
      unit: "GB",
      price: "159.95",
      perPrice: [
        {
          value: "8 dollars",
          unit: "GB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 17,
      value: "50",
      unit: "GB",
      price: "299.95",
      perPrice: [
        {
          value: "8 dollars",
          unit: "GB",
        },
        {
          value: "2 cent",
          unit: "SMS",
        },
      ],
    },
    {
      planId: 18,
      value: "NB",
      unit: "-IOT",
      price: "2.95",
      perPrice: [
        {
          value: "1 cents",
          unit: "MB",
        },
      ],
    },
  ]);

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
        prices={prices}
        {...pageProps}
      />
    </Layout>
  );
}

export default MyApp;
