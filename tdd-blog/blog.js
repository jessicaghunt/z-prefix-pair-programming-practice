class Blog {
  constructor(blogPosts, blogAuthors, postsAuthor, blogGenre, blogComments) {
    this.blogPosts = [];
    this.blogAuthors = [];
    this.postsAuthor = [];
    this.blogGenre = [];
    this.blogComments =[];

  }

getBlogPosts () {
  if(this.blogPosts.length === 0){
    return "There are 0 blog posts"
  }
else {
  for(let i = 0; i < this.blogPosts.length; i++){
    return this.blogPosts.map(post => post.title)
  }

}
}

addBlogPost (posts, authors, genres) {
 if (posts) {
  this.blogPosts.push({
    title: posts,
    author: authors,
    genre: genres,
    comments: [],
  });
 }

 if (authors) {
  this.blogAuthors.push(authors)
}

if (posts || authors ) {
  this.postsAuthor.push({posts: posts, author: authors})
}

if(posts || authors || genres){
  this.blogGenre.push({title: posts, author: authors, genre: genres})
}

}

getBlogAuthors () {
  return this.blogAuthors
}

getSpecificBlogAuthor (post) {
  for(let i = 0; i < this.postsAuthor.length; i++){
    if(post === this.postsAuthor[i].posts){
      if(this.postsAuthor[i].author === undefined){
        return "Blog has no author"
      }
      return this.postsAuthor[i].author
    }
  }
  return "No such blog post"
}

getBlogsFromGenre (genre) {
const filtered = [];
for(let i = 0; i < this.blogGenre.length; i++){
  let newArray = this.blogGenre[i]
    if(genre === newArray.genre){
      filtered.push(newArray)
    }
  }
  return filtered
}

getAllGenres() {
  if(this.blogGenre.length === 0){
    return "There are no genres available"
  }
  const genreValuesArray = this.blogGenre.map(element => element.genre)
  return genreValuesArray
}

addComment(posts, user, comment) {
  for(let i = 0; i < this.blogPosts.length; i++){
      if(this.blogPosts[i].title === posts) {
          this.blogPosts[i].comments.push({user: user, comment: comment});
        }
      }
   return;
    }


getBlogComments(title) {
  const post = this.blogPosts.find(post => post.title === title);
  if(post.comments.length === 0){
    return [];
  }
    return [{comments: post.comments}]
}

getCommentsBy(user) {
  const userComments = [];
  for(let i = 0; i < this.blogPosts.length; i++){
    if(this.blogPosts[i].comments.length > 0){
      for(let j = 0; j < this.blogPosts[i].comments.length; j++){
        if(this.blogPosts[i].comments[j].user === user){
          userComments.push({article: this.blogPosts[i].title, comment: this.blogPosts[i].comments[j].comment})
        }
      }
    }
  }
  return ({user: user, comments: userComments})
}

deleteBlog(posts){
  for(let i = 0; i < this.blogPosts.length; i++){
    if(posts === this.blogPosts[i].title){

    const index =this.blogPosts.indexOf(this.blogPosts[i].title)

      this.blogPosts.splice(index, 4)
      console.log(this.blogPosts)
    }
  }
}


//
// const myArray = [1, 2, 3, 4, 5];

// const x = myArray.splice(1, 1);

// console.log(`myArray values: ${myArray}`);
// console.log(`variable x value: ${x}`);


}


module.exports = Blog




//Information about specific blog author method
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





