import AbcIcon from "@mui/icons-material/Abc";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CachedIcon from "@mui/icons-material/Cached";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import React from "react";

const Header = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Grid container>
            <Grid
              item
              sx={{ mr: 1 }}
              gridTemplateColumns={"1fr fit-content(40%)"}
            >
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
          {auth && (
            <Box sx={{ flexGrow: 1 }}>
              <Button>Upgrade</Button>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                sx={{ color: "#000" }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} sx={{ color: "black" }}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
