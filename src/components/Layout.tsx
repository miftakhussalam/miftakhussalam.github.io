import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from './Sidebar';
import Header from './Header';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
// import HomePage from './home/Home';

const drawerWidth: number = 240;

interface Props {
  window?: () => Window;
}

export default function App(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <BrowserRouter>
        <Sidebar window={window} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <CssBaseline />
        <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
        <Routes>
          <Route index element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </Box >
  );
}
