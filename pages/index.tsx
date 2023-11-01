import Head from "next/head";
import Image from "next/image";
import Education from "../components/Education";
// import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Project from "../components/Project";
import SkillSet from "../components/SkillSet";
import WorkExp from "../components/WorkExp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ben Cheng</title>
      </Head>

      <main>
        <Header />
        <SkillSet />
        <WorkExp />
        <Education />
      </main>
    </div>
  );
}
