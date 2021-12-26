This repository is a minimal reproducible example of the isue discussed [on this Stack Overflow thread](https://stackoverflow.com/questions/70488180/mysterious-string-behavior-in-javascript).

## Reproduction steps

First, run the development server:

 1. Install vercel: `npm i -g vercel`
 2. Git clone this repository and run `vercel` (will require a free [Vercel](https://vercel.com/) account)
 3. Run `vercel dev`
 4. Visit http://localhost:3000/api/hello and observe console logs (see source file at `pages/api/hello.js`)
