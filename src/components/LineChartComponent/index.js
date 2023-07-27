import React from "react";
import { CardContainer } from "../UI/Card";
import { Box, Typography } from "@mui/material";
import useMobileView from "../../utils/helper";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { LineChart } from "@mui/x-charts/LineChart";
import { COLORS } from "../../utils/Constants";

/*
reusable line chart component
mui x-charts library used
*/
const LineChartComponent = (props) => {
  const chartData = [
    {
      data: props.lineChartData,
      color: props.lineChartColor,
    },
  ];
  const isMobileView = useMobileView();
  return (
    <CardContainer
      cardStyles={props.cardStyles}
      cardContentStyles={props.cardContentStyles}
    >
      <Box
        component="div"
        noValidate
        sx={{
          mt: 1,
          pl: isMobileView ? 1 : 0,
          width: isMobileView ? "30%" : "50%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="h4">{props.value}</Typography>
        <Typography variant="body1" fontSize={11}>
          <ArrowUpwardIcon fontSize="smaller" sx={{ color: COLORS.UP_ARROW_GREEN }} />
          {props.sinceYesterday}
        </Typography>
      </Box>
      <LineChart
        leftAxis={null}
        bottomAxis={null}
        series={chartData}
        width={500}
        height={300}
      />
    </CardContainer>
  );
};

export default LineChartComponent;
