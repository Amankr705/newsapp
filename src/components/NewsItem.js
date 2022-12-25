import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left: '90%', zindex: '1'}} >{source} </span>
            <img src={!imageUrl?'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2022-12/585715b7-32b9-4fe2-b5b8-e00ef86f5eff.jpg':imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text" style={{color: 'black'}}>By {author?author:'Unknown'} on {new Date(date).toGMTString()} </small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more...</a>
            </div>
        </div> 
      </div>
    )
  }
}

export default NewsItem
