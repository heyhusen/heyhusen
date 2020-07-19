<p align="center">
  <img src="https://raw.githubusercontent.com/husenisme/site/master/src/assets/img/logo.png" width="70%" />
</p>

# My Site

This is my personal site as well as my portfolio. Made with Gridsome (Jamstack) and Bulma (Buefy), containing data from several sources.

- About, from [Gravatar](http://gravatar.com)
- Works, from my API Server (Laravel)
- Open Source, from [Github GraphQL API](https://docs.github.com/en/graphql)
- Blog, from [DEV.TO](http://dev.to)
- Contact, using [Formspree](http://formspree.io/)

if you are interested in using this project, you can do it in the way below.

## Install

You can install this project using two method, basic and Docker container.

### Requirements

- Node.js
- Yarn
- Docker (Optional)

### Basic install

1. Clone this repository with command `git clone git@github.com:husenisme/site.git`
2. Copy .env.example to .env and fill it.
3. Run command `yarn install` to install all dependencies.
4. Run command `yarn develop` for start development.
5. Open [http://localhost:8080]([http://localhost:8080) in your browser

### Docker container

1. Clone this repository with command `git clone git@github.com:husenisme/site.git`
2. Copy .env.example to .env and fill it.
3. Run command bellow to build a Docker image.
   
   `$ docker build -t husenisme/site .`
4. Run command command bello to start container.
   
   `$ docker run --rm -it -p 8080:80 --name site husenisme/site`
5. Open [http://localhost:8080]([http://localhost:8080) in your browser

## License
Licensed under the MIT [License](https://github.com/husenisme/site/blob/master/LICENSE).
