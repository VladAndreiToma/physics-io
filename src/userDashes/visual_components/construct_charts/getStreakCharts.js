import {
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine,
  VictoryArea,
  VictoryScatter,
  VictoryTooltip
} from 'victory';

export default function getStreakCharts(streak) {
  const historyData = Object.entries(streak.loginHistory).map(
    ([date, value]) => ({ x: date, y: value })
  );

  return {
    historyChart: (
      <VictoryChart
        width={600}
        height={250}
        theme={VictoryTheme.clean}
        padding={{ top: 20, bottom: 50, left: 40, right: 20 }}
      >
        <VictoryAxis
          fixLabelOverlaps
          style={{
            axis: { stroke: "white" },
            ticks: { stroke: "white" },
            tickLabels: { fill: "white", angle: -25, textAnchor: "end" }
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "white" },
            ticks: { stroke: "white" },
            tickLabels: { fill: "white" }
          }}
        />

        {/* Umplerea de sub linie */}
        <VictoryArea
          data={historyData}
          style={{
            data: {
              fill: "rgba(178, 34, 34, 0.3)",
              strokeWidth: 0
            }
          }}
        />

        {/* Linia propriu-zisă */}
        <VictoryLine
          data={historyData}
          style={{
            data: {
              stroke: "#b22222",
              strokeWidth: 2
            }
          }}
        />

        {/* Puncte cu tooltip */}
        <VictoryScatter
          data={historyData}
          size={4}
          style={{ data: { fill: "#b22222" } }}
          labels={({ datum }) => `${datum.x}\n${datum.y} logins`}
          labelComponent={
            <VictoryTooltip
              flyoutStyle={{ fill: "#222", stroke: "#b22222" }}
              style={{ fill: "white", fontSize: 12 }}
              cornerRadius={4}
              pointerLength={6}
            />
          }
        />
      </VictoryChart>
    )
  };
}
