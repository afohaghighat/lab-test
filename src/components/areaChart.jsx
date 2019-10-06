import React from 'react';
import Colorize from '../hoc/colorize';
import { VictoryArea, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';

const AreaChart = ({ data, color: areaColor, width, height }) => {
  return (
    <>
      <VictoryChart theme={VictoryTheme.grayscale} height={height} width={width}>
        <VictoryArea
          data={data}
          style={{
            data: { fill: areaColor, strokeWidth: 1 }
          }}
        />
        <VictoryAxis
          crossAxis
          style={{
            tickLabels: { fontSize: 10, padding: 5 },
            grid: { stroke: '#888' },
            ticks: {stroke: "#333", size: 2},
          }}
          tickCount={20}
        />
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: { fontSize: 10, padding: 5 },
            grid: { stroke: '#888' }
          }}
        />
      </VictoryChart>
    </>
  );
};

export default Colorize(AreaChart);
