import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import InventoryIcon from '@mui/icons-material/Inventory';
import BadgeIcon from '@mui/icons-material/Badge';
import { Link, useLocation } from "react-router-dom";
import React from 'react'
const drawerWidth = 240;

interface Props {
  window?: () => Window;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

interface NavigationMenu {
  title: string;
  path: string;
  icon: JSX.Element | undefined;
}

const Sidebar: React.FC<Props> = (props) => {
  const { window, mobileOpen, handleDrawerToggle } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  const location = useLocation();

  const navigationMenu: NavigationMenu[] = [
    {
      title: 'About',
      path: '/about',
      icon: <InfoIcon />,
    },
    {
      title: 'Experience',
      path: '/experience',
      icon: <InventoryIcon />,
    },
    {
      title: 'Education',
      path: '/education',
      icon: <SchoolIcon />,
    },
    {
      title: 'Certification',
      path: '/certification',
      icon: <BadgeIcon />,
    },
  ]

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {navigationMenu.map((menu, index) => (
          <Link key={menu.path} to={menu.path}>
            <ListItem disablePadding className={`${location.pathname === menu.path ? 'bg-slate-100' : ''}`}>
              <ListItemButton>
                <ListItemIcon>
                  {menu?.icon}
                </ListItemIcon>
                <ListItemText primary={menu.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      // sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      sx={{
        width: { sm: drawerWidth },
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        PaperProps={{
          sx: {
            // backgroundColor: "#050A30"
          }
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        PaperProps={{
          sx: {
            // backgroundColor: "#050A30"
          }
        }}
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
