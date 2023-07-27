import React from "react";
import { CardContainer } from "../UI/Card";
import { Box, Typography } from "@mui/material";
import useMobileView from "../../utils/helper";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { PieChart, Pie } from "recharts";
import { COLORS } from "../../utils/Constants";

const PieChartComponent = (props) => {
  const isMobileView = useMobileView();
  //dumy data for pie chart
  const data02 = [
    { name: "A1", value: 300, fill: "#f07b69" },
    { name: "A2", value: 300, fill: "#89f0ab" },
    { name: "B1", value: 200, fill: "#b88aed" },
  ];

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
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobileView ? "column" : "row",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ mb: isMobileView ? 1 : 0 }}>
          {props.title}
        </Typography>
        <Typography variant="body1" fontSize={12}>
          <ArrowUpwardIcon fontSize="smaller" sx={{ color: COLORS.UP_ARROW_GREEN }} />
          {props.sinceYesterday}
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PieChart
          width={isMobileView ? 200 : 300}
          height={isMobileView ? 200 : 300}
          margin={{ top: isMobileView ? 30 : 0 }} // Adjust the margins
          padding={{ left: 0 }} // Adjust the padding
        >
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={isMobileView ? 30 : 60}
            outerRadius={isMobileView ? 60 : 90}
            label
          />
        </PieChart>
      </Box>
    </CardContainer>
  );
};

export default PieChartComponent;
