import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { BarChart } from '@mui/x-charts/BarChart';
import {
    fetchChartData,
    selectChartDataError,
    selectChartDataItems,
    selectChartDataLoading
} from "../../store/slices/chartDataReducer";
import { Grid } from "@mui/material";
import useMobileView from "../../utils/helper";
import LineChartComponent from "../../components/LineChartComponent";
import WelcomeDashboardComponent from "../../components/WelcomeDashboardComponent";


const Dashboard = (props) => {
    const dispatch = useDispatch();
    const isMobileView = useMobileView();

    useEffect(() => {
        dispatch(fetchChartData({ startDate: "2023-05-20", endDate: "2023-06-08" }));
    }, [dispatch]);

    const loading = useSelector(selectChartDataLoading);
    const error = useSelector(selectChartDataError);
    const chartData = useSelector(selectChartDataItems);
    const lineChartSinceYesterday = "1.10% since yesterday"
    const chartType = "basis"

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body1,
        padding: theme.spacing(0.5),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
    }));

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>
                            <WelcomeDashboardComponent title="Welcome to your dashboard!"
                                subTitle="Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!"
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <BarChart
                                leftAxis={null}
                                bottomAxis={null}
                                xAxis={[
                                    {
                                        id: 'barCategories',
                                        data: ['bar A', 'bar B', 'bar C', 'bar D', 'bar E'],
                                        scaleType: 'band',
                                    },
                                ]}
                                yAxis={[
                                    {
                                        id: 'bars',
                                        dataKey: 'data',
                                    },
                                ]}
                                series={[
                                    {
                                        data: [2, 5, 3, 7, 8],
                                    },
                                ]}
                                width={300}
                                height={200}
                            />

                        </Item>
                    </Grid>
                    {/* line charts */}
                    <Grid item xs={4}>
                        <Item>
                            <LineChartComponent title="High" value="2659" sinceYesterday={lineChartSinceYesterday}
                                chartData={chartData} chartType={chartType} chartColor="#ed8f2b" dataKey={"h"}
                            />
                        </Item>

                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <LineChartComponent title="Low" value="2659" sinceYesterday={lineChartSinceYesterday}
                                chartData={chartData} chartType={chartType} chartColor="#ebc923" dataKey={"l"}
                            />
                        </Item>

                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <LineChartComponent title="Open" value="2659" sinceYesterday={lineChartSinceYesterday}
                                chartData={chartData} chartType={chartType} chartColor="#5dc972" dataKey={"o"}
                            />
                        </Item>

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
