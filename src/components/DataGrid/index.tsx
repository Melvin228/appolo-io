import AddIcon from "@mui/icons-material/Add";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import FacebookIcon from "@mui/icons-material/Facebook";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import SendIcon from "@mui/icons-material/Send";
import SortIcon from "@mui/icons-material/Sort";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import {
  DataGrid as MUIDataGrid,
  GridColDef,
  GridRowsProp,
} from "@mui/x-data-grid";
import React, { useState } from "react";
import { enumTabValue } from "../../data/enum/enumTabValue";
import { a11yProps } from "../../services/utils/tabFunction";

const currencyFormatter = Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});

const ActionButton = ({ params, onClick }) => {
  const [isChange, setIsChange] = useState(false);

  const handleClick = (e) => {
    setIsChange(!isChange);
    onClick(e);
  };
  return (
    <>
      {isChange ? (
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ border: "1px solid grey", borderRadius: "5px" }}
        >
          <IconButton onClick={handleClick} size="small">
            <AutoStoriesIcon />
          </IconButton>
          <IconButton onClick={handleClick} size="small">
            <SendIcon />
          </IconButton>
          <IconButton onClick={handleClick} size="small">
            <PlaylistAddIcon />
          </IconButton>
          <IconButton onClick={handleClick} size="small">
            <MoreHorizIcon />
          </IconButton>
        </Stack>
      ) : (
        <Button
          variant="outlined"
          onClick={handleClick}
          startIcon={<AddIcon />}
          sx={{ color: "#000", border: "1px solid grey" }}
        >
          Save
        </Button>
      )}
    </>
  );
};

const DataGridTab = () => {
  const [value, setValue] = React.useState(0);
  const [filter, setFilter] = React.useState<enumTabValue>(enumTabValue.total);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <Tab
        label="Total (9.4M)"
        {...a11yProps(0)}
        onClick={() => setFilter(enumTabValue.total)}
      />
      <Tab
        label="Net New(9.4M)"
        {...a11yProps(1)}
        onClick={() => setFilter(enumTabValue.net_new)}
      />
      <Tab
        label="Saved (6)"
        {...a11yProps(2)}
        onClick={() => setFilter(enumTabValue.saved)}
      />
    </Tabs>
  );
};

const DataGridFilters = () => {
  return (
    <Box
      sx={{ borderBottom: 1, borderColor: "divider", mb: 1, display: "flex" }}
    >
      <Box sx={{ mt: 1 }}>
        <Button
          startIcon={<KeyboardArrowLeftIcon />}
          endIcon={<SortIcon />}
          variant="outlined"
          size="small"
          sx={{
            color: "#939aa5",
            border: "1px solid #939aa5",
          }}
        />
      </Box>
      <DataGridTab />
    </Box>
  );
};

const DataGridActionButtons = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
      <Button
        startIcon={<AddIcon />}
        variant="outlined"
        sx={{
          color: "#939aa5",
          backgroundColor: "#fff",
          border: "1px solid #939aa5",
        }}
      >
        Save
      </Button>
      <Button
        startIcon={<PersonSearchIcon />}
        variant="outlined"
        sx={{
          color: "#939aa5",
          backgroundColor: "#fff",
          border: "1px solid #939aa5",
        }}
      >
        {" "}
        Find People
      </Button>
      <Button
        startIcon={<FormatListBulletedIcon />}
        variant="outlined"
        sx={{
          color: "#939aa5",
          backgroundColor: "#fff",
          border: "1px solid #939aa5",
        }}
      >
        {" "}
        Lists
      </Button>
      <Button
        startIcon={<DownloadIcon />}
        variant="outlined"
        sx={{
          color: "#939aa5",
          backgroundColor: "#fff",
          border: "1px solid #939aa5",
        }}
      >
        {" "}
        Export
      </Button>
      <Button
        startIcon={<EditIcon />}
        variant="outlined"
        sx={{
          color: "#939aa5",
          backgroundColor: "#fff",
          border: "1px solid #939aa5",
        }}
      >
        {" "}
        Edit
      </Button>
      <IconButton
        sx={{
          color: "#939aa5",
          backgroundColor: "#fff",
          border: "1px solid #939aa5",
          borderRadius: "4px",
        }}
      >
        <MoreHorizIcon />
      </IconButton>
    </Stack>
  );
};

const renderCompanyDetails = (params) => (
  <Grid container>
    <Grid item lg={2}>
      <img
        src={"https://static.thenounproject.com/png/4488972-200.png"}
        alt="meta"
        width="40"
        height="40"
      />
    </Grid>
    <Grid item lg={10}>
      <Typography variant="subtitle2" sx={{ color: "#1896f4" }}>
        <b>{params.value}</b>
      </Typography>
      <IconButton size="small">
        <LinkIcon />
      </IconButton>
      <IconButton size="small">
        <LinkedInIcon />
      </IconButton>
      <IconButton size="small">
        <FacebookIcon />
      </IconButton>
      <IconButton size="small">
        <TwitterIcon />
      </IconButton>
    </Grid>
  </Grid>
);

const renderActionButton = (params) => {
  const onClick = (e) => {
    e.stopPropagation();
  };
  return (
    <ActionButton
      params={params}
      onClick={(e) => {
        onClick(e);
      }}
    />
  );
};

const DataGrid = () => {
  const rows: GridRowsProp = [
    {
      id: 1,
      company: "Tata Consultancy Services",
      employees: `${currencyFormatter.format(43000)}`,
      industry: "Information Technology",
      keywords: "consulting, it services",
      companyLocation: "Mumbai, India",
    },
    {
      id: 2,
      company: "Cathay Pacific",
      employees: "22,000",
      industry: "Airlines/aviation",
      keywords: "airlines, airport lounge",
      companyLocation: "Hong Kong, Hong Kong",
    },
    {
      id: 3,
      company: "Infosys",
      employees: "306,000",
      industry: "Information Technology",
      keywords: "Information technology",
      companyLocation: "Bangaluru India",
    },
    {
      id: 4,
      company: "Wipro",
      employees: "296,000",
      industry: "Information Technology",
      keywords: "consulting, banking",
      companyLocation: "Bangaluru India",
    },
    {
      id: 5,
      company: "Fresher Jobs",
      employees: "55,000",
      industry: "Information Services",
      keywords: "job portal, recruiting",
      companyLocation: "Hyderabad, India",
    },
    {
      id: 6,
      company: "Wood",
      employees: "32,000",
      industry: "Oil & Energy",
      keywords: "engineering, project",
      companyLocation: "Hong Kong, Hong Kong",
    },
  ];
  const columns: GridColDef[] = [
    {
      field: "company",
      headerName: "Company",
      width: 300,
      renderCell: renderCompanyDetails,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      sortable: false,
      filterable: false,
      renderCell: renderActionButton,
    },
    { field: "employees", headerName: "#Employees", width: 150 },
    { field: "industry", headerName: "Industry", width: 150 },
    { field: "keywords", headerName: "Keywords", width: 150, sortable: false },
    {
      field: "companyLocation",
      headerName: "Company Location",
      width: 200,
      sortable: false,
    },
  ];

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <DataGridFilters />
        <DataGridActionButtons />
        <Box component="main" sx={{ flexGrow: 1, backgroundColor: "#fff" }}>
          <div style={{ height: 500, width: "100%" }}>
            <MUIDataGrid
              rows={rows}
              columns={columns}
              checkboxSelection
              rowHeight={65}
            />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default DataGrid;
