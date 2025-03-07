// src/app/page.tsx
import Head from 'next/head';
import Link from 'next/link';
import { FaProjectDiagram } from 'react-icons/fa';
import styles from './page.module.css';

export default function Home() {
  const projects = [
    { title: 'Authentication System', url: '/auth', description: 'A brief description of Project 1.' },
    { title: 'My Music API', url: '/project2', description: 'A brief description of Project 2.' },
    { title: 'Chat', url: '/project3', description: 'A brief description of Project 3.' },
    { title: 'CSV reader', url: '/project4', description: 'A brief description of Project 4.' },
    { title: 'Project 5', url: '/project5', description: 'A brief description of Project 5.' },
    { title: 'Project 6', url: '/project6', description: 'A brief description of Project 6.' },
  ];

  return (
    <>
      <Head>
        <title>My Portfolio API</title>
        <meta name="description" content="Showcasing my API development skills using Flask and Next.js with TypeScript" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to My Portfolio API</h1>
        <p>Explore my projects and see how I build APIs and front-end applications.</p>
        <div className={styles.gridContainer}>
          {projects.map((project, index) => (
            <Link key={index} href={project.url} className={styles.card}>
              <div className={styles.cardContent}>
                {/* Icon at the beginning */}
                <FaProjectDiagram className={styles.icon} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
