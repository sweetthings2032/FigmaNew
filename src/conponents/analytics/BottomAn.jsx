import React from "react";
import "./middleAn.css";
import { AccountBalance, MoreHoriz } from "@material-ui/icons";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Area,
  CartesianGrid,
} from "recharts";
import { LineChart, Line, XAxis, YAxis } from "recharts";
const dataa = [
  {
    name: " Mon",
    User: 50,
  },
  {
    name: " Tue",
    User: 30,
  },
  {
    name: " Wed",
    User: 40,
  },
  {
    name: " Thu",
    User: 60,
  },
  {
    name: " Fri",
    User: 55,
  },
  {
    name: " Sad",
    User: 20,
  },
  {
    name: " Sun",
    User: 34,
  },
];

const data = [
  { name: "Group A", value: 40 },
  { name: "Group B", value: 100 },
];
const COLORS = ["#01521c", "#dcdcdc"];

export default function BottomAn() {
  return (
    <div className="middleAn">
      <div className="middleContainer">
        <div className="dailyProfitContainer">
          <h4 className="totalProfitContainer">Daily active clients</h4>
          <div className="dailyProfitDown">
            <ResponsiveContainer width="100%" aspect={4 / 1}>
              <LineChart data={dataa}>
                <XAxis dataKey="name" stroke="#01521c" />
                <Line type="nomotone" dataKey="User" stroke="#01521c" />

                <YAxis stroke="#01521c" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="dataa" fill="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="totalSalesContainer">
          <div className="totalSalesTop">
            <div className="amount, atm">
              <AccountBalance />
            </div>
            <div>
              <h5 className="amt">User Onboarded</h5>
              <span className="amount">Q3 Goal: 8,000 User</span>
            </div>
            <div className="atm">
              <MoreHoriz />
            </div>
          </div>
          <div className="totalSalesDown">
            <div>
              <PieChart width={110} height={110}>
                <Pie
                  data={data}
                  cx={50}
                  cy={50}
                  innerRadius={35}
                  outerRadius={55}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div className="totalSalesDownAmt">
              <div className="totalSalesAmtt">
                <h3>$2,452</h3>
                <h6>ONBOADED</h6>
                <div></div>
              </div>
              <hr className="hr" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
