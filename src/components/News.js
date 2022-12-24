import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=51918305c7dc468fa49f0b88735440bf';
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState({articles: parseData.articles})
    };

  render() {
    return (
      <div className='container my-3'>
        <h1>NewsBuzz - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url} >
                <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 89):''} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          } )}
        </div>       
      </div>
    )
  }
}

export default News
