import React from "react";
import Article from "./Article";



function ArticleList({posts}){
    // console.log(posts)
    const articles = posts.map(post => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
    })
    return <main>
        {articles}
    </main>
    {if (posts.minutes < 30 && posts.id === 1){
        posts.minutes = "☕️ 3 min read"
    }else if (posts.minutes < 30 && posts.id === 2){
        posts.minutes =  "☕️☕️ 7 min read"
    }else{
        "🍱🍱🍱🍱 min read"
    }
  }
}

export default ArticleList;

// Make a ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down as a prop to ArticleList)
// make sure to assign a unique key prop to each Article