import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";

function PieChart({ contract, participants }) {
  const [data, setData] = useState();

  useEffect(() => {
    if (contract) {
      (async () => {
        const betsData = await Promise.all(
          participants.map(async (participant) => {
            const bet = await contract.methods.bets(participant).call();
            return [participant, parseInt(bet)];
          })
        );
        const initialChartData = [["player", "bet"]];
        setData(initialChartData.concat(betsData));
      })();
    }
  }, [contract, participants]);

  const options = {
    title: { value: "Current pot distribution by users", alignment: "center" },
    pieHole: 0.4,
    sliceVisibilityThreshold: 0.01,
  };

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height={"400px"}
      data={data}
      options={options}
    >
      100
    </Chart>
  );
}

export default PieChart;
