import React, { useState } from "react";
import { Button, Select, Input } from "semantic-ui-react";
import Web3 from "web3";

const options = [
  { key: "gwei", text: "Gwei", value: "gwei" },
  { key: "ether", text: "Ether", value: "ether" },
];

function InputActions({ contract, accounts }) {
  const [inputValue, setInputValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [inGwei, setInGwei] = useState(true);

  const handleOnClick = async () => {
    setIsLoading(true);

    try {
      const betValue = Web3.utils.toWei(inputValue, inGwei ? "gwei" : "ether");
      await contract.methods
        .addBet()
        .send({ from: accounts[0], value: betValue });
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  return (
    <Input type="text" action>
      <input
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      <Select
        compact
        options={options}
        defaultValue="gwei"
        onChange={(event) => setInGwei(event.target.value === "gwei")}
      />
      <Button primary type="submit" loading={isLoading} onClick={handleOnClick}>
        Add new bet
      </Button>
    </Input>
  );
}

export default InputActions;
