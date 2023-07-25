import { get } from "lodash";
import React, { useEffect, PureComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getChartData } from "../../store/slices/chartDataReducer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CardContainer } from "../../components/UI/Card";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import useMobileView from "../../utils/helper";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const isMobileView = useMobileView(); // Using the custom hook here
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

  // useEffect(() => {
  //    dispatch(getChartData())
  // }, [])

  return (
    <CardContainer
      cardStyles={{
        width: "100%",
        maxWidth: "500px",
        marginTop: "30px",
        height: "200px",
      }}
      cardContentStyles={{
        padding: !isMobileView ? "1rem" : "0",
        display: "flex",
        flexDirection: isMobileView ? "column" : "row",
        alignItems: "center",
        width: "100%",
        height: "200px",
      }}
    >
      
      <Box
        component="div"
        noValidate
        sx={{
          mt: 1,
          width: isMobileView ? "100%" : "50%", // Set 100% width in mobile view, 70% in web view
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6">High</Typography>
        <Typography variant="h4">2659</Typography>
        <Typography variant="body1">1.10% since yesterday</Typography>
      </Box>

      {/* Right Section */}
      <ResponsiveContainer width="45%" height="50%">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </CardContainer>
  );
};

export default Dashboard;
