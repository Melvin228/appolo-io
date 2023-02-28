import BusinessIcon from "@mui/icons-material/Business";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PeopleIcon from "@mui/icons-material/People";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import { Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React from "react";
import { a11yProps } from "../../services/utils/tabFunction";
import ExampleText from "../ExampleText";
import Sidebar from "../Sidebar";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

interface CustomTabProps {
  children: React.ReactNode;
}

const CustomTab = ({ children }: CustomTabProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Toolbar />
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="People"
            {...a11yProps(0)}
            icon={<PeopleIcon />}
            iconPosition="start"
          />
          <Tab
            label="Companies"
            {...a11yProps(1)}
            icon={<BusinessIcon />}
            iconPosition="start"
          />
          <Tab
            label="Lists"
            {...a11yProps(2)}
            icon={<FormatListBulletedIcon />}
            iconPosition="start"
          />
          <Tab
            label="Saved Searches"
            {...a11yProps(3)}
            icon={<SavedSearchIcon />}
            iconPosition="start"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ display: "flex" }}>{children}</Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ display: "flex" }}>
          <Sidebar>
            <ExampleText />
          </Sidebar>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ display: "flex" }}>
          <Sidebar>
            <ExampleText />
          </Sidebar>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box sx={{ display: "flex" }}>
          <Sidebar>
            <ExampleText />
          </Sidebar>
        </Box>
      </TabPanel>
    </>
  );
};

export default CustomTab;
