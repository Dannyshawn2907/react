

import React from 'react'
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import Frame3 from '../../assets/Frame3.png'
import Frame4 from '../../assets/Frame4.png'
import Frame5 from '../../assets/Frame5.png'
import Icon from '../../assets/Icon.png'
import "./Props.css"

function Props(props) {
  return (
    <div className='prop'>
        <img src={props.imgComingFrom} alt="" />
        <p className='name'>{props.name}</p>
        <p className='location'><img src={props.locate} height={20} width={20} alt="" />{props.location}</p>
        <p className='price'>${props.price}</p>
        <button className='button'>{props.btn}</button>
    </div>
  )
}




function FoodArray() {
  return (

    <div className='flex'>
        <Props imgComingFrom={Frame1} name="Cheese Burger" location= "Burger Arena" price="3.88" btn="Order Now" locate={Icon}/>
        <Props imgComingFrom={Frame2} name="Toffe's Cake" location= "Top Sticks" price="4.00" btn="Order Now" locate={Icon} />
        <Props imgComingFrom={Frame3} name="DanCake" location= "Cake World" price="1.98" btn="Order Now" locate={Icon}/>
        <Props imgComingFrom={Frame4} name="Crispy Sandwitch" location= "Fastfood Dine" price="3.00" btn="Order Now" locate={Icon}/>
        <Props imgComingFrom={Frame5} name="Thi Soup" location= "Foody Man" price="2.79" btn="Order Now" locate={Icon}/>

    </div>
  )
}

export default FoodArray