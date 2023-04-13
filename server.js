const express = require('express');
const {ApolloServer ,}    = require('@apollo/server');
const {startStandaloneServer} = require('@apollo/server/standalone')



const typeDefs = `#graphql

    type Query{
        hello: String
    }



`;


const resolvers = {
    Query:{
        hello : ()=>{
            return "Hello World"
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

async function StartApolloServer(){
    const {url} = await startStandaloneServer(server, {
        listen: {port: 4000}
    })
    console.log(`🚀  Server ready at: ${url}`);
}

StartApolloServer()



