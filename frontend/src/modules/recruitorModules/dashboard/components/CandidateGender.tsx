import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register components to ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

const CandidateGender = () => {
  // Data for the Pie chart
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#059669", "#94a3b8"],
        hoverBackgroundColor: ["#048855", "#7d889b"],
        borderColor: ["#059669", "#94a3b8"],
        borderWidth: 2,
      },
    ],
  };

  // Options for the Pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return (
    <section className="p-4 rounded-md bg-light-blue">
      <h3 className="mb-4 text-lg font-medium text-white font-poppin">
        Candidates by Gender
      </h3>

      {/* Pie chart */}
      <div className="flex items-center justify-center ">
        <Pie data={data} options={options} />
      </div>
    </section>
  );
};

export default CandidateGender;
