import React, { use } from 'react';
import DigitalCard from './DigitalCard';

const DigitalTools = ({ fetchData,carts,setCarts }) => {
    const toolsInfo = use(fetchData);
  
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-9 my-7' >
            {
                toolsInfo.map((tools, index) => <DigitalCard setCarts={setCarts} carts={carts} tools={tools} key={index} ></DigitalCard>)
            }
        </div>
    );
};

export default DigitalTools;