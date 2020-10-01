import {Link} from 'react-router-dom'
import React from 'react'

const ArticlesList = ({articles}) => (
    <>
    {articles.map(article => (
        <Link className="article-list-item" key={article.name} to={`/article/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
    ))}
    </>
);

export default ArticlesList;