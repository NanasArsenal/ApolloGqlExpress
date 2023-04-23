const express = require('express');
const {ApolloServer ,}    = require('@apollo/server');
const {startStandaloneServer} = require('@apollo/server/standalone')
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { default: mongoose } = require('mongoose');
const connDB = require('./db _config/config')
require('dotenv').config()

connDB();

const server = new ApolloServer({
    typeDefs,
    resolvers
})

async function StartApolloServer(){

    
    const {url} = await startStandaloneServer(server, {
        listen: {port: 4001}
    })
    console.log(`🚀  Server ready at: ${url}`);
}




mongoose.connection.once('open',()=>{
    console.log("MongoDB connected");
    StartApolloServer()

})
