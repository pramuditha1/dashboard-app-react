import React from 'react'
import { CardContainer } from '../UI/Card'
import { Box, Typography } from '@mui/material'
import { Line, LineChart, ResponsiveContainer } from 'recharts'
import useMobileView from '../../utils/helper'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const LineChartComponent = (props) => {
    const isMobileView = useMobileView(); // Using the custom hook here
    return (
        <CardContainer
            cardStyles={{
                width: "100%",
                maxWidth: "300px",
                marginTop: "30px",
            }}
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
                <Typography variant="body1" fontSize={11}><ArrowUpwardIcon fontSize='smaller' sx={{color:'#5dc972'}}/>{props.sinceYesterday}</Typography>
            </Box>

            {/* Right Section */}
            <ResponsiveContainer width="45%" height="50%">
                <LineChart width={300} height={100} data={props.chartData}>
                    <Line type={props.chartType} dataKey={props.dataKey} stroke={props.chartColor} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </CardContainer>
    )
}

export default LineChartComponent