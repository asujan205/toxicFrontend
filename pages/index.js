import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import InputBox from "../components/inputbox";
import OutputBox from "../components/outputbox";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [comment, setComments] = useState("");
  const [output, setOutput] = useState();
  const handleInputChange = (e) => {
    setComments(e.target.value);
  };
  const handleComment = () => {
    console.log(comment);
    // Make the API call to the Flask server
    axios
      .post("http://localhost:5000/score-comment", { comment })
      .then((response) => {
        setOutput(response.data.result);

        // Handle the response data as needed
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors that occur during the API call
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  console.log(output);
  return (
    <>
      <div className="flex flex-row   flex-wrap justify-evenly min-h-screen py-2 w-full ">
        <InputBox
          Comments={comment}
          handleComment={handleComment}
          handleInputChange={handleInputChange}
        />
        {output && <OutputBox data={output} />}
        {/* <OutputBox data={output} /> */}
      </div>
    </>
  );
}
