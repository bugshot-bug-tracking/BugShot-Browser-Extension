# BugShot

## Build for production

### Tools used:

    - Node v16.16.0
    - Pnpm v8.0.0

### Commands to build:

    1. pnpm i (to install all the dependencies)
    2. pnpm run build (this will build the extension in /dist/production/{target browser})

## Notes

    In case only one build is desired in package.json there should only be 1 build:* command for the respective browser.

    This procedure was verified to work on a DigitalOcean droplet running 1GB RAM and 1 CPU, OS: Ubuntu 22.04 x64; but other systems should work as well, for development WSL2 was used.
