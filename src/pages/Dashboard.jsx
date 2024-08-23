import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import PortfolioChart from "../components/PortfolioChart";
import ActivityChart from "../components/ActivityChart";
import HistoryChart from "../components/HistoryChart";
import AllocationChart from "../components/AllocationChart";
import Strings from "../utils/strings";

const Dashboard = () => {

  let userDashboardData = useSelector(state => state.dashboard.userDashboardData);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" marginTop={2} gutterBottom>
        Welcome, Dikson
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6} className="flex items-center justify-center">
          <Paper elevation={3} className="p-4 bg-white h-full w-full flex flex-col">
            <Typography variant="h6" className="mb-4 text-center">
              {Strings.portfolioOverview}
            </Typography>
            <div className="h-72 flex items-center justify-center">
              <PortfolioChart data={userDashboardData} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} className="flex items-center justify-center">
          <Paper elevation={3} className="p-4 bg-white h-full w-full flex flex-col">
            <Typography variant="h6" className="mb-4 text-center">
              {Strings.recentActivity}
            </Typography>
            <div className="h-72 flex items-center justify-center">
              <ActivityChart data={userDashboardData} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} className="flex items-center justify-center">
          <Paper elevation={3} className="p-4 bg-white h-full w-full flex flex-col">
            <Typography variant="h6" className="mb-4 text-center">
              {Strings.assetAllocation}
            </Typography>
            <div className="h-72 flex items-center justify-center">
              <AllocationChart data={userDashboardData} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} className="flex items-center justify-center">
          <Paper elevation={3} className="p-4 bg-white h-full w-full flex flex-col">
            <Typography variant="h6" className="mb-4 text-center">
              {Strings.historicalPerformance}
            </Typography>
            <div className="h-72 flex items-center justify-center">
              <HistoryChart data={userDashboardData} />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;