import { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, ChartConfiguration } from 'chart.js';

// Register the required components for Chart.js
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

interface DataPoint {
  accel_x: number;
  accel_y: number;
  accel_z: number;
  gyro_x: number;
  gyro_y: number;
  gyro_z: number;
  timestamp: Date;
}

interface Props {
  datas: DataPoint[];
}

const Example: React.FC<Props> = ({datas}) => {
  console.log(datas)
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const accel_x_data = datas.map(data => data.accel_x);
        const accel_y_data = datas.map(data => data.accel_y);
        const accel_z_data = datas.map(data => data.accel_z);
        const gyro_x_data = datas.map(data => data.gyro_x);
        const gyro_y_data = datas.map(data => data.gyro_y);
        const gyro_z_data = datas.map(data => data.gyro_z);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const config: ChartConfiguration<'line'> = {
          type: 'line',
          data: {
            labels: ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{
              data: [86, 114, 106, 106, 107, 111, 133],
              label: "Applied",
              borderColor: "#3e95cd",
              backgroundColor: "#7bb6dd",
              fill: false,
            }, {
              data: [70, 90, 44, 60, 83, 90, 100],
              label: "Accepted",
              borderColor: "#3cba9f",
              backgroundColor: "#71d1bd",
              fill: false,
            }, {
              data: [10, 21, 60, 44, 17, 21, 17],
              label: "Pending",
              borderColor: "#ffa500",
              backgroundColor: "#ffc04d",
              fill: false,
            },{ data: [30, 21, 60, 44, 17, 21, 17],
              label: "Pending",
              borderColor: "#3e95cd",
              backgroundColor: "#3e95cd",
              fill: false,
            },
            { data: [20, 21, 60, 44, 17, 21, 17],
              label: "Pending",
              borderColor: "#777 ",
              backgroundColor: "#777",
              fill: false,
            },
             {
              data: [6, 3, 2, 2, 7, 0, 16],
              label: "Rejected",
              borderColor: "#c45850",
              backgroundColor: "#d78f89",
              fill: false,
            }]
          },
        };

        // Destroy existing chart instance if it exists
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        // Create new chart instance
        chartInstanceRef.current = new Chart(ctx, config);
      }
    }

    // Cleanup function to destroy chart instance when component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className='border-2 w-[85%] h-32 rounded-md mt-2'>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default Example;
