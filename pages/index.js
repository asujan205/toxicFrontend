import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import InputBox from "../components/inputbox";
import OutputBox from "../components/outputbox";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  return (
    <>
      <div className="flex flex-row   flex-wrap justify-evenly min-h-screen py-2 w-full ">
        <InputBox />

        <OutputBox />
      </div>
    </>
  );
}
