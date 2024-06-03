import React, { FC } from 'react'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'
import UserAvatar from './UserAvatar'

const UserInfo: FC = () => {
  return (
    <Card
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <UserAvatar />
      <Meta title="Card title" description="This is the description" />
    </Card>
  )
}

export default UserInfo
