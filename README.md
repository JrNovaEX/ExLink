# JrNovaEX links
1. Put your profile image at `public/avatar.jpg`
2. Edit everything in `config/site.ts`
3. `npm install && npm run dev`
4. Deploy: push to GitHub and import in Vercel (Nuxt is auto-detected), or run `npx vercel --prod`

The photo card's task list and the status tile come from `server/api/info.get.ts`,
so the token never reaches the browser. Set `API_TOKEN` in the Vercel project
(and in `.env` locally); without it the page shows "Task feed offline.".
