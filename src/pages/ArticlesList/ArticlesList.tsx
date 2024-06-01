import React, { FC } from 'react'
import { Empty } from 'antd'
import ArticelCard from '../../components/ArticelCard'

const Articles = [
  {
    _id: '1',
    title: 'Article 1',
    description: 'This is the description of article 1',
    contet: 'This is the body of article 1',
    img: 'https://via.placeholder.com/150',
    createdAt: '2024-01-01',
    isTop: true,
  },
  {
    _id: '2',
    title: 'Article 2',
    description: 'This is the description of article 2',
    contet: 'This is the body of article 2',
    img: 'https://via.placeholder.com/150',
    createdAt: '2024-01-02',
    isTop: false,
  },
  {
    _id: '3',
    title: 'Article 3',
    description: 'This is the description of article 3',
    contet: 'This is the body of article 3',
    img: 'https://via.placeholder.com/150',
    createdAt: '2024-01-03',
    isTop: false,
  },
  {
    _id: '4',
    title: 'Article 4',
    description: 'This is the description of article 4',
    contet: 'This is the body of article 4',
    img: 'https://via.placeholder.com/150',
    createdAt: '2024-01-04',
    isTop: true,
  },
]

const ArticlesList: FC = () => {
  return (
    <>
      <div>
        {Articles.length === 1 && <Empty description="There has no data." />}
        {Articles.length > 1 &&
          Articles.map(article => <ArticelCard key={article._id} {...article} />)}
      </div>
      <div></div>
    </>
  )
}

export default ArticlesList
