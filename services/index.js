import {request, gql} from 'graphql-request'


export const getPosts = async () => {

    const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

    const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
    const result = await request (graphqlAPI, query)

    return result.postsConnection.edges;
}