
const typeDefs = `#graphql

    input PostInput{
        title:String, 
        body:String,
    }

    type Post{
        id: ID
        title: String,
        body:String
    }

    type Query{
        hello: String,
        getPosts : [Post],
        getSinglePost(id: ID) : Post
    }

 

    type Mutation{
        createPost(post: PostInput): [Post],
        deletePost(post: ID): String,
        updatePost(post: ID): Post,
    }

    type Mutation{
        setMessage(input: String): String,
    }

`;


module.exports = typeDefs