import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { OrderSuccessChart } from "../../pages/Dashboard/OrderSuccessChart";
import { RevenueAndOrderChart } from "../../pages/Dashboard/RevenueAndOrderChart";
import { NumOfProductSale } from "./NumOfProductSale";
import { OrderAndRevenueOfAllTime } from "./OrderAndRevenueOfAllTime";

export const RevenueReport = () => {
  const [timeFilter, setTimeFilter] = useState(1);

  return (
    <Grid style={{ paddingLeft: 30, paddingBottom: 30 }} container spacing={3}>
      <Grid item xs={12} lg={8}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 450,
            width: 900,
          }}
        >
          <OrderAndRevenueOfAllTime />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Paper
          sx={{
            p: 5,
            display: "flex",
            flexDirection: "column",
            height: 450,
          }}
        >
          Tỉ lệ đặt đơn
          <OrderSuccessChart />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={7}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 600,
            width: 900,
          }}
        >
          <FormControl>
            <InputLabel id="demo-simple-select-label">Thời gian</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Thời gian"
              defaultValue={1}
              onChange={(e) => setTimeFilter(e.target.value)}
            >
              <MenuItem value={1}>Tuần</MenuItem>
              <MenuItem value={2}>Tháng</MenuItem>
              <MenuItem value={3}>Năm</MenuItem>
            </Select>
          </FormControl>
          <RevenueAndOrderChart timeFilter={timeFilter} />
        </Paper>
      </Grid>

      <Grid item xs={12} md={8} lg={5}>
        <Paper
          sx={{
            p: 5,
            display: "flex",
            flexDirection: "column",
            height: 600,
          }}
        >
          <Typography textAlign="center">Số sản phẩm được bán</Typography>
          <NumOfProductSale />
        </Paper>
      </Grid>
    </Grid>
  );
};
