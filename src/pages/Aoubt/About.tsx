import React, { FC } from 'react'
import { Carousel } from 'antd'
import styles from './About.module.scss'

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const About: FC = () => {
  return (
    <div className={styles.container}>
      <Carousel arrows infinite style={{ width: '92vh' }} autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  )
}

export default About
