import React from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import Colorize from './../hoc/colorize';

const LineChart = ({ data, color: lineColor, width, height }) => {
  return (
    <>
      <VictoryChart theme={VictoryTheme.grayscale} height={height} width={width}>
        <VictoryLine
          style={{
            data: { stroke: lineColor, strokeWidth: 1 }
          }}
          data={data}
        />
        <VictoryAxis
          crossAxis
          style={{
            tickLabels: { fontSize: 10, padding: 5 },
            grid: { stroke: '#ebebeb' },
            ticks: {stroke: "#333", size: 2},
          }}
          tickCount={20}
        />
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: { fontSize: 10, padding: 5 },
            grid: { stroke: '#ebebeb' }
          }}
        />
      </VictoryChart>
    </>
  );
};

export default Colorize(LineChart);
