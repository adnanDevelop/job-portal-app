import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false, // Ensure full width
  plugins: {
    legend: {
      display: false, // Correct way to hide legend
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: false,
        text: "Date",
      },
    },
  },
};

const labels = [
  "01/01/2024",
  "01/02/2024",
  "01/03/2024",
  "01/04/2024",
  "01/05/2024",
  "01/06/2024",
  "01/07/2024",
];

const data = {
  labels,
  datasets: [
    {
      data: [42, 85, 5, 30, 65, 50, 25],
      borderColor: "#71D875",
      backgroundColor: "#22c55e",
      tension: 0.4,
    },
    {
      data: [24, 65, 24, 55, 40, 5, 2],
      borderColor: "#130185",
      backgroundColor: "#ef4444",
      tension: 0.4,
    },
    {
      data: [0, 45, 55, 40, 35, 44, 82],
      borderColor: "#F4933C",
      backgroundColor: "#64748b",
      tension: 0.4,
    },
  ],
};

// Legend circle
// const legendCircle = [
//   { value: "-10%", color: "#22c55e", label: "Rate of missing information" },
//   { value: "-20%", color: "#ef4444", label: "Acceptance rate" },
//   { value: "+40%", color: "#64748b", label: "Processing time" },
// ];

const ApplicationStat = () => {
  return (
    <section className="w-full p-4 rounded-md bg-light-blue">
      <h3 className="text-lg font-medium text-white font-poppin">
        Acquistions
      </h3>
      <div className="h-[400px]">
        <Line options={options} data={data} />
      </div>
    </section>
  );
};

export default ApplicationStat;
