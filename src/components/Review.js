import React from 'react'

function Review({reviews}) {

  return (
    <div >
      {
        reviews.map((item)=>(
            <div>
                <h5>
                    {item.name}
                </h5>
                <div>
                    <p>{item.date}</p>
                    <p>{item.comments}</p>
                    <p>{item.rating}</p>
                    </div>
                </div>
        ))}
    </div>
  )
}

export default Review
