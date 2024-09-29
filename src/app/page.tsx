import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className='container'>
        <section className='hero'>
          <h1>Stadtgesundheit</h1>
          <p>
            A project focused on monitoring the city's environmental parameters,
            including air quality, temperature, and water quality. Our mission
            is to promote a cleaner and safer environment for residents.
          </p>
          <Link href='/city/Bielefeld'>
            <div className='button'>Learn More</div>
          </Link>
        </section>

        <section className='creators'>
          <h2>Creators</h2>
          <div className='team'>
            <div className='team-member'>
              <p>First Last Name</p>
              <a
                href='https://www.linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
              <a
                href='https://www.github.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>
      </div>
    </div>
  );
}
