import AssessmentIcon from "@mui/icons-material/Assessment";
import BusinessIcon from "@mui/icons-material/Business";
import CircleChecked from "@mui/icons-material/CheckCircleOutline";
import CircleIcon from "@mui/icons-material/Circle";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FactoryIcon from "@mui/icons-material/Factory";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import StarBorder from "@mui/icons-material/StarBorder";
import {
  Autocomplete,
  Checkbox,
  Chip,
  Collapse,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

const drawerWidth = 320;

interface collapsedComponentProps {
  openList: boolean;
}
const CollapsedComponent = ({ openList }: collapsedComponentProps) => {
  return (
    <Collapse in={openList} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>

          <ListItemText primary="Starred" />
        </ListItemButton>
      </List>
    </Collapse>
  );
};

const FilteredCompanyBox = ({ openList }: collapsedComponentProps) => {
  return (
    <Collapse in={openList} timeout="auto" unmountOnExit>
      <Box sx={{ border: "1px solid #1896f4", height: "300px" }}>
        <Stack sx={{ padding: 2 }} alignItems="center" direction="row">
          <CircleIcon sx={{ color: "#1896f4", fontSize: "10px", mr: 1 }} />
          <Typography color={"#1896f4"} sx={{ fontWeight: "bold", mr: 2 }}>
            Account HQ Location
          </Typography>

          <Chip label="X 1" variant="outlined" />
        </Stack>
        <Grid container justifyContent="center">
          <Grid item lg={10}>
            <InnerBox />
          </Grid>
        </Grid>
      </Box>
    </Collapse>
  );
};

const InnerBox = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const topCitiesNStates = [
    { city: "Petaling Jaya", state: "Selangor" },
    { city: "Bandar Utama", state: "Selangor" },
    { city: "Bangar", state: "Kuala Lumpur" },
    { city: "Cyberjaya", state: "Putrajaya" },
    { city: "Kepong", state: "Kuala Lumpur" },
    { city: "Kampar", state: "Perak" },
  ];

  return (
    <Box
      sx={{
        border: "1px solid #1896f4",
        borderRadius: "5%",
        height: "200px",
        p: 1,
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleChecked />}
            checked={isChecked}
            onChange={handleChange}
          />
        }
        label="Region"
      />
      {isChecked ? (
        <>
          <Autocomplete
            multiple
            id="tags-standard"
            options={topCitiesNStates}
            getOptionLabel={(option) => option.city}
            defaultValue={[topCitiesNStates[3]]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label=" Cities/State/Country/Zip"
              />
            )}
          />

          <Stack sx={{ padding: 1, mt: 2 }} alignItems="center" direction="row">
            <Typography color={"#1896f4"} sx={{ fontWeight: "bold", mr: 2 }}>
              Exclude Locations
            </Typography>

            <ExpandMore sx={{ "&:hover": { transform: "scale(1.2)" } }} />
          </Stack>
        </>
      ) : null}
    </Box>
  );
};

interface SidebarProps {
  children?: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const [openList, setOpenList] = React.useState(false);
  const [openCompany, setOpenCompany] = React.useState(false);
  const [openEmployees, setOpenEmployees] = React.useState(false);
  const [openFactory, setOpenFactory] = React.useState(false);
  const [openBuy, setOpenBuy] = React.useState(false);

  const handleListClick = () => {
    setOpenList(!openList);
  };

  const handleCompanyClick = () => {
    setOpenCompany(!openCompany);
  };

  const handleEmployeesClick = () => {
    setOpenEmployees(!openEmployees);
  };

  const handleFactoryClick = () => {
    setOpenFactory(!openFactory);
  };

  const handleBuyClick = () => {
    setOpenBuy(!openBuy);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            top: 136,
            height: "calc(100% - 136px)",
          },
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Divider />
        <Box sx={{ overflow: "auto" }}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleListClick}>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary="Lists" />
              {openList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <CollapsedComponent openList={openList} />
            <Divider />
            <ListItemButton onClick={handleCompanyClick}>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Company" />
              {openCompany ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <FilteredCompanyBox openList={openCompany} />
            <Divider />
            <ListItemButton onClick={handleEmployeesClick}>
              <ListItemIcon>
                <PeopleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="#Employees" />
              {openEmployees ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <CollapsedComponent openList={openEmployees} />
            <Divider />
            <ListItemButton onClick={handleFactoryClick}>
              <ListItemIcon>
                <FactoryIcon />
              </ListItemIcon>
              <ListItemText primary="Industry & Keywords" />
              {openFactory ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <CollapsedComponent openList={openFactory} />
            <Divider />
            <ListItemButton onClick={handleBuyClick}>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Buying Intent" />
              {openBuy ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <CollapsedComponent openList={openBuy} />
            <Divider />
          </List>
        </Box>
      </Drawer>
      {children}
    </>
  );
}
