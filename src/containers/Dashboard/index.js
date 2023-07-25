import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchChartData,
    selectChartDataError,
    selectChartDataItems,
    selectChartDataLoading
}
    from "../../store/slices/chartDataReducer";
import { Grid } from "@mui/material";
import useMobileView from "../../utils/helper";
import LineChartComponent from "../../components/LineChartComponent";

import Box from '@mui/material/Box';
import WelcomeDashboardComponent from "../../components/WelcomeDashboardComponent";

const Dashboard = (props) => {
    const dispatch = useDispatch();
    const isMobileView = useMobileView(); // Using the custom hook here

    useEffect(() => {
        dispatch(fetchChartData({ startDate: "2023-05-20", endDate: "2023-06-08" }));
    }, [dispatch]);

    const loading = useSelector(selectChartDataLoading);
    const error = useSelector(selectChartDataError);
    const chartData = useSelector(selectChartDataItems);
    const lineChartSinceYesterday = "1.10% since yesterday"
    const chartType = "basis"

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <WelcomeDashboardComponent title="Welcome to your dashboard!"
                            subTitle="Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        xs=4
                    </Grid>
                    {/* line charts */}
                    <Grid item xs={4}>
                        <LineChartComponent title="High" value="2659" sinceYesterday={lineChartSinceYesterday}
                            chartData={chartData} chartType={chartType} chartColor="#ed8f2b" dataKey={"h"}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <LineChartComponent title="Low" value="2659" sinceYesterday={lineChartSinceYesterday}
                            chartData={chartData} chartType={chartType} chartColor="#ebc923" dataKey={"l"}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <LineChartComponent title="Open" value="2659" sinceYesterday={lineChartSinceYesterday}
                            chartData={chartData} chartType={chartType} chartColor="#5dc972" dataKey={"o"}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        xs=8
                    </Grid>
                    <Grid item xs={4}>
                        xs=4
                    </Grid>
                </Grid>
            </Box>
        </>

    );
};

export default Dashboard;
