import React from "react";
// import { ResponsiveContainer } from "recharts";
import "./topan.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function TopAn() {
  return (
    <div className="topan">
      <div className="topAnItems">
        <div className="topAnTitle">
          <h5 className="sales"> Sales</h5>
          <h5 className="monthlygoal"> Monthly Goal</h5>
        </div>
        <div className="topAnAmount">
          <h3 className="monthlygoal"> 98.1%</h3>
          <span className="topdegreesales"> +6.9%</span>
        </div>
        <div className="topAnChart">
          {" "}
          <progress
            id="file"
            className="progress"
            value="98.1"
            max="100"
          ></progress>
        </div>
        <div className="topAnComment">Your Goal</div>
      </div>
      <div className="topAnItems">
        <div className="topAnTitle">
          <h5 className="sales"> Revenue</h5>
          <h5 className="monthlygoal"> Total Profit</h5>
        </div>
        <div className="topAnAmount">
          <h3 className="monthlygoal"> $13,893</h3>
          <span className="topdegree"> +11.3%</span>
        </div>
        <div className="topAnChart">
          <ResponsiveContainer aspect={4 / 1}>
            <BarChart data={data}>
              <Bar dataKey="uv" fill="rgb(253, 155, 8)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="topAnItems">
        <div className="topAnTitle">
          <h5 className="sales"> Clients</h5>
          <h5 className="monthlygoal"> Subscribed</h5>
        </div>
        <div className="topAnAmount">
          <h3 className="monthlygoal"> 1232</h3>
          <span className="topdegreesales"> +3.2</span>
        </div>
        <div className="topAnChart">
          <progress
            id="file"
            className="progress"
            value="75"
            max="100"
          ></progress>
        </div>
        <div className="topAnComment">Year Goal</div>
      </div>
    </div>
  );
}
