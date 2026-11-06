# Foodify Simples

Official website for Foodify Simples, built with React, Vite, TypeScript and Tailwind CSS.

## Stack

- React 19
- Vite 7
- TypeScript
- Tailwind CSS 4
- Static production output: dist/
- GitHub Actions deployment to Truehost/cPanel over FTPS

This is a static website. It does not require a persistent Node.js application, Passenger, a cPanel API token, or a Node.js server process at runtime.

## Local development

Requirements: Node.js 22 or newer and npm.

    npm ci
    npm run dev

## Production build

    npm ci
    npm run build
    npm run preview

Vite writes the production website to dist/. Upload the contents of that directory to the document root for foodifysimples.com.

## Hosting and deployment

The domain is registered with HostAfrica. Website files are hosted in the existing Truehost cPanel account.

GitHub Actions deploys the contents of dist/ to the Foodify document root using FTPS. The workflow is .github/workflows/deploy.yml.

Required GitHub repository Actions secrets:

| Secret | Value |
| --- | --- |
| FTP_SERVER | FTP hostname shown in cPanel → FTP Accounts → Configure FTP Client |
| FTP_USERNAME | Dedicated FTP account username |
| FTP_PASSWORD | Password for that FTP account |
| FTP_PORT | FTPS port, normally 21 |

Create a dedicated FTP account in cPanel and set its directory to:

    /home/newevtts/foodifysimples.com

The workflow uses server-dir: ./ because the FTP account is scoped directly to that document root. Do not point this account at the O'Motherlands staging directory or another site's document root.

Push to main to build and deploy. You can also start a run manually from GitHub → Actions → Deploy Foodify Simples.

## Repository structure

- src/components/ — website sections and shared UI
- src/assets/ — site photography and visual assets
- public/ — static assets, logo, robots.txt and sitemap.xml
- .github/workflows/ — CI/CD deployment workflow

## Domain and DNS

Keep domain registration at HostAfrica. DNS should point to the Truehost hosting account. DNS records are independent of the GitHub deployment workflow.

## Safety

- Never commit FTP credentials, API keys or private environment files.
- Keep Git history and deployment documentation in this repository.
- Only production build output is uploaded; source files, Git metadata and development dependencies are not deployed.
