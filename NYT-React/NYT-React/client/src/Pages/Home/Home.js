import React, { Component } from "react";
import API from "./../../utils/API";
import Article from "./../../Components/Article";
import "./Home.css";

export default class YourApp extends Component {
  state = {
    articles: [],
    savedArticles: [],
    q: "",
    start_year: "",
    end_year: ""
  };

  // lifecycles
  componentDidMount() {
    this.getArticles();
    this.getSavedArticles();
  }

  // my methods
  getArticles = () => {
    API.getArticles({
      q: this.state.q,
      start_year: this.state.start_year,
      end_year: this.state.end_year
    })
      .then(res =>
        this.setState({
          articles: res.data
        })
      )
      .catch(err => console.log(err));
  };
  handleArticleSave = id => {
    const article = this.state.articles.find(article => article._id === id);
    API.saveArticle(article).then(res => {
      this.getSavedArticles();
      this.getArticles();
    });
  };
  getSavedArticles = () => {
    API.getSavedArticles()
      .then(res =>
        this.setState({
          savedArticles: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleArticleDelete = id => {
    API.deleteArticle(id).then(res => {
      this.getSavedArticles();
      this.getArticles();
    });
  };

  handleUserInput = input => {
    this.setState({ q: input.target.value });
  };

  handleStartYear = input => {
    this.setState({ start_year: input.target.value });
  };

  handleEndYear = input => {
    this.setState({ end_year: input.target.value });
  };

  render() {
    return (
      <div>
        <p className="articles-id">Articles</p>
        {this.state.articles.map(article => (
          <Article
            key={article._id}
            _id={article._id}
            title={article.headline.main}
            url={article.web_url}
            date={article.pub_date}
            handleClick={this.handleArticleSave}
            buttonText="Save Article"
          />
        ))}
        <p className="articles-id">Saved Articles</p>
        {this.state.savedArticles.map(article => (
          <Article
            key={article._id}
            _id={article._id}
            title={article.title}
            handleClick={this.handleArticleDelete}
            buttonText="Delete Article"
          />
        ))}
      </div>
    );
  }
}
