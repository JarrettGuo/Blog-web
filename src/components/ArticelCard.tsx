import React, { FC } from 'react'
import { Card, Typography } from 'antd'
import { EditOutlined, ToTopOutlined, SettingOutlined } from '@ant-design/icons'
import Meta from 'antd/es/card/Meta'

const { Title } = Typography
type ArticelCardProps = {
  _id: string
  title: string
  description: string
  img: string
  createdAt: string
  isTop: boolean
}
const ArticelCard: FC<ArticelCardProps> = props => {
  const { title, description, img, createdAt, isTop } = props
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={img} />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <ToTopOutlined key="top" disabled={!isTop} />,
        ]}
      >
        <Meta title={title} description={description} />
        <div>
          <Title level={5}>{createdAt}</Title>
        </div>
      </Card>
    </div>
  )
}

export default ArticelCard
