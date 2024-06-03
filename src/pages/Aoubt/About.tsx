import React, { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './About.module.scss'

const About: FC = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div className={styles.imageContainer}>
          <img src="/images/bcg.GIF" alt="Image 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/bcg.GIF" alt="Image 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/bcg.GIF" alt="Image 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  )
}

export default About
