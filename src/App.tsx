import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/education";
import Certification from "./pages/certification/certification";

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
    <Box sx={{ display: "flex" }}>
      <BrowserRouter>
        <Sidebar
          window={window}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <CssBaseline />
        <Header
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Routes>
          {/* <Route path='/home' element={<Content drawerWidth={drawerWidth}><HomePage /></Content>} /> */}
          <Route
            path="/about"
            element={
              <Content drawerWidth={drawerWidth}>
                <About />
              </Content>
            }
          />
          <Route
            path="/experience"
            element={
              <Content drawerWidth={drawerWidth}>
                <Experience />
              </Content>
            }
          />
          <Route
            path="/education"
            element={
              <Content drawerWidth={drawerWidth}>
                <Education />
              </Content>
            }
          />
          <Route
            path="/certification"
            element={
              <Content drawerWidth={drawerWidth}>
                <Certification />
              </Content>
            }
          />
          <Route path="/" element={<Navigate to="/about" replace />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
