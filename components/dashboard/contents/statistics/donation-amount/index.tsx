"use client";

import { useState } from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Tabs, Tab } from "@heroui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels7Days = [
  "Jul 25",
  "Jul 26",
  "Jul 27",
  "Jul 28",
  "Jul 29",
  "Jul 30",
  "Jul 31",
];
const labels30Days = Array.from({ length: 30 }, (_, i) => `Jul ${i + 1}`);

const data7Days = [2, 1.5, 1, 1, 1, 1, 1];
const data30Days = labels30Days.map((_, i) => (i < 5 ? 2 - i * 0.25 : 1));

const chartConfig = (labels: string[], data: number[]) => ({
  labels,
  datasets: [
    {
      label: "Shares",
      data,
      fill: true,
      borderColor: "rgb(239, 68, 98)",
      backgroundColor: "rgba(239, 68, 98, 0.1)",
      pointBackgroundColor: "rgb(239, 68, 98)",
      tension: 0,
    },
  ],
});

export default function DonationAmountCard() {
  const [tab, setTab] = useState<"7D" | "30D">("7D");

  return (
    <Card shadow="sm" className="md:px-2 " radius="md" fullWidth>
      <CardHeader className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Donation Amount</h2>
      </CardHeader>
      <CardBody className="space-y-4">
        <Tabs
          variant="underlined"
          fullWidth
          color="danger"
          className="flex font-semibold justify-center items-center text-sm"
        >
          <Tab value="7D" className="flex flex-col gap-6" title="7 DAYS">
            <div className="flex flex-col gap-4">
              <div className="text-3xl font-medium text-gray-900">0 VND</div>
              <p className="text-sm text-gray-700">
                The donation amount your campaign has received (including
                offline donations).
              </p>
            </div>

            <div className="w-full min-h-[340px] md:min-h-[440px]">
              <Line
                data={chartConfig(labels7Days, data7Days)}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      ticks: {
                        stepSize: 0.5,
                      },
                    },
                  },
                }}
              />
            </div>
          </Tab>
          <Tab value="30D" className="flex flex-col gap-6" title="30 DAYS">
            <div className="flex flex-col gap-4">
              <div className="text-3xl font-medium text-gray-900">0 VND</div>
              <p className="text-sm text-gray-700">
                The donation amount your campaign has received (including
                offline donations).
              </p>
            </div>
            <div className="w-full min-h-[340px] md:min-h-[440px]">
              <Line
                data={chartConfig(labels30Days, data30Days)}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      ticks: {
                        stepSize: 0.5,
                      },
                    },
                  },
                }}
              />
            </div>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}
