This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), typescript and tailwind css.

## Prerequisite
  Node,
  VS Code
  #### VS code Extensions
[ES7](https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets),

[Tailwind](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss),

[Typescript](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)


## Getting Started
npx create-next-app@13.4
cd your app
then, run the development server:
```bash
npm run dev
```
you will encounter a error with tailwind css so install 
```bash
npm install @tailwindcss/postcss 
```
inside postcss.config file replace '@tailwindcss': {} with '@tailwindcss/postcss': {},
again run the dev server 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

 `app/page.tsx` is the main page of our app. We can delete all the default content inside main and create our own page.

## Important notes


### Rendering 

- client-side

- Server-side
  - static (at build time, to make it dynamic you should disable caching as second argument in fecth function {cache:'no store'})  
  - dynamic (at request time)

### Routing

- file based routing
- inside app directory create page.tsx file for routing
> [!f07b] app
  - home
    - page.tsx
  - about
    - page.tsx  

### Dynamic Routing

- create folder name inside square bracket[name]
- id of that component will determine the routing path

 ### Tailwind

 - if you are installing tailwindcss/postcss then you have to uninstall tailwindcss and postcss that are alreday installed while creating the app.

 ### daisyUI
 - install daisyui
 ```bash
 npm install daisyuilatest
 ```

 - in the tailwind config.js file put
 ```bash
 plugins: [require('daisyui')]
 ```