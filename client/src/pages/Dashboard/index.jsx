import { Container, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { OrderSuccessChart } from "./OrderSuccessChart";
import { RevenueAndOrderChart } from "./RevenueAndOrderChart";
import dashboardApi from "../../api/DashboardApi";
import OrderTable from "../../features/OrderAdmin/OrderTable";

export default function DashBoardMain() {
  document.title = `Dashboard - Ununin Sofa`;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchNewest = async () => {
      const data = await dashboardApi.newestOrder();
      setOrders(data);
    };
    fetchNewest();
  }, []);

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={8}>
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
          <Grid item xs={12} md={4} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 450,
              }}
            >
              Tỉ lệ đặt đơn
              <OrderSuccessChart />
            </Paper>
          </Grid>
          {orders.length > 0 ? (
            <Grid item xs={12}>
              <Stack
                sx={{ p: 2, display: "flex", flexDirection: "column" }}
                spacing={3}
              >
                <Typography
                  textAlign="center"
                  style={{ fontWeight: 600, fontSize: 20 }}
                >
                  Đơn hàng mới
                </Typography>
                <OrderTable listOrder={orders} />
              </Stack>
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      </Container>
    </div>
  );
}
