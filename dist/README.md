# BugShot WEB Extension

To run the extension you need to compile it first:

1. run `npm install`
2. run `npm run dev`
3. the dist folder is the one you need to load in chrome

# Issues regarding backend:

- CheckProject route returns only the first project info regarding if there are more or the project isn't afiliated with the current logged user
- No way to get user name based on user id from api
- Bugs list received via getBugs only has option for all bugs on project, needs a filter for bugs assignet to an user
- Dates in DB should be in ISO format so it can be used to show dates to clients relative to their timezones
