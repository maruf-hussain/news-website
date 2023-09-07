import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark,   FaEye,   FaRegStar,   FaShareAlt, FaStar  } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ cn }) => {
    const { _id, details, title,  author, image_url,total_view,rating } = cn;
    return (

        <Card className=" mb-4">
            <Card.Header className='d-flex align-items-center'>
            <Image style={{width:'60px', height:'60px', }} src={author?.img} roundedCircle />
            <div className='flex-grow-1 ps-2'>
                <h6>{author.name}</h6>
                <p><small>{moment(author.published_date).format("yyyy-mm-0d")}</small></p>
            </div>
            <div>
                <FaBookmark/> <FaShareAlt/>
            </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>   {details.length < 250 ? <>{details}</> :
                    <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>
                } </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">

            <div className='flex-grow-1 '>
            <Rating className='text-warning'
  placeholderRating={rating.number}
  readonly
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar/>}
  fullSymbol={<FaStar/>}
/>
                <span>{rating?.number}</span>
                </div>
            <div ><FaEye/> {total_view}</div>
          
            </Card.Footer>
        </Card>

    );
};

export default NewsCard;