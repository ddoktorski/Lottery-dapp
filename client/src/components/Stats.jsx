import React from "react";
import { Statistic, Icon } from "semantic-ui-react";
import Web3 from "web3";

function StatisticGroup({ owner, numOfPlayers, pot, lastWinner }) {
  return (
    <Statistic.Group horizontal inverted>
      <Statistic inverted>
        <Statistic.Value>{numOfPlayers}</Statistic.Value>
        <Statistic.Label>Players</Statistic.Label>
      </Statistic>

      <Statistic inverted>
        <Statistic.Value>
          {Web3.utils.fromWei(pot.toString(), "ether")}
        </Statistic.Value>
        <Statistic.Label>Ether</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value text>{owner}</Statistic.Value>
        <Statistic.Label>
          <Icon name="user circle" /> Owner
        </Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value text>{lastWinner}</Statistic.Value>
        <Statistic.Label>
          <Icon name="birthday cake" />
          Last winner
        </Statistic.Label>
      </Statistic>
    </Statistic.Group>
  );
}

export default StatisticGroup;
