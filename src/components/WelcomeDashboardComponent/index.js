import React from 'react'
import { CardContainer } from '../UI/Card'
import { Box, Typography } from '@mui/material'
import { Line, LineChart, ResponsiveContainer } from 'recharts'
import useMobileView from '../../utils/helper'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ImageComponent } from '../UI/Image'
import welcomeDashboard from '../../assets/images/welcome-dashboard.png';

const WelcomeDashboardComponent = (props) => {
    const isMobileView = useMobileView(); // Using the custom hook here
    return (
        <CardContainer
            cardStyles={{
                width: "100%",
                maxWidth: "auto",
                backgroundColor: "#45edc8",
                // marginTop: "30px",
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
                    width: "45%", // Set 100% width in mobile view, 70% in web view
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography variant="h5">{props.title}</Typography>
                <Typography variant="body1" pt={2} fontSize={11}>{props.subTitle}</Typography>
            </Box>

            {/* Right Section */}
            <Box
                component="div"
                noValidate
                sx={{
                    mt: 1,
                    width: "55%", // Set 100% width in mobile view, 70% in web view
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <ImageComponent
                    width="90%"
                    link={welcomeDashboard}
                    type="img"
                    styles={{ paddingLeft: '20px', width: '90%' }}
                />
            </Box>
        </CardContainer>
    )
}

export default WelcomeDashboardComponent