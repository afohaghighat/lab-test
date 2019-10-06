import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import LineChart from '../components/lineChart';
import AreaChart from '../components/areaChart';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function FullWidthTabs({ data, chartWidth, chartHeight }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab label='Series 1' {...a11yProps(0)} />
          <Tab label='Series 2' {...a11yProps(1)} />
          <Tab label='Series 3' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Paper>
            <Grid>{data[0] && <LineChart data={data[0].data} width={chartWidth} height={chartHeight} />}</Grid>
            <Grid>{data[0] && <AreaChart data={data[0].signal} width={chartWidth} height={chartHeight} />}</Grid>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Paper>
            {data[1] && <LineChart data={data[1].data} width={chartWidth} height={chartHeight} />}
            {data[1] && <AreaChart data={data[1].signal} width={chartWidth} height={chartHeight} />}
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Paper>
            {data[2] && <LineChart data={data[2].data} width={chartWidth} height={chartHeight} />}
            {data[2] && <AreaChart data={data[2].signal} width={chartWidth} height={chartHeight} />}
          </Paper>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
