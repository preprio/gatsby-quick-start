# Gatsby Quick Start
The Gatsby quick start project launches a blog app with content from Prepr.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Add the environment file
Copy the .env.example file in this directory to .env (which will be ignored by Git) by running the following command:
```bash
cp .env.example .env
```

## Update the environment file
In the .env file replace `<YOUR-PREPR-API-URL>` with the Prepr API URL from your environment access token with demo content.

## Development Server

Start the development server on http://localhost:8000

```bash
npm run develop
```

## Production

Check out the [deployment documentation](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/) for more information.

## The end result

![Blog site end result](https://assets-site.prepr.io/4sptbzci3cja//gatbsy-blog-site-posts.png)

