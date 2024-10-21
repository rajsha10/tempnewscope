import React from 'react';
import { Link } from 'react-router-dom';
import './newsTiles.css';

const NewsTiles = ({ articles, topRead }) => {


    return (
        <div className="news-tiles-container">
            {/* News Tiles Section */}
            <div className="news-tiles">
                {articles.map((article) => (
                    <div key={article._id} className="news-tile">
                        <Link to={`/article/${article._id}`} style={{ textDecoration: 'none' }}>
                            <img src={article.thumbnail} alt={article.title} className="tile-thumbnail" />
                            <h3 className="tile-title">{article.title}</h3>
                            <p className="tile-description">{article.description.substring(0, 100)}...</p>
                            <div className="tile-author-date">
                                <p className="tile-author">{article.author.name}</p>
                                <p className="tile-date">{formatDate(article.createdAt)}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Top Read News Section */}
            <div className="top-read">
                <h3>Top Read</h3>
                <ul>
                    {topRead
                        .slice(0, 10)
                        .map((article) => (
                            <li key={article._id} className="top-read-item">
                                <img src={article.thumbnail} alt={article.title} className="top-read-thumbnail" />
                                <p className="top-read-description">
                                    {article.description.substring(0, 100)}...
                                </p>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export default NewsTiles;
