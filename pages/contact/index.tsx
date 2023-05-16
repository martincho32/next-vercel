import { MainLayout } from '../../components/layouts/MainLayout'
import Link from 'next/link'
import styles from "../../components/layouts/MainLayout.module.css";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1>
        {/* Ir a <a href="/about">About</a>  */}
        Ir a <Link href={"/about"}>Home</Link>
      </h1>
      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/contact</code>
      </p>
    </MainLayout>
  )
}
