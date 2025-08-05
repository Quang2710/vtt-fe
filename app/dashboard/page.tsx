import DashboardLayout from "@/components/dashboard/Layout";
import Statistics from "@/components/dashboard/contents/statistics/index";

export default function DashboardPage() {
  return (
    <div className="md:px-[10vw]">
      {" "}
      <DashboardLayout>
        <Statistics />
      </DashboardLayout>
    </div>
  );
}
