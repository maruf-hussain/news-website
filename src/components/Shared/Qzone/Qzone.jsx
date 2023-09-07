import React from 'react';
import qZone1 from '../../../image/qZone1.png'
import qZone2 from '../../../image/qZone2.png'
import qZone3 from '../../../image/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-light text-center py-4 my-4'>
           <h4>Q-Zone</h4> 
           <img src={qZone1} alt=''/>
           <img src={qZone2} alt=''/>
           <img src={qZone3} alt=''/>
        </div>
    );
};

export default Qzone;