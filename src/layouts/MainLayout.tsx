import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import TopBar from '../components/TopBar'
import styles from './MainLayout.module.scss'

const { Header, Footer, Content } = Layout

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <TopBar />{' '}
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>Blog &copy;2024 - present. Created by Jarrett</Footer>
    </Layout>
  )
}

export default MainLayout
