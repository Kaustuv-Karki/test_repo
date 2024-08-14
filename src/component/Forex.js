import axios from "axios";
import React, { useState } from "react";

const Forex = () => {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("aud");
  const [amount, setAmount] = useState(1);
  const [date, setDate] = useState("2023-01-01");
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchForex = async ({ date, fromCurrency, toCurrency, amount }) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://brokercopilot-backend-service.azurewebsites.net/api/utils/forex/convert/?from_currency=${fromCurrency}&to_currency=${toCurrency}&date=${date}&amount=${amount}`
      );
      setResult(res?.data?.result);
      setLoading(false);
      return res?.data;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchForex({ date, fromCurrency, toCurrency, amount });
  };

  console.log(date);

  return (
    <div>
      <h1>Forex</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.dateStyles}
            type="date"
          />
        </div>
        <div>
          <input
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            style={styles.inputStyles}
            type="text"
            placeholder="From Currency"
          />
          <input
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            style={styles.inputStyles}
            type="text"
            placeholder="To Currency"
          />
        </div>
        <div>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.inputStyles}
            type="number"
            placeholder="Amount"
          />
          <input
            value={result}
            style={styles.inputStyles}
            type="number"
            disabled
          />
        </div>
        <button style={styles.buttonStyles}>
          {loading ? "Fetching..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Forex;

const styles = {
  inputStyles: {
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  dateStyles: {
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  buttonStyles: {
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
    color: "#333",
    cursor: "pointer",
  },
};
