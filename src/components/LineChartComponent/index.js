import React from 'react'
import { CardContainer } from '../UI/Card'
import { Box, Typography } from '@mui/material'
import useMobileView from '../../utils/helper'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { LineChart } from '@mui/x-charts/LineChart';

/*
reusable line chart component
mui x-charts library used
*/
const LineChartComponent = (props) => {
    const chartData = [
        {
            data: props.lineChartData,
            color: props.lineChartColor,
        }
    ]
    const isMobileView = useMobileView();
    return (
        <CardContainer
            cardStyles={{}}
            cardContentStyles={{
                padding: !isMobileView ? "1rem" : "0",
                display: "flex",
                flexDirection: isMobileView ? "column" : "row",
                alignItems: "center",
                width: "100%",
                height: "130px",
            }}
        >
            <Box
                component="div"
                noValidate
                sx={{
                    mt: 1,
                    width: "50%", // Set 100% width in mobile view, 70% in web view
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography variant="h5">{props.title}</Typography>
                <Typography variant="h4">{props.value}</Typography>
                <Typography variant="body1" fontSize={11}><ArrowUpwardIcon fontSize='smaller' sx={{ color: '#5dc972' }} />{props.sinceYesterday}</Typography>
            </Box>
            <LineChart
                leftAxis={null}
                bottomAxis={null}
                series={chartData}
                width={500}
                height={300}
            />
        </CardContainer>
    )
}

export default LineChartComponent