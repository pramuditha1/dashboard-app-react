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
          width: { xs: "90%", sm: "45%" },
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
          width: { xs: "90%", sm: "55%" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ImageComponent
          link={welcomeDashboard}
          type="img"
          styles={{
            paddingLeft: { xs: "0px", sm: "20px" },
            width: { xs: "auto", sm: "90%" },
            height: "190px",
          }}
        />
      </Box>
    </CardContainer>
  );
};

export default WelcomeDashboardComponent;
