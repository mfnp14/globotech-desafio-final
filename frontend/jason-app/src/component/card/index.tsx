import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {BsFillCaretDownFill } from 'react-icons/bs';
import {Containerteste} from './styles'

interface AccordeonProductsProps {
    name?: string;
    image?: string;
    description?: string;
    price?: number;
    extras?: string[]
}


const Accordeon:React.FC<AccordeonProductsProps>=({name,image,description,price,extras})=>{
    const [data, setData]=useState([{
        name: "Claudia",
        description: "lorem ipsum",
        price: 5,
      },
      {
         name: "tata",
        description: "lorem ipsum",
        price: 10,
      }],)
    // const [clicked, setClicked] = useState{"0"}
    // const handleToggle = (index: any) => {
    //     if (clicked === index) {
    //      return setClicked("0");
    //     }
    //     setClicked(index);
    //    };  
     return(
    <Containerteste>
        {/* {name}
        {image}
        {description}
        {price}
        {extras} */}

        {data.map((item) => (
        <AccordionItem
        onToggle={() => handleToggle(index)}>
         {/* {item.name}
         {item.description}
         {item.price} */}
        />))}
    </Containerteste>
   )
}
export default Accordeon