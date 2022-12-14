import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WindowIcon from '@mui/icons-material/Window';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import ChairIcon from '@mui/icons-material/Chair';

export const mainListItems = (
    <React.Fragment>
        <a href='/admin/dashboard'> <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard"></ListItemText>
        </ListItemButton></a>
        <ListItemButton>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Đơn hàng" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Khách hàng" />
        </ListItemButton>
        <a href="/admin/category"> <ListItemButton>
            <ListItemIcon>
                <WindowIcon />
            </ListItemIcon>
            <ListItemText primary="Danh mục" />
        </ListItemButton></a>
        <a href="/admin/subcategory"><ListItemButton>
            <ListItemIcon>
                <SubdirectoryArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="Tiểu mục" />
        </ListItemButton></a>
        <ListItemButton>
            <ListItemIcon>
                <ChairIcon />
            </ListItemIcon>
            <ListItemText primary="Sản phẩm" />
        </ListItemButton>
    </React.Fragment>
);