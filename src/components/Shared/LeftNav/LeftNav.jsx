import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../image/1.png';
import second from '../../../image/3.png';
import third from '../../../image/2.png';


const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:7000/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    } ,[

    ])
    return (
        <div>
            <h3>All Categories</h3>
         <div className='ps-4'>
         {
            categories.map(category => <p 
            key={category.id} 
            ><Link to={`/category/${(category.id)}`} className='text-decoration-none text-black'>{category.name}</Link></p>)
          }
         </div>
         <Row xs={1}  className="g-4">
       
       <Col>
         <Card>
           <Card.Img variant="top" src={first} />
           <Card.Body>
             <Card.Title></Card.Title>
             <Card.Text>
              
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
       <Col>
         <Card>
           <Card.Img variant="top" src={second} />
           <Card.Body>
             <Card.Title>Card title</Card.Title>
             <Card.Text>
              
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
       <Col>
         <Card>
           <Card.Img variant="top" src={third} />
           <Card.Body>
             <Card.Title>Card title</Card.Title>
             <Card.Text>
              
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
   </Row>
        </div>
    );
};

export default LeftNav;