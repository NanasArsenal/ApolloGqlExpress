const Post = require('./models/Post')
const resolvers = {
    Query:{
        hello : ()=>{
            return "Hello World"
        },

        getPosts: async ()=>{
            const posts = await Post.find({});
            console.log(posts)
            return posts;
        },
        getSinglePost: async (parent,args)=>{
            const id = args.id;
            const post = Post.findById(id);
            return post

        }
    },

    Mutation: {
     createPost : async (parent,args)=>{
      const userinput = args.post
      const post = new Post(userinput)
      await post.save()
      return [post];
     },

     setMessage : function(parentValue,args){
        message = args.input.newMessage
        return message;
    },
    deletePost: async function(parent, args){
        const id = args.post;
        await Post.findByIdAndDelete(id);
        return "Deleted";

    },
    updatePost: async function(parentValue,args,context){
        const id = args.post;
        const {title,body}= args.update;
        const post = await Post.findByIdAndUpdate(id,{title,body}, {new:true});
        return post;

    }
    }
}


module.exports = resolvers;