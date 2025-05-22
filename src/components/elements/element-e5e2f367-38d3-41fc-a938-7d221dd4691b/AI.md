---
name: chartjs-bar
description: The chartjs-bar component renders a Chart.js bar chart with guided and advanced data input modes, supporting legend display, axis orientation, data stacking, and styling properties.
keywords:
  - chart.js
  - bar chart
  - guided mode
  - advanced mode
  - data visualization
  - legend position
  - axis orientation
  - stacked bars
  - data aggregation
  - responsive design
---

#### chartjs-bar

Component Purpose: Renders a bar chart using Chart.js library with guided or advanced data input modes.

Properties:
- isLegend: boolean - Display legend. Default: true
- legendPosition: 'top' | 'bottom' | 'left' | 'right' - Legend position. Default: 'top'
- legendAlignement: 'start' | 'center' | 'end' - Legend alignment. Default: 'center'
- legendSize: string - Legend label font size. Default: "12px"
- legendColor: string | null - Legend label color. Default: null
- labelColor: string | null - Axis label color. Default: null
- gridColor: string | null - Grid line color. Default: null
- axis: 'x' | 'y' - Bar orientation. Default: 'x'
- stacked: boolean - Stack bars. Default: false
- startAtZero: boolean - Start y-axis at zero. Default: true
- dataType: 'guided' | 'advanced' - Data input mode. Default: 'advanced'
- labels (advanced): binded<string[]> - X-axis labels. Default: ['Tatooine', 'Coruscant', 'Kashyyyk']
- datasets (advanced): binded<object[]> - Chart datasets
- options (advanced): binded<object> - Additional chart options
- data (guided): binded<any[]> - Data collection
- xAxisTitle (guided): string - X-axis title
- dataXField (guided): string - X-axis data field
- dataXFieldProperty (guided): string | null - Nested X-axis data field
- dataOrderBy (guided): 'default' | 'x' | 'y' - Data ordering field
- dataDirection (guided): 'ASC' | 'DESC' - Data order direction
- dataXEmpty (guided): boolean - Include empty x-axis values
- yAxis (guided): 'item-count' | 'field-summary' - Y-axis data type
- dataYField (guided): string - Y-axis data field
- dataYFieldProperty (guided): string | null - Nested Y-axis data field
- aggregate (guided): 'distinct' | 'value' | 'sum' | 'average' | 'median' | 'min' | 'max' - Y-axis aggregation
- groupBy (guided): string - Data grouping field
- groupByProperty (guided): string | null - Nested grouping field
- colors (guided): string[] - Dataset colors

Children: none

Events:
- chart:click
  Payload: { dataX: any, dataY: any, position: { x: number, y: number }, points: [{ label: string, value: number, index: number, datasetIndex: number }] }
  Description: Triggered when clicking on the chart, providing clicked data point information and coordinates

Variables: none

Note: 
- ALWAYS MAKE IT RESPONSIVE : Set these options : responsive: true and maintainAspectRatio: false, PLUS, set min-width: 0px to direct parent container.

Example using external variable:
{"uid":"744477ea-0c0a-4f9d-a35b-024c6ef64b8f","tag":"chartjs-bar","name":"Vehicle Distribution Chart","props":{"default":{"axis":"x","yAxis":"item-count","labels":{"0":"Tatooine","1":"Coruscant","2":"Kashyyyk","3":"Dagobah","4":"Bespin","5":"Endor","6":"Hoth","code":"Object.keys(variables['d81b7fbd-cd94-4b22-8954-5fe5f532997c'])","__wwtype":"f"},"options":{"code":"{responsive: true,maintainAspectRatio: false,plugins: {title: {display: false}},scales: {y: {grid: {display: true,color: '#e2e8f0'},ticks: {font: {size: 12}}},x: {grid: {display: false},ticks: {font: {size: 12}}}}}","scales":{"y":{"beginAtZero":true}},"plugins":{"legend":{"align":"start","labels":{"font":{"size":12},"color":"black","usePointStyle":true},"display":true,"position":"left"}},"__wwtype":"f","responsive":true},"stacked":false,"dataType":"advanced","datasets":{"__wwtype":"f","defaultValue":[[{"data":[495,44,99,250,102,32],"label":"Number of Vehicles","borderWidth":1,"borderRadius":6,"backgroundColor":["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899"]}],{"data":[26,42,35,48,52,24,75],"label":"TIE Fighter","backgroundColor":"#9BD7FB"}],"code":"[{label: 'Number of Vehicles',data: Object.values(variables['d81b7fbd-cd94-4b22-8954-5fe5f532997c']),backgroundColor: ['#3b82f6', // SUV - Blue'#10b981', // Break - Green'#f59e0b', // Sedan - Yellow'#ef4444', // Sport - Red'#8b5cf6', // Compact - Purple'#ec4899'// Minivan - Pink],borderWidth: 1,borderRadius: 6}]"},"isLegend":false,"aggregate":"distinct","dataXEmpty":false,"legendSize":"12px","dataOrderBy":"default","startAtZero":true,"dataDirection":"ASC","legendPosition":"top","legendAlignement":"center"}},"styles":{"default":{"flex":"1","minHeight":"300px"}}}