import React, { Component } from 'react';
import Article from './Article' ;
import Bottom from './Bottom';

import AdImage from './AdImage';

import ArticleLink from './ArticleLink'
import ArticleNestedAuthor from './ArticleNestedAuthor';
class Main extends Component {
  render() {
      return(
        <main className="expanded row">
          <ArticleNestedAuthor/>
            <Article/>
            <ArticleLink/>
          <AdImage/>

          <Bottom/>
        </main>

    )
  }
}


export default Main