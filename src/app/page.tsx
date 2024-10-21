import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import MainPicture from "./public/main.jpg";
import Section from "@/ui/Section/Section";
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}></div>

      <div className={styles.content}>
        <Section
          style={{
            height: "530px",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Welcome to Stadtgesundheit</h1>
          <p>
            Stadtgesundheit is a project born from a hackathon dedicated to
            environmental protection! On September 28th in Bielefeld, we
            participated in a hackathon focused on developing software solutions
            to help preserve nature by leveraging open data. Together with a
            team of passionate individuals, we created Stadtgesundheit – a
            platform that monitors and visualizes key environmental parameters
            of cities.
          </p>
          <p>
            Our mission is to track essential metrics like air quality, water
            quality, temperature, and greenery to promote a cleaner and safer
            urban environment for residents. By making this information
            accessible, we aim to raise awareness and empower communities to
            take action for a more sustainable future.
          </p>
        </Section>

        <Section className={styles.contributorsSection}>
          <h2>Contributors</h2>
          <div className={styles.contributors}>
            <div className={styles.contributor}>
              <p>Knut Perseke</p>
              <Link href='https://github.com/knutator2'>GitHub Profile</Link>
            </div>
            <div className={styles.contributor}>
              <p>Philip Kenneweg</p>
              <Link href='https://github.com/TheMody'>GitHub Profile</Link>
            </div>
            <div className={styles.contributor}>
              <p>Claudia Keuss</p>
            </div>
            <div className={styles.contributor}>
              <p>Illia Chornyi</p>
              <Link href='https://github.com/Black1955'>GitHub Profile</Link>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
