import React, { FC } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import UserAvatar from '../../components/UserAvatar'
import styles from './Home.module.scss'

const Home: FC = () => {
  const navigate = useNavigate()
  const handelClick = () => {
    navigate('/show/about')
  }
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <UserAvatar />
        <Button type="primary" onClick={handelClick}>
          Primary Button
        </Button>
        <Button type="primary" onClick={() => navigate('/login')}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Home
