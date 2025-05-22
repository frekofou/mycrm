---
name: chartjs-pie
description: A customizable pie/donut chart component using Chart.js library
keywords: chart, pie, donut, data visualization, Chart.js, analytics
---

#### chartjs-pie

A versatile chart component that creates pie or donut charts using Chart.js. It supports both guided and advanced data configuration modes, with extensive customization options for appearance and behavior.

Properties:
- displayType: string ("pie" | "doughnut") - Determines the chart type
- isLegend: boolean - Controls legend visibility
- legendPosition: string ("top" | "bottom" | "left" | "right") - Sets legend position
- legendAlignement: string ("start" | "center" | "end") - Controls legend alignment
- legendSize: string (px) - Sets legend font size
- legendColor: string - Defines legend text color
- dataType: string - Sets the configuration mode. **CRITICAL** Always set to "advanced".
- labels: binded<string[]> - X-axis labels. advanced mode only.
- datasets: binded<object[]> - Dataset objects with label, backgroundColor, borderColor, data keys. advanced mode only.
- options: binded<object> - Advanced chart options. advanced mode only.
- dataXField: string - Field name for categories
- dataXFieldProperty: string - Nested property for category field
- dataOrderBy: string ("default" | "x" | "y") - Data sorting field
- dataDirection: string ("ASC" | "DESC") - Sorting direction
- dataXEmpty: boolean - Include empty values
- yAxis: string ("item-count" | "field-summary") - Value calculation method
- dataYField: string - Field name for values
- dataYFieldProperty: string - Nested property for value field
- aggregate: string ("distinct" | "value" | "sum" | "average" | "median" | "min" | "max") - Aggregation method
- colors: array - Custom colors for chart segments

Events:
- chart:click: Triggered when clicking on the chart
- position: {x: number, y: number}
- points: [{label: string, value: number, index: number, datasetIndex: number}]

Note: 
- To make graph responsive: First, always set these options : responsive: true and maintainAspectRatio: false, Second, set min-width: 0px to direct parent container.
- **IMPORTANT** labels, datasets, options and data properties HAVE TO BE BINDED data