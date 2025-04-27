import React from 'react'
import styles from './TopPaySection.module.scss'
import { TopPaySwiper } from './TopPaySwiper/TopPaySwiper'

const TOP_DATA = [
  {
    name: '1',
    img: '',
    href: '',
  },
  {
    name: '2',
    img: '',
    href: '',
  },
  {
    name: '3',
    img: '',
    href: '',
  },
  {
    name: '4',
    img: '',
    href: '',
  },
  {
    name: '5',
    img: '',
    href: '',
  },
]

export const TopPaySection = () => {
  return (
    <section className={styles.root}>
      <TopPaySwiper data={TOP_DATA} />
    </section>
  )
}
