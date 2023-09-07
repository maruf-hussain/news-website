import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            {id && <h2>This Category News: {categoryNews.length}</h2>}

            {
                categoryNews.map(cn => <NewsCard
                    key={cn._id}
                    cn={cn}

                ></NewsCard>)
            }
        </div>
    );
};

export default Category;