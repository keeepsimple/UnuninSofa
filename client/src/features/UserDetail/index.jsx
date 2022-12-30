import { Box, Paper, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ChangeInfomation } from "./ChangeInfomation";
import { ChangePassword } from "./ChangePassword";
import { OrderHistory } from "./OrderHistory";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          component={Paper}
          sx={{
            p: 3,
            paddingRight: 5,
            paddingLeft: 5,
            width: 1000,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const UserDetailFreature = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigation = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigation("/");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 500,
        paddingTop: 5,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", paddingLeft: 30 }}
      >
        <Tab label="Thay đổi thông tin" {...a11yProps(0)} />
        <Tab label="Thay đổi mật khẩu" {...a11yProps(1)} />
        <Tab label="Lịch sử đơn hàng" {...a11yProps(2)} />
        <Tab label="Đăng xuất" onClick={handleLogout} {...a11yProps(3)} />
      </Tabs>
      <TabPanel
        style={{
          paddingLeft: 250,
        }}
        value={value}
        index={0}
      >
        <ChangeInfomation />
      </TabPanel>
      <TabPanel
        style={{
          paddingLeft: 250,
        }}
        value={value}
        index={1}
      >
        <ChangePassword />
      </TabPanel>
      <TabPanel
        style={{
          paddingLeft: 250,
        }}
        value={value}
        index={2}
      >
        <OrderHistory />
      </TabPanel>
    </Box>
  );
};
