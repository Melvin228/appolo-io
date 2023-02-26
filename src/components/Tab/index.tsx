import React from 'react'
import { Box, Tabs, Tab, Typography } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

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

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
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
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="People" {...a11yProps(0)} icon={<PeopleIcon />} iconPosition="start" />
                    <Tab label="Companies" {...a11yProps(1)} icon={<BusinessIcon />} iconPosition="start" />
                    <Tab label="Lists" {...a11yProps(2)} icon={<FormatListBulletedIcon />} iconPosition="start" />
                    <Tab label="Saved Searches" {...a11yProps(3)} icon={<SavedSearchIcon />} iconPosition="start" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box sx={{ display: "flex" }}>
                    {children}
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                {children}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {children}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {children}
            </TabPanel>


        </>
    )
}

export default CustomTab;