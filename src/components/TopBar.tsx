import React, { FC, useState } from 'react'
import type { MenuProps } from 'antd'
import { AppstoreOutlined, FileTextOutlined, HomeOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Logo from './Logo'
import styles from './TopBar.module.scss'

type MenuItem = Required<MenuProps>['items'][number]
const items: MenuItem[] = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Categories',
    key: 'categories',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Article',
    key: 'article',
    icon: <FileTextOutlined />,
  },
]

const TopBar: FC = () => {
  const [current, setCurrent] = useState('home') // 默认选择项设为 'home'
  const handleClick: MenuProps['onClick'] = e => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.main}>
          <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
        <div className={styles.right}>right</div>
      </div>
    </div>
  )
}

export default TopBar
