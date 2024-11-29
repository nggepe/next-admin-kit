"use client";
import { ChartData, ChartOptions } from "chart.js";
import { CanvasHTMLAttributes, DetailedHTMLProps } from "react";
import ChartJs from "./ChartJs";
export interface LineChartProps {
  data: ChartData<"line">;
  options: ChartOptions<"line">;
  canvasProps?: DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
}

const LineChart = (props: LineChartProps) => {
  return (
    <ChartJs config={{ data: props.data, options: props.options, type: "line" }} canvasProps={props.canvasProps} />
  );
};

export default LineChart;
