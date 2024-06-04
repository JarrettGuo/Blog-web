import React, { FC } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Menu, Typography, Card } from 'antd'
import UserInfo from '../components/UserInfo'
import styles from './ShowLayout.module.scss'

const { Title } = Typography
const ShowLayout: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.header}>
          <UserInfo />
        </div>
        <div className={styles.middle}>
          <Card title="📢 Announcements" bordered={false}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <Menu className={styles.footer}>
          <Menu.Item
            key="About"
            className={styles.item}
            onClick={() => navigate('/show/about')}
            //当路径为/show/about时，按钮高亮
            style={{ background: location.pathname === '/show/about' ? '#1890ff' : '' }}
          >
            <Title level={5}>About</Title>
          </Menu.Item>
          <Menu.Item
            key="Home"
            className={styles.item}
            //当路径为/show/categories时，按钮高亮
            style={{ background: location.pathname === '/show/categories' ? '#1890ff' : '' }}
            onClick={() => navigate('/show/categories')}
          >
            <Title level={5}>Categories</Title>
          </Menu.Item>
          <Menu.Item
            key="Article"
            className={styles.item}
            onClick={() => navigate('/show/article')}
            //当路径为/show/article时，按钮高亮
            style={{ background: location.pathname === '/show/article' ? '#1890ff' : '' }}
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
