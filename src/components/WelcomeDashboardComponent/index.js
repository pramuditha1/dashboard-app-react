import React from "react";
import { CardContainer } from "../UI/Card";
import { Box, Typography } from "@mui/material";
import useMobileView from "../../utils/helper";
import { ImageComponent } from "../UI/Image";
import welcomeDashboard from "../../assets/images/welcome-dashboard.png";

const WelcomeDashboardComponent = (props) => {
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
          width: "45%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="body1" pt={2} fontSize={11}>
          {props.subTitle}
        </Typography>
      </Box>
      <Box
        component="div"
        noValidate
        sx={{
          mt: 1,
          width: "55%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ImageComponent
          width="90%"
          link={welcomeDashboard}
          type="img"
          styles={{ paddingLeft: "20px", width: "90%", height: "190px" }}
        />
      </Box>
    </CardContainer>
  );
};

export default WelcomeDashboardComponent;
