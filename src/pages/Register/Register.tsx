import React, { FC } from 'react'
import { Typography, Space, Form, Input, Button } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styles from './Register.module.scss'

const { Title } = Typography

const Register: FC = () => {
  // 用于提交表单
  interface FormValues {
    username: string
    password: string
    confirmPassword: string
    nickname: string
  }

  const onFinish = (values: FormValues) => {
    console.log('Received values:', values)
  }
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>Register</Title>
        </Space>
      </div>
      <div>
        <Form labelCol={{ span: 10 }} wrapperCol={{ span: 16 }} onFinish={onFinish}>
          <Form.Item label="User Name" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Confirm Password" name="confirmPassword">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Nick Name" name="nickname">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
              <Link to="/login">Login Now</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Register
