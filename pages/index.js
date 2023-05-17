import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import InputBox from "../components/inputbox";
import OutputBox from "../components/outputbox";

export default function Home() {
  return (
    <div>
      <InputBox />
      <OutputBox />
    </div>
  );
}
