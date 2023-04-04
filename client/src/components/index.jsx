import PieChart from "./PieChart";
import StatisticGroup from "./Stats";
import InputActions from "./Input";
import { Menu, Segment, Icon } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { useEth } from "../contexts/EthContext";

function Main() {
  const {
    state: { contract, accounts },
  } = useEth();

  const [participants, setParticipants] = useState([]);
  const [pot, setPot] = useState(0);
  const [owner, setOwner] = useState("");
  const [lastWinner, setLastWinner] = useState("");
  const [activeItem, setActiveItem] = useState("Chart");

  useEffect(() => {
    if (contract) {
      (async () => {
        setParticipants(await contract.methods.getParticipants().call());
        setOwner(await contract.methods.owner().call());
        setLastWinner(await contract.methods.lastWinner().call());
        setPot(await contract.methods.getBalance().call());
      })();
    }
  }, [contract, accounts, pot]);

  const handleItemClick = (event, { name }) => {
    setActiveItem(name);
  };

  return (
    <div>
      <Menu pointing inverted>
        <Menu.Item>
          <Icon name="gem" size="large" />
          Lottery
        </Menu.Item>
        <Menu.Item
          name="Chart"
          active={activeItem === "Chart"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Info"
          active={activeItem === "Info"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <InputActions />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Segment inverted hidden={activeItem !== "Chart"}>
        <PieChart contract={contract} participants={participants} />
      </Segment>
      <Segment inverted hidden={activeItem !== "Info"}>
        <StatisticGroup
          owner={owner}
          numOfPlayers={participants.length}
          pot={pot}
          lastWinner={lastWinner}
        />
      </Segment>
    </div>
  );
}

export default Main;
