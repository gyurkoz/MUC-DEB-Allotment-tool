# ECharts

ECharts component

## Overview

- **Category**: charts
- **Base Library**: mui
- **MUI Component**: ECharts

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ChartsECharts } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const option = {
    title: { text: 'Basic Line Chart', left: 'center', textStyle: { fontFamily: 'Liberation Sans, Arial' } },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  return <ReactECharts option={option} />;
};
Sample.parameters = storyParameters;
Sample.tags = ['hideInSidebar'];

export const BasicLineChart = () => {
  const option = {
    title: { text: 'Basic Line Chart', left: 'center', textStyle: { fontFamily: 'Liberation Sans, Arial' } },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  return <ReactECharts option={option} style={defaultStyles} />;
};
BasicLineChart.parameters = storyParameters;

export const StackedAreaChart = () => {
  const option = {
    title: { text: 'Stacked Area Chart', left: 'center', textStyle: { fontFamily: 'Liberation Sans, Arial' } },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: { backgroundColor: '#6a7985' },
      },
    },
    legend: {
      top: 40,
      data: ['Email Marketing', 'Affiliate Ad', 'Video Ad', 'Direct Access'],
    },
    grid: {
      top: 65,
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
    ],
    yAxis: [{ type: 'value' }],
    series: [
      {
        name: 'Email Marketing',
        type: 'line',
        stack: 'Total amount',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Affiliate Ad',
        type: 'line',
        stack: 'Total amount',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ad',
        type: 'line',
        stack: 'Total amount',
        areaStyle: {},
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Direct Access',
        type: 'line',
        stack: 'Total amount',
        areaStyle: {},
        data: [320, 332, 301, 334, 390, 330, 320],
      },
    ],
  };

  return <ReactECharts option={option} style={defaultStyles} />;
};
StackedAreaChart.parameters = storyParameters;

export const PieChart = () => {
  const seriesData = [
    { name: 'Mccoy', value: 10 },
    { name: 'Neale', value: 134 },
    { name: 'Benjamin', value: 15 },
    { name: 'Andersen', value: 81 },
    { name: 'Beil', value: 65 },
    { name: 'Duarte', value: 43 },
    { name: 'Lawrence', value: 17 },
    { name: 'Castillo', value: 55 },
    { name: 'Horne', value: 24 },
    { name: 'Kaye', value: 76 },
  ];

  const legendData = map(seriesData, ({ name }) => name);
  const legendSelected = mapValues(
    mapKeys(seriesData, ({ name }) => name),
    ({ value }) => value < 50,
  );

  const option = {
    title: {
      text: 'Statistics of the same name',
      subtext: 'Purely fictitious',
      left: 'center',
      textStyle: { fontFamily: 'Liberation Sans, Arial' },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 20,
      top: 20,
      bottom: 20,
      data: legendData,
      selected: legendSelected,
    },
    series: [
      {
        name: 'Name',
        type: 'pie',
        radius: '65%',
        center: ['33%', '50%'],
        data: seriesData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  return <ReactECharts option={option} style={defaultStyles} />;
};
PieChart.parameters = storyParameters;

export default {
  title: 'Graphs & charts/Apache ECharts Integration',
  component: Readme,
```

## Examples

```tsx
const option = {
    title: { text: 'Basic Line Chart', left: 'center', textStyle: { fontFamily: 'Liberation Sans, Arial' } },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  return <ReactECharts option={option} />;
};
Sample.parameters = storyParameters;
Sample.tags = ['hideInSidebar'];

export const BasicLineChart = () => {
  const option = {
    title: { text: 'Basic Line Chart', left: 'center', textStyle: { fontFamily: 'Liberation Sans, Arial' } },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  return <ReactECharts option={option} style={defaultStyles} />;
};
BasicLineChart.parameters = storyParameters;

export const StackedAreaChart = () => {
  const option = {
    title: { text: 'Stacked Area Chart', left: 'center', textStyle: { fontFamily: 'Liberation Sans, Arial' } },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: { backgroundColor: '#6a7985' },
      },
    },
    legend: {
      top: 40,
      data: ['Email Marketing', 'Affiliate Ad', 'Video Ad', 'Direct Access'],
    },
    grid: {
      top: 65,
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
    ],
    yAxis: [{ type: 'value' }],
    series: [
      {
        name: 'Email Marketing',
        type: 'line',
        stack: 'Total amount',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Affiliate Ad',
        type: 'line',
        stack: 'Total amount',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ad',
        type: 'line',
        stack: 'Total amount',
        areaStyle: {},
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Direct Access',
        type: 'line',
        stack: 'Total amount',
        areaStyle: {},
        data: [320, 332, 301, 334, 390, 330, 320],
      },
    ],
  };

  return <ReactECharts option={option} style={defaultStyles} />;
};
StackedAreaChart.parameters = storyParameters;

export const PieChart = () => {
  const seriesData = [
    { name: 'Mccoy', value: 10 },
    { name: 'Neale', value: 134 },
    { name: 'Benjamin', value: 15 },
    { name: 'Andersen', value: 81 },
    { name: 'Beil', value: 65 },
    { name: 'Duarte', value: 43 },
    { name: 'Lawrence', value: 17 },
    { name: 'Castillo', value: 55 },
    { name: 'Horne', value: 24 },
    { name: 'Kaye', value: 76 },
  ];

  const legendData = map(seriesData, ({ name }) => name);
  const legendSelected = mapValues(
    mapKeys(seriesData, ({ name }) => name),
    ({ value }) => value < 50,
  );

  const option = {
    title: {
      text: 'Statistics of the same name',
      subtext: 'Purely fictitious',
      left: 'center',
      textStyle: { fontFamily: 'Liberation Sans, Arial' },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 20,
      top: 20,
      bottom: 20,
      data: legendData,
      selected: legendSelected,
    },
    series: [
      {
        name: 'Name',
        type: 'pie',
        radius: '65%',
        center: ['33%', '50%'],
        data: seriesData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  return <ReactECharts option={option} style={defaultStyles} />;
};
PieChart.parameters = storyParameters;

export default {
  title: 'Graphs & charts/Apache ECharts Integration',
  component: Readme,
```

## MUI Reference

This component is based on Material-UI's ECharts.

For additional props and detailed API documentation, refer to:

- [MUI ECharts Documentation](https://mui.com/material-ui/api/echarts/)

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
