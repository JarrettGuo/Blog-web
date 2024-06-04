import React, { FC } from 'react'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { Segmented } from 'antd'
import ArticleSearch from '../../components/ArticleSearch'
import styles from './Categories.module.scss'

const Categories: FC = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>文章：20篇</div>
        <div className={styles.right}>
          <ArticleSearch />
        </div>
      </div>
      <div className={styles.content}>
        <Segmented
          options={[
            { label: 'List', value: 'List', icon: <BarsOutlined /> },
            { label: 'Kanban', value: 'Kanban', icon: <AppstoreOutlined /> },
          ]}
        />
      </div>
      <div className={styles.footer}>footer</div>
    </>
  )
}

export default Categories
