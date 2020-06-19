// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Ahmad Husen',
  siteDescription: 'Portfolio from Ahmad Husen',
  siteUrl: 'https://husenis.me',
  plugins: [
    {
      use: 'gridsome-source-github-api',
      options: {
        // token: required by the GitHub API
        token: process.env.GITHUB_TOKEN,
  
        // GraphQLquery: defaults to a search query
        graphQLQuery: `
          query {
            repositoryOwner(login: "datakrama") {
              repositories(last: 12, orderBy: {field: PUSHED_AT, direction: DESC}) {
                nodes {
                  id
                  pushedAt
                  nameWithOwner
                  description
                  shortDescriptionHTML(limit: 40)
                  url
                  homepageUrl
                  repositoryTopics(last: 10) {
                    nodes {
                      id
                      url
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }        
        `,
  
        // variables: defaults to variables needed for a search query
        variables: {
          owner: 'datakrama'
        }
      }
    }
  ],
  configureWebpack: {
    // merged with the internal config
  }
}
