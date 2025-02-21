import React, { useState } from "react";
import BarChartComponent from "./charts/Barchart";
import LineChartComponent from "./charts/Simplelinechart";
import PieChartComponent from "./charts/Piechart";
import AreaChartComponent from "./charts/AreaChart";

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");

  return (
    <div>
      <h2>Personal Finance Overview</h2>
      
      {/* Dropdown for selecting month */}
      <select onChange={(e) => setSelectedMonth(e.target.value)} value={selectedMonth}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
      </select>

      <BarChartComponent selectedMonth={selectedMonth} />
      <LineChartComponent selectedMonth={selectedMonth} />
      <PieChartComponent selectedMonth={selectedMonth} />
      <AreaChartComponent selectedMonth={selectedMonth} />
    </div>
  );
};

export default App;
