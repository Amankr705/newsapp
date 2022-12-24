import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1 
        }
    }

    async componentDidMount(){
        let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=51918305c7dc468fa49f0b88735440bf&page=1&pageSize=20';
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
    };

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=51918305c7dc468fa49f0b88735440bf&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })

  };
  
  handleNextClick = async () => {
    // console.log('Next Page');
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=51918305c7dc468fa49f0b88735440bf&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      // console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles
      })
    }
    
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
          })}
        </div>
        <div className="container d-flex justify-content-between ">
          <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick} > &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-success" onClick={this.handleNextClick} >Next &rarr;</button>

        </div>       
      </div>
    )
  }
}

export default News
