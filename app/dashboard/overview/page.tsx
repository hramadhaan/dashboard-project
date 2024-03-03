"use client";

import HeaderLayout from "@/components/header_layout";
import LineChartComponent from "@/components/line_charts";
import MinicardSection from "@/components/minicard_section";
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
// import { useSession } from "next-auth/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OverviewPage = () => {
  // const session = useSession()

  // console.log('Session Hanif: ', session)
  return (
    <div className="flex flex-col">
      <HeaderLayout title="Dashboard" />
      <MinicardSection />
      <LineChartComponent />
    </div>
  );
};

export default OverviewPage;
