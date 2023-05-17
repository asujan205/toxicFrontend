import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import InputBox from "../components/inputbox.js";
import OutputBox from "../components/outputbox.js";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [comment, setComments] = useState("");
  const [output, setOutput] = useState();
  const [disabled, setDisabled] = useState(false);
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
        <InputBox
          Comments={comment}
          handleComment={handleComment}
          handleInputChange={handleInputChange}
          disabled={disabled}
        />

        {output && <OutputBox data={output} />}
      </div>
    </>
  );
}
