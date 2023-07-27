import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  fetchChartData,
  selectChartDataItems,
  selectOpenHighValues,
} from "../../store/slices/chartDataReducer";
import { Grid } from "@mui/material";
import useMobileView from "../../utils/helper";
import LineChartComponent from "../../components/LineChartComponent";
import WelcomeDashboardComponent from "../../components/WelcomeDashboardComponent";
import BarChartComponent from "../../components/BarChartComponent";
import { get, isEmpty } from "lodash";
import {
  COLORS,
  HIGH,
  LINE_CHART_SINCE_YESTERDAY_TEXT,
  LOW,
  OPEN,
  PIE_CHART_HEADER,
  TOP_FIVE_TITLE,
  WELCOME_SUBTITLE,
  WELCOME_TITLE,
} from "../../utils/Constants";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import PieChartComponent from "../../components/PieChartComponent";
import ThemeToggleButton from "../../components/ThemeToggleButton";
import moment from "moment";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const isMobileView = useMobileView();

  const getOneMonthBeforeToday = () => {
    const currentDate = moment();
    const oneMonthAgo = currentDate.clone().subtract(1, 'month');
  
    return {
      currentDate: currentDate.format('YYYY-MM-DD'),
      oneMonthAgo: oneMonthAgo.format('YYYY-MM-DD'),
    };
  }

  const { currentDate, oneMonthAgo } = getOneMonthBeforeToday();

  // on page load dispatch action to get chart data
  useEffect(() => {

    dispatch(
      fetchChartData({ startDate: oneMonthAgo, endDate: currentDate })
    );
  }, [dispatch]);

  const chartData = useSelector(selectChartDataItems);

  //get chart data from redux store
  const chartDetails = useSelector(selectOpenHighValues);

  //top five high values bar chart data
  const barChartItemsTopFive = [
    {
      data: get(chartDetails, "topFiveHighValues"),
      color: COLORS.TOP_FIVE_CHART,
    },
  ];
  //last month bar chart data
  const barChartItemsLastMonth = [
    {
      data: get(chartDetails, "highValues"),
      color: COLORS.LAST_MONTH_CHART_HIGH,
    },
    {
      data: get(chartDetails, "lowValues"),
      color: COLORS.LAST_MONTH_CHART_LOW,
    },
  ];

  //Grid Item component
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? COLORS.DASHBOARD_GRID_ITEM_DARK
        : COLORS.DASHBOARD_GRID_ITEM_LIGHT,
    ...theme.typography.body1,
    padding: theme.spacing(0.5),
    margin: isMobileView ? theme.spacing(1) : theme.spacing(0),
    textAlign: "left",
    color: theme.palette.text.primary,
  }));

  const cardContentStylesLineCharts = {
    padding: !isMobileView ? "1rem" : "0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: isMobileView ? "200px" : "130px",
  };

  if (isEmpty(chartData))
    return (
      <LoadingSpinner styles={{ display: "flex", justifyContent: "center" }} />
    );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: props.isDarkMode
            ? COLORS.BLACK
            : COLORS.MAIN_CONTENT_BACKGROUND,
        }}
      >
        {/* 
          for xs devices grid items will be alligned colomn wise,
          for md screens grid items items lay on normal way
         */}
        <Grid item xs={12} md={8}>
          <Item sx={{ backgroundColor: COLORS.WELCOME_BANNER }}>
            <WelcomeDashboardComponent
              title={WELCOME_TITLE}
              subTitle={WELCOME_SUBTITLE}
              cardStyles={{
                backgroundColor: COLORS.WELCOME_BANNER,
              }}
              cardContentStyles={{
                padding: !isMobileView ? "1rem" : "0",
                display: "flex",
                flexDirection: isMobileView ? "column" : "row",
                alignItems: "center",
                width: "100%",
                height: isMobileView ? "300px" : "200px",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <BarChartComponent
              title={TOP_FIVE_TITLE}
              width={300}
              height={190}
              chartData={barChartItemsTopFive}
              cardStyles={{}}
              cardContentStyles={{
                padding: !isMobileView ? "1rem" : "0",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: isMobileView ? "220px" : "200px",
              }}
            />
          </Item>
        </Grid>
        {/* line charts */}
        <Grid item xs={12} md={4}>
          <Item>
            {chartDetails && (
              <LineChartComponent
                title={HIGH}
                value={get(chartDetails, "maxHigh")}
                sinceYesterday={LINE_CHART_SINCE_YESTERDAY_TEXT}
                lineChartData={get(chartDetails, "highValues")}
                lineChartColor={COLORS.LINE_CHART_HIGH}
                cardStyles={{}}
                cardContentStyles={cardContentStylesLineCharts}
              />
            )}
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <LineChartComponent
              title={LOW}
              value={get(chartDetails, "maxLow")}
              sinceYesterday={LINE_CHART_SINCE_YESTERDAY_TEXT}
              lineChartData={get(chartDetails, "lowValues")}
              lineChartColor={COLORS.LINE_CHART_LOW}
              cardStyles={{}}
              cardContentStyles={cardContentStylesLineCharts}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <LineChartComponent
              title={OPEN}
              value={get(chartDetails, "maxOpen")}
              sinceYesterday={LINE_CHART_SINCE_YESTERDAY_TEXT}
              lineChartData={get(chartDetails, "openValues")}
              lineChartColor={COLORS.LINE_CHART_OPEN}
              cardStyles={{}}
              cardContentStyles={cardContentStylesLineCharts}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item>
            <BarChartComponent
              title="Last Month"
              height={190}
              chartData={barChartItemsLastMonth}
              cardStyles={{}}
              cardContentStyles={{
                padding: !isMobileView ? "1rem" : "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: `300px`,
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <PieChartComponent
              title={PIE_CHART_HEADER}
              sinceYesterday={LINE_CHART_SINCE_YESTERDAY_TEXT}
              width={300}
              height={190}
              cardStyles={{}}
              cardContentStyles={{
                padding: !isMobileView ? "1rem" : "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: `300px`,
              }}
            />
          </Item>
        </Grid>
        {isMobileView && (
          <Grid item xs={12}>
            <Item>
              <ThemeToggleButton
                isDarkMode={props.isDarkMode}
                handleThemeToggle={props.handleThemeToggle}
                boxStyles={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </Item>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Dashboard;
