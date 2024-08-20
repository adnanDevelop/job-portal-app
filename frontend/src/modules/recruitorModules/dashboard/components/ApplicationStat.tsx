import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register components to ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ApplicationStat = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Applications",
        data: [65, 59, 80, 41, 56, 55, 90],
        backgroundColor: (context: { dataset: { data: number[] } }) => {
          const values = context.dataset.data as number[];
          return values.map((value) => {
            let color;
            switch (true) {
              case value > 60:
                color = "#059669"; // Green
                break;
              case value > 50:
                color = "#FFD700"; // Yellow
                break;
              default:
                color = "#ef4444"; // Red
            }
            return color;
          });
        },
        barThickness: 40,
      },
    ],
  };

  // Define your chart options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Statistics of Active Applications",
      },
    },
  };

  return (
    <section className="p-4 rounded-md bg-light-blue h-[450px] w-full">
      <h3 className="text-lg font-medium text-white font-poppin">
        Acquistions
      </h3>
      <Bar data={data} options={options} />
    </section>
  );
};

export default ApplicationStat;
