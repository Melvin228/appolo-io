import AbcIcon from "@mui/icons-material/Abc";
import CachedIcon from "@mui/icons-material/Cached";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import React from "react";

const Header = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar
          sx={{ backgroundColor: "#fff", boxShadow: " 0 1px 0.1px 0.2px" }}
        >
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AbcIcon />
          </IconButton>
          <Grid container sx={{ maxWidth: "620px" }}>
            <Grid item sx={{ mr: 1 }}>
              <Button
                variant="outlined"
                sx={{
                  border: 0,
                  color: "#000",
                  "&:hover": { backgroundColor: "#f8f9fb", border: 0 },
                }}
                startIcon={<HomeIcon />}
              >
                Home
              </Button>
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <Button
                variant="outlined"
                sx={{
                  border: 0,
                  color: "#000",
                  "&:hover": { backgroundColor: "#f8f9fb", border: 0 },
                }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <Button
                variant="outlined"
                sx={{
                  border: 0,
                  color: "#000",
                  "&:hover": { backgroundColor: "#f8f9fb", border: 0 },
                }}
                startIcon={<SendIcon />}
              >
                Engage
              </Button>
            </Grid>
            <Grid item sx={{ mr: 1 }}>
              <Button
                variant="outlined"
                sx={{
                  border: 0,
                  color: "#000",
                  "&:hover": { backgroundColor: "#f8f9fb", border: 0 },
                }}
                startIcon={<CachedIcon />}
              >
                Enrich
              </Button>
            </Grid>
          </Grid>

          <Box
            sx={{ flexGrow: 1, justifyContent: "flex-end", display: "flex" }}
          >
            <Button variant="contained" sx={{ mr: 2 }}>
              Upgrade
            </Button>
            <TextField
              sx={{ mr: 1 }}
              hiddenLabel
              id="filled-hidden-label-small"
              defaultValue="Small"
              variant="filled"
              size="small"
              InputProps={{
                startAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
            <IconButton>
              <LocalPhoneIcon />
            </IconButton>
            <IconButton>
              <HelpOutlineOutlinedIcon />
            </IconButton>
            <IconButton>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton sx={{ mr: 1 }}>
              <SettingsOutlinedIcon />
            </IconButton>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 5.0,
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
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
