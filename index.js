import { Client, fql } from 'fauna'

const client = new Client({
    secret: process.env.FAUNA_SECRET
})

// Create a new collection called post
const query = fql`
 Collection.create({
    name: "Post"
 })
`
// client.query(query).then((ret) => console.log(ret))

function createPost() {
    const query = fql`
        Post.create({
            title: "My Post",
            content: "This is my first post"
        })
    `
    client.query(query).then((ret) => console.log(ret.data))
}

createPost()
