import React from 'react'
import "./component.css"

const Component = () => {
  return (
      <div className="parent">
          <div className="card1">
              <div className='leftShortPara'><p style={{marginLeft:"16px",marginBottom:"-8px"}}>Nearest seller</p></div>
              <img className='imageOfProduct' src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674045672/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239033_0_aq6dfy.png?tr=w-600" alt="" />
              <h1 >Product to be sold</h1>
              <div className='shippingAndPrice'>
                  <p className='shipping'>shipped in 3-4 days</p>
                  <p className='price'>$35.9</p>
              </div>
              <div className='buttonsParent'>
                  <button className='addToCartBtn'>
                   add to cart
                  </button>
                  <button className='buy'>
                      buy
                  </button>
              </div>
          </div>
        <div className="card1">
              <div className='leftShortPara'><p style={{marginLeft:"16px",marginBottom:"-8px"}}>Nearest seller</p></div>
              <img className='imageOfProduct' src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674045672/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239033_0_aq6dfy.png?tr=w-600" alt="" />
              <h1 >Product to be sold</h1>
              <div className='shippingAndPrice'>
                  <p className='shipping'>shipped in 3-4 days</p>
                  <p className='price'>$35.9</p>
              </div>
              <div className='buttonsParent'>
                  <button className='addToCartBtn'>
                   add to cart
                  </button>
                  <button className='buy'>
                      buy
                  </button>
              </div>
          </div>
          {/* <div className={ styles.card2}>2</div> */}
    </div>
  )
}

export default Component
