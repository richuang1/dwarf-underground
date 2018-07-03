import React, { Component } from 'react'
import Author from './Author'
class Author extends Component {
  render() {
      return(
         <div className="large-8 medium-12 columns article">
         <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
         <Author/>
       </div>

    )
  }
}


export default Author