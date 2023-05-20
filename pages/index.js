import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import InputBox from "../components/inputbox.js";
import OutputBox from "../components/outputbox.js";
import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RominputBox from "../components/romanizedbox";

export default function Home() {
  const [comment, setComments] = useState("");
  const [output, setOutput] = useState();
  const [disabled, setDisabled] = useState(false);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleInputChange = (e) => {
    setComments(e.target.value);
  };
  const handleComment = () => {
    setDisabled(true);
    console.log(comment);
    // Make the API call to the Flask server
    axios
      .post("http://localhost:5000/score-comment", { comment })
      .then((response) => {
        setOutput(response.data);

        // Handle the response data as needed
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors that occur during the API call
      })
      .finally(() => {
        setDisabled(false);
        // setLoading(false);
      });
  };
  const handleRomanizedComment = () => {
    setDisabled(true);
    console.log(comment);
    // Make the API call to the Flask server
    axios
      .post("http://localhost:5000/score-romanized-comment", { comment })
      .then((response) => {
        setOutput(response.data);

        // Handle the response data as needed
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors that occur during the API call
      })
      .finally(() => {
        setDisabled(false);
        // setLoading(false);
      });
  };

  console.log(output);
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center justify-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            Toxicity Analyzer
          </span>
        </div>
      </nav>
      <div className="flex flex-row   flex-wrap justify-evenly  py-2 w-full ">
        <Box sx={{ bgcolor: "background.paper", width: 600 }}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="English" {...a11yProps(0)} disabled={disabled} />
              <Tab label="Romanized" {...a11yProps(1)} disabled={disabled} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel
              value={value}
              index={0}
              dir={theme.direction}
              disabled={disabled}
            >
              <InputBox
                Comments={comment}
                handleComment={handleComment}
                handleInputChange={handleInputChange}
                disabled={disabled}
              />
            </TabPanel>
            <TabPanel
              value={value}
              index={1}
              dir={theme.direction}
              disabled={disabled}
            >
              <RominputBox
                Comments={comment}
                handleComment={handleRomanizedComment}
                handleInputChange={handleInputChange}
                disabled={disabled}
              />
            </TabPanel>
          </SwipeableViews>
        </Box>
        {/* <InputBox
          Comments={comment}
          handleComment={handleComment}
          handleInputChange={handleInputChange}
          disabled={disabled}
        /> */}

        {output && <OutputBox data={output} />}
      </div>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
