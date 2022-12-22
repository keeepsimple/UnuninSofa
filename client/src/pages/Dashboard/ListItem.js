import ChairIcon from '@mui/icons-material/Chair';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import OpacityIcon from '@mui/icons-material/Opacity';
import PeopleIcon from '@mui/icons-material/People';
import PhotoIcon from '@mui/icons-material/Photo';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import WindowIcon from '@mui/icons-material/Window';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

export const mainListItems = (
    <React.Fragment>
        <a href='/'> <ListItemButton>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Trang chủ"></ListItemText>
        </ListItemButton></a>
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
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
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
        <a href="/admin/product"><ListItemButton>
            <ListItemIcon>
                <ChairIcon />
            </ListItemIcon>
            <ListItemText primary="Sản phẩm" />
        </ListItemButton></a>
        <a href="/admin/slider"><ListItemButton>
            <ListItemIcon>
                <PhotoIcon />
            </ListItemIcon>
            <ListItemText primary="Slider" />
        </ListItemButton></a>
        <a href="/admin/material"><ListItemButton>
            <ListItemIcon>
                <OpacityIcon />
            </ListItemIcon>
            <ListItemText primary="Chất liệu" />
        </ListItemButton></a>
        <a href="/admin/color"><ListItemButton>
            <ListItemIcon>
                <ColorLensIcon />
            </ListItemIcon>
            <ListItemText primary="Màu" />
        </ListItemButton></a>
    </React.Fragment>
);