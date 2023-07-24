import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

interface HeaderProps {
  drawerWidth: number;
  handleDrawerToggle: () => void;
}

const Header = (props: HeaderProps) => {
  const { handleDrawerToggle } = props;
  // const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.user.userData);

  // const handleLogout = () => {
  //   logout({
  //     logoutParams: {
  //       returnTo: window.location.origin,
  //     },
  //   });
  // };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      // sx={{
      //   width: { sm: `calc(100% - ${drawerWidth}px)` },
      //   ml: { sm: `${drawerWidth}px` },
      // }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <div className="flex w-full justify-between items-center">
          <Typography variant="h6" noWrap component="div">
            Miftakhus Salam
          </Typography>
          <div className="flex items-center justify-center">
            <Typography>{user?.values?.nickname}</Typography>
            <Tooltip title="Logout">
              <IconButton onClick={handleClick} color="inherit">
                {/* <AccountCircleIcon fontSize="large" /> */}
                <Avatar src={user?.values?.picture || ""} />
              </IconButton>
            </Tooltip>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
