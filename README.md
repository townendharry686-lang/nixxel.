# NIXXEL — Gaming Performance Dashboard

A browser dashboard for safe PC optimisation guidance, game profiles and basic connectivity checks.

**Made by Harry.** Join the community: https://discord.gg/b3SgVQd4z

## Deploy

This repository is configured for a Node.js host such as Railway. Set the start command to `npm start` (or use the `start` script in `package.json`). In the host's private Variables panel, set:

- `OWNER_PASSWORD` — a new, unique password kept private from GitHub.
- `SESSION_SECRET` — a separate long random secret.

Then generate a public HTTPS domain in the hosting dashboard.

## Notes

The source bundle is unpacked by `bootstrap.js` at startup and the bundled Node server runs from ..nixxel-runtime`. No real secrets are included in the bundle or repository. `.env.example` contains placeholders only.

The optimisation page is a checklist and does not change Windows settings or guarantee FPS gains. The network page checks browser connectivity, not in-game ping. Game profiles and checklist progress are stored in each visitor's browser.

Owner login is a starter implementation without rate limiting and keeps sessions in server memory. There is no payment checkout, customer subscription system, or persistent user account service. Do not sell access until those features are implemented and reviewed.
