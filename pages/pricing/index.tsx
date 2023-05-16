import { MainLayout } from '../../components/layouts/MainLayout'
import Link from 'next/link'
import styles from "../../components/layouts/MainLayout.module.css"

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1>
        Ir a <Link href={"/about"}>Home</Link>
      </h1>
      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/pricing</code>
      </p>
    </MainLayout>
  )
}
