import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import  styles from './ArticlesList.scss';

const ArticlesList = ({ dataSouce }) => (
  <List
    itemLayout="horizontal"
    bordered={false}
    dataSource={dataSouce}
    className={styles.list}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={<Link to={`/articles/${item.id}`}>{item.title}</Link>}
          description={item.des}
        />
      </List.Item>
    )}
  />
);

export default ArticlesList;
