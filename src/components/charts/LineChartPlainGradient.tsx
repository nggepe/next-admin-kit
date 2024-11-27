import LineChart from "./LineChart";

export interface LineChartPlainGradientProps {
  labels: string[];
  data: number[];
  borderColor?: string;
  backgroundStartColor?: string;
  backgroundEndColor?: string;
}

const LineChartPlainGradient = (props: LineChartPlainGradientProps) => {
  return (
    <LineChart
      canvasProps={{ style: { width: "100%" } }}
      data={{
        labels: props.labels,
        datasets: [
          {
            label: "",
            data: props.data,
            pointRadius: 0,
            pointHitRadius: 100,
            fill: "origin",
            borderColor: props.borderColor ?? "rgb(0,144,255)",
            borderWidth: 4,
            backgroundColor: (context) => {
              const chartArea = context.chart.chartArea;

              if (!chartArea) {
                return props.backgroundStartColor ?? "rgba(0,144,255, 0.5)";
              }

              const gradient = context.chart.ctx.createLinearGradient(
                chartArea.left,
                chartArea.top,
                chartArea.left,
                chartArea.bottom
              );

              gradient.addColorStop(0, props.backgroundStartColor ?? "rgba(0,144,255, 0.5)");
              gradient.addColorStop(1, props.backgroundEndColor ?? "rgba(0,144,255, 0.0)");

              return gradient;
            }
          }
        ]
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          }
        },
        scales: {
          y: {
            grid: {
              display: false
            },
            ticks: {
              display: false
            },
            title: {
              display: false
            },
            border: {
              color: "transparent"
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              display: false
            },
            title: {
              display: false
            },
            border: {
              color: "transparent"
            }
          }
        },
        maintainAspectRatio: false
      }}
    />
  );
};

export default LineChartPlainGradient;
