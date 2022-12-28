import { Container, Grid, Paper } from "@mui/material";
import * as React from "react";
import { OrderSuccessChart } from "./OrderSuccessChart";
import { RevenueAndOrderChart } from "./RevenueAndOrderChart";

export default function DashBoardMain() {
  document.title = `Dashboard - Ununin Sofa`;
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 450,
              }}
            >
              <RevenueAndOrderChart timeFilter={1} />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >
              Tỉ lệ đặt đơn
              <OrderSuccessChart />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              Recent orders
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
