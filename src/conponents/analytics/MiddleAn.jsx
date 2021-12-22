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
  { name: "Group A", value: 400 },
  { name: "Group B", value: 100 },
];
const COLORS = ["#01521c", "#dcdcdc"];

export default function middleAn() {
  return (
    <div className="middleAn">
      <div className="middleContainer">
        <div className="totalSalesContainer">
          <div className="totalSalesTop">
            <div className="amount, atm">
              <AccountBalance />
            </div>
            <div>
              <h5 className="amt">Total Sales</h5>
              <span className="amount">$985.56</span>
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
                <h3>$2,595</h3>
                <h6>Invoiced</h6>
                <div></div>
              </div>
              <hr className="hr" />
              <div className="totalSalesAmtt">
                <h3>23</h3>
                <h6>Invoiced</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="dailyProfitContainer">
          <h4 className="totalProfitContainer">Daily Profit</h4>
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
      </div>
    </div>
  );
}
