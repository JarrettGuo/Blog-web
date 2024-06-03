import React, { FC } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Menu, Typography } from 'antd'
import UserInfo from '../components/UserInfo'
import styles from './ShowLayout.module.scss'

const { Title } = Typography
const ShowLayout: FC = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.header}>
          <UserInfo />
        </div>
        <Menu className={styles.footer}>
          <Menu.Item key="About" className={styles.item} onClick={() => navigate('/show/about')}>
            <Title level={5}>About</Title>
          </Menu.Item>
          <Menu.Item key="Home" className={styles.item}>
            <Title level={5}>Home</Title>
          </Menu.Item>
          <Menu.Item
            key="Article"
            className={styles.item}
            onClick={() => navigate('/show/article')}
          >
            <Title level={5}>Article</Title>
          </Menu.Item>
        </Menu>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default ShowLayout
