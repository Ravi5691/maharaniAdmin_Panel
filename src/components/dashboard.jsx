import React from "react";
import SalesPerformanceChart from "./SalesPerformanceChart.jsx";
import TopCategoriesChart from "./TopCategoriesChart.jsx";

const Dashboard = () => {
  return (
    <div className="p-6 bg-green-200 ">
      <h1 className="text-2xl font-bold mb-6">E-commerce Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Metric Cards */}
        <div className="bg-black text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg">Total Sales</h2>
          <p className="text-3xl font-bold">$9,328.55</p>
          <p className="text-green-500 mt-2">+15.6% this week</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg">Visitors</h2>
          <p className="text-3xl font-bold">12,302</p>
          <p className="text-green-500 mt-2">+12.7% this week</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg">Refunds</h2>
          <p className="text-3xl font-bold">963</p>
          <p className="text-red-500 mt-2">-12.7% this week</p>
        </div>
      </div>

      {/* Sales Performance Section */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Sales Performance</h2>
        <SalesPerformanceChart />
      </div>

      {/* Top Categories Section */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Top Categories</h2>
        <TopCategoriesChart />
      </div>
    </div>
  );
};

export default Dashboard;
