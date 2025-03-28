class Blog {
  constructor(blogPosts, blogAuthors, postsAuthor) {
    this.blogPosts = [];
    this.blogAuthors = [];
    this.postsAuthor = [];
  }

getBlogPosts () {
  if(this.blogPosts.length === 0){
    return "There are 0 blog posts"
  }
else {
  return this.blogPosts
}
}

addBlogPost (posts, authors) {
 if (posts) {
  this.blogPosts.push(posts)
 }

 if (authors) {
  this.blogAuthors.push(authors)
}

if (posts || authors) {
  this.postsAuthor.push({posts: posts, author: authors})
}
}

getBlogAuthors () {
  return this.blogAuthors
}

// [
//   { posts: 'How to Swim Fast',
//     author: 'Micheal Phelps'
//   }
// ]
// if(this.postsAuthor[i].posts == post){
//   return this.postsAuthor[i].author
// }

// process :
// does this element's .posts = the post that was passed in (yes go to 50, no go to 53)
// does this element's .author exist? (if yes go to 51, no go to 52)
// return the author
// return 'there is no author'
// check the next element in the array and repeat lines 49-53 if no match

// if we finish checking all elements and have not returned anything,
// then the blog post doesn't exist and we return such

getSpecificBlogAuthor (post) {
  for(let i = 0; i < this.postsAuthor.length; i++){
      // console.log(this.postsAuthor[0].posts)
    if(post === this.postsAuthor[i].posts){
      if(this.postsAuthor[i].author === undefined){
        return "Blog has no author"
      }
      return this.postsAuthor[i].author
    }
    // else if(post !== this.postsAuthor[i].posts){
    //   console.log("1", post)
    //   console.log("2", this.postsAuthor[i].posts)
    // return "No such blog post"
    // }
    // else if(this.postsAuthor[i].posts === post){
    //   console.log(this.postsAuthor[i].author)
    //   if(this.postsAuthor[i].author === undefined){
    //     return "Blog has no author"
    //   }
    // }

  }
  return "No such blog post"
}

}





  // return blog.authors

// const posts = this.blogPosts
//    const authors = this.blogAuthors

//   const specificAuthors =Object.fromEntries (
//     posts.map((postsValue, index) => [postsValue, authors[index]]))



//   for(let post in specificAuthors) {
//     if (specificAuthors.post === post) {
//       return specificAuthors[post]
//     }
//     if (specificAuthors[post] === undefined){
//         return "No such blog post"
//       }
//       if (specificAuthors.hasOwnProperty(post)){
//         if(specificAuthors[post] === undefined){
//         return "Blog has no author"
//       }
//   }
// }





module.exports = Blog