import React from 'react'
import styles from './TopPaySection.module.scss'
import { TopPaySwiper } from './TopPaySwiper/TopPaySwiper'

const TOP_DATA = [
  {
    name: '1',
    img: '/images/swiper/asasin.png',
    href: '/',
  },
  {
    name: '2',
    img: '/images/swiper/souls.png',
    href: '/',
  },
  {
    name: '3',
    img: '/images/swiper/control.png',
    href: '/',
  },
  {
    name: '4',
    img: '/images/swiper/asasin.png',
    href: '/',
  },
  {
    name: '5',
    img: '/images/swiper/control.png',
    href: '/',
  },
]

export default async function TopPaySection() {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>
        Топ покупок:
      </h2>
      <TopPaySwiper data={TOP_DATA} />
    </section>
  )
}
