import {
  Chart,
  ChartConfiguration,
  ChartConfigurationCustomTypesPerDataset,
  ChartType,
  DefaultDataPoint
} from "chart.js/auto";
import { CanvasHTMLAttributes, DetailedHTMLProps, useEffect, useRef } from "react";

export interface ChartJsProps<TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown> {
  config: ChartConfiguration<TType, TData, TLabel> | ChartConfigurationCustomTypesPerDataset<TType, TData, TLabel>;
  canvasProps?: DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
}

const ChartJs = (props: ChartJsProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, props.config);
    }
  }, [props.config]);

  return <canvas style={{ width: "100%" }} {...props.canvasProps} ref={chartRef}></canvas>;
};

export default ChartJs;
