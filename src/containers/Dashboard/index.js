import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { fetchChartData, selectChartDataItems, selectOpenHighValues } from "../../store/slices/chartDataReducer";
import { Grid } from "@mui/material";
import useMobileView from "../../utils/helper";
import LineChartComponent from "../../components/LineChartComponent";
import WelcomeDashboardComponent from "../../components/WelcomeDashboardComponent";
import BarChartComponent from "../../components/BarChartComponent";
import { get, isEmpty } from "lodash";
import { HIGH, LINE_CHART_SINCE_YESTERDAY_TEXT, LOW, OPEN, TOP_FIVE_TITLE, WELCOME_SUBTITLE, WELCOME_TITLE } from "../../utils/Constants";
import LoadingSpinner from "../../components/UI/LoadingSpinner";


const Dashboard = (props) => {
    const dispatch = useDispatch();
    const isMobileView = useMobileView();

    // on page load dispatch action to get chart data
    useEffect(() => {
        dispatch(fetchChartData({ startDate: "2023-06-26", endDate: "2023-07-26" }));
    }, [dispatch]);

    const chartData = useSelector(selectChartDataItems)

    //get chart data from redux store
    const chartDetails = useSelector(selectOpenHighValues)

    //top five high values bar chart data
    const barChartItemsTopFive = [
        {
            data: get(chartDetails, 'topFiveHighValues'),
            color: '#9811ba',
        }
    ]
    //last month bar chart data
    const barChartItemsLastMonth = [
        {
            data: get(chartDetails, 'highValues'),
            color: '#ba65eb',
        },
        {
            data: get(chartDetails, 'lowValues'),
            color: '#7cebb5',
        },
    ]

    //Grid Item component
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body1,
        padding: theme.spacing(0.5),
        textAlign: 'left',
        color: theme.palette.text.primary,
    }));

    if (isEmpty(chartData)) return (
        <LoadingSpinner styles={{ display: 'flex', justifyContent: 'center' }} />
    )
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>
                        <WelcomeDashboardComponent
                            title={WELCOME_TITLE}
                            subTitle={WELCOME_SUBTITLE}
                        />
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <BarChartComponent
                            title={TOP_FIVE_TITLE}
                            width={300}
                            height={190}
                            chartData={barChartItemsTopFive} />
                    </Item>
                </Grid>
                {/* line charts */}
                <Grid item xs={4}>
                    <Item>
                        {chartDetails && <LineChartComponent
                            title={HIGH}
                            value={get(chartDetails, 'maxHigh')}
                            sinceYesterday={LINE_CHART_SINCE_YESTERDAY_TEXT}
                            lineChartData={get(chartDetails, 'highValues')}
                            lineChartColor="#ed8f2b"
                        />}
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <LineChartComponent
                            title={LOW}
                            value={get(chartDetails, 'maxLow')}
                            sinceYesterday={LINE_CHART_SINCE_YESTERDAY_TEXT}
                            lineChartData={get(chartDetails, 'lowValues')}
                            lineChartColor="#ebc923"
                        />
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <LineChartComponent
                            title={OPEN}
                            value={get(chartDetails, 'maxOpen')}
                            sinceYesterday={LINE_CHART_SINCE_YESTERDAY_TEXT}
                            lineChartData={get(chartDetails, 'openValues')}
                            lineChartColor="#5dc972"
                        />
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <BarChartComponent
                            title="Last Month"
                            height={190}
                            chartData={barChartItemsLastMonth} />
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>

                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
