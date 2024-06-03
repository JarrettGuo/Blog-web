import React, { FC } from 'react'
import { Typography, Space } from 'antd'
import {
  EditOutlined,
  ToTopOutlined,
  SettingOutlined,
  CalendarOutlined,
  InboxOutlined,
} from '@ant-design/icons'
import styles from './ArticleCard.module.scss'

const { Title, Paragraph } = Typography
type ArticelCardProps = {
  _id: string
  title: string
  description: string
  img: string
  createdAt: string
  isTop: boolean
  type: string
}
const ArticelCard: FC<ArticelCardProps> = props => {
  const { title, description, img, createdAt, isTop, type } = props
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.right}>
        <Title level={3}>{title}</Title>
        <div>
          <Space>
            {isTop && <ToTopOutlined style={{ color: 'red' }} />}
            {isTop && '|'}
            <CalendarOutlined />
            {createdAt}
            |
            <EditOutlined />
            |
            <SettingOutlined />
            |
            <InboxOutlined />
            {type}
          </Space>
        </div>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  )
}

export default ArticelCard
