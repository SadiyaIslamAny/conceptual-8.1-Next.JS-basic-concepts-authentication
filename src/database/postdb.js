

const posts = [
    {
        id: 1,
        title: 'first post',
        description: 'aswerttyujhgnjdjidehejkjfiurfut8rijfrjkfnri',

    },
      {
        id: 2,
        title: 'second post',
        description: 'aswerttyujhgnjdjidehefrjkfnri',
        
    },
      {
        id: 1,
        title: 'third post',
        description: 'aswerttyujhgnjdjidehejkjfiu',
        
    }
]


export const addPost = (newPost) =>{
    posts.push(newPost)
    console.log(posts)
}

export const getPosts = () =>{
    return posts
}