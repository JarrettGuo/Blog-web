import React, { FC } from 'react'
import { Avatar, Typography, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Title } = Typography

const UserAvatar: FC = () => {
  return (
    <div>
      <Space direction="vertical" align="center" size={8}>
        <Avatar size={60} icon={<UserOutlined />} />
        <Title level={5}>User Name</Title>
      </Space>
    </div>
  )
}

export default UserAvatar
