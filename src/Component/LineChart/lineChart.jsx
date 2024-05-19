import { tableData, updatetableData } from '../../applicationData';
import * as React from 'react';
import {useEffect, useState} from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

if(tableData.length === tableData.length+1)console.log(tableData.length)


const chartSetting = {
  xAxis: [
    {
      label: 'amount',
    },
  ],
  width: 550,
  height: 350,
};

const dataset1 = [
  { title: "Dummy", price: 1, category: "Dummy", date: "Dummy"},
  { title: "Dummy2", price: 2, category: "Dummy", date: "Dummy"},
];

const valueFormatter = (value) => `${value}mm`;

export default function LineBarChart({updateTableData}) {
  const [tableData1, setTableData1] = useState([]);

  useEffect(() => {
    console.log(updateTableData.length)
  }, [updateTableData]);
  
  console.log(">>>>"+tableData.length);
  useEffect(() => {
    updatetableData();
  }, [tableData1]);

//  console.log(tableData.length); 
const dataset = updateTableData;

  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'title' }]}
      series={[{ dataKey: 'price', label: 'Expenses', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}










// export default LineBarChart;
