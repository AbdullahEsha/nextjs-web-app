import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'
import { dataSet } from '../components/DataSet'
import { useRouter } from 'next/router'

export default function Home() {
  const [value, setValue] = useState(0)
  const IncrementValue = () => {
    if (value < 20) {
      setValue(value + 1)
    }
  }
  const DecrementValue = () => {
    if (value > 0) {
      setValue(value - 1)
    }
  }

  // const router = useRouter()
  // const { id } = router.query

  // console.log(id)

  return (
    <div className={styles.container}>
      <MainNav />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to everyone...</h1>
        <br />
        <div className="show-value">
          <button title="Increment" onClick={IncrementValue}>
            +
          </button>{' '}
          <span>{value}</span>{' '}
          <button title="Decrement" onClick={DecrementValue}>
            -
          </button>
        </div>

        <div className={styles.grid}>
          {dataSet.map((item) => (
            <>
              <Link
                href={{
                  pathname: `test`,
                  query: { id: item.id },
                }}
                key={item.id}
              >
                <a className={styles.card}>
                  <h2>{item.title} &rarr;</h2>
                  <p>{item.detail}</p>
                </a>
              </Link>
            </>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
