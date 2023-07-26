import React from "react";
import { CardContainer } from "../UI/Card";
import { Typography } from "@mui/material";
import useMobileView from "../../utils/helper";
import { BarChart } from "@mui/x-charts";

/*
reusable bar chart component
mui x-charts library used
*/
const BarChartComponent = (props) => {
  const isMobileView = useMobileView();

  return (
    <CardContainer
      cardStyles={props.cardStyles}
      cardContentStyles={props.cardContentStyles}
    >
      <Typography
        variant="h5"
        style={{ textAlign: "left", marginBottom: "1rem" }}
      >
        {props.title}
      </Typography>
      <BarChart
        leftAxis={null}
        bottomAxis={null}
        yAxis={[
          {
            id: "bars",
            dataKey: "data",
          },
        ]}
        series={props?.chartData}
        width={props?.width}
        height={props?.height}
        margin={{ top: 0, right: -100, bottom: 0, left: -100 }} // Adjust the margins
        padding={{ left: 0 }} // Adjust the padding
      />
    </CardContainer>
  );
};

export default BarChartComponent;
