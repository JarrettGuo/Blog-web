import React, { FC, useEffect } from 'react'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import { Input } from 'antd'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

const { Search } = Input

const ArticleSearch: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [value, setValue] = useState('')
  function handleSearch(value: string) {
    // 跳转到当前页面并带上搜索参数
    navigate({
      pathname: pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    })
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue((event.target as HTMLInputElement).value)
  }
  //获取URL参数,并设置到value
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const curValue = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setValue(curValue)
  }, [searchParams])

  return (
    <Search
      placeholder="input search text"
      value={value}
      allowClear
      size="large"
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: 300 }}
    />
  )
}

export default ArticleSearch
