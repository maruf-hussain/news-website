import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';
import EditorInsigts from './EditorInsignts/EditorInsigts';

const News = () => {
    const news = useLoaderData();
    const { _id, details, title,  image_url, category_id } = news;

    return (
      <div>

<Card >
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}> <Button variant="danger"><FaArrowLeft/>  News In This Category</Button>
                </Link>
            </Card.Body>
        </Card>
        <EditorInsigts></EditorInsigts>
      </div>
    );
};

export default News;