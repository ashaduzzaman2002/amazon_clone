import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const Rating = ({numReviews, rating}) => {
    
  return (
    <div className='rating'>
        <span>
            {
                rating >= 1?<FaStar color='FF9529' size={18} />
                : rating >= 0.5? <FaStarHalfAlt color='FF9529' size={16.8} />
                :<FaRegStar color='FF9529' size={16.8} />
            }
        </span>

        <span>
            {
                rating >= 2?<FaStar color='FF9529' size={18} />
                : rating >= 1.5? <FaStarHalfAlt color='FF9529' size={16.8} />
                :<FaRegStar color='FF9529' size={16.8} />
            }
        </span>

        <span>
            {
                rating >= 3?<FaStar color='FF9529' size={18} />
                : rating >= 2.5? <FaStarHalfAlt color='FF9529' size={16.8} />
                :<FaRegStar color='FF9529' size={16.8} />
            }
        </span>

        <span>
            {
                rating >= 4?<FaStar color='FF9529' size={18} />
                : rating >= 3.5? <FaStarHalfAlt color='FF9529' size={16.8} />
                :<FaRegStar color='FF9529' size={16.8} />
            }
        </span>

        <span>
            {
                rating >= 5?<FaStar color='FF9529' size={18} />
                : rating >= 4.5? <FaStarHalfAlt color='FF9529' size={16.8} />
                :<FaRegStar color='FF9529' size={16.8} />
            }
        </span>
        <span className='mx-2'>{numReviews} Reviews</span>
    </div>
  )
}


export default Rating
