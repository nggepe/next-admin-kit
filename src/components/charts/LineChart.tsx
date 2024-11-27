"use client";
import { ChartData, ChartOptions } from "chart.js";
import Chart from "chart.js/auto";
import { CanvasHTMLAttributes, DetailedHTMLProps, useEffect, useRef } from "react";
export interface LineChartProps {
  data: ChartData<"line">;
  options: ChartOptions<"line">;
  canvasProps?: DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
}

const LineChart = (props: LineChartProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "line",
        data: props.data,
        options: props.options
      });
    }
  }, [props.data, props.options]);

  return <canvas style={{ width: "100%" }} {...props.canvasProps} ref={chartRef}></canvas>;
};

export default LineChart;
