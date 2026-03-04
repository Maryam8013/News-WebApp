import React from 'react'

const NewsItem = (props) => {

    let {title,description,ImgUrl,newsUrl,author,date,source} = props; 
    return (
      <div class='my-3'>
         <div className="card">
        <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
           <span class=" badge rounded-pill bg-danger" style={{left:'90%', zIndex:"1"}}>{source}</span>
        </div>
          <img src= {!ImgUrl?"https://www.aljazeera.com/wp-content/uploads/2024/06/AP24178827137403-1719559838.jpg?resize=1920%2C1440":ImgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}  </h5>
              <p className="card-text">{description}</p>
              <p className='card-text'><small class='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
           </div>
        </div>
      </div>
    )
}

export default NewsItem
