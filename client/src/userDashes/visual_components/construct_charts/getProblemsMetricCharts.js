import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from "victory";

export default function getProblemsMetricsCharts({ totalProblemsSolved, totalSolutionsSeen }) {
  console.log(`in creating metrics comparison of problems: ${totalProblemsSolved} , ${totalSolutionsSeen}`);

  return {
    comparisonMetrics: (
      <VictoryChart
        width={500}
        height={200}
        padding={{ top: 20, bottom: 40, left: 50, right: 20 }}
        theme={VictoryTheme.clean}
        domainPadding={{ x:100 }} // mai aproape una de alta
      >
        <VictoryAxis
          tickValues={[1, 2]}
          tickFormat={["Solved", "Seen"]}
          style={{
            axis: { stroke: "#fff" },                  // linia axei albă
            tickLabels: { fontSize: 14, fill: "#fff" }, // text alb
            ticks: { stroke: "#fff" }                   // liniuțele mici albe
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `${x}`}
          style={{
            axis: { stroke: "#fff" },
            tickLabels: { fontSize: 12, fill: "#fff" },
            ticks: { stroke: "#fff" },
            grid: { stroke: "#333", strokeDasharray: "4 4" } // opțional: grilaj subtil
          }}
        />
        <VictoryBar
          barWidth={100} // cât de late sunt barele
          data={[
            { x: 1, y: totalProblemsSolved },
            { x: 2, y: totalSolutionsSeen }
          ]}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryLabel dy={5} style={{ fill: "#fff" }} />} // etichete albe
          style={{
            data: {
              fill: ({ datum }) => datum.x === 1 ? "#b22222" : "#999",
            }
          }}
        />
      </VictoryChart>
    )
  };
}
