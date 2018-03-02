# Install

Run `yarn` or `npm i` on the root folder

# Build

Run `yarn build` or `npm run build` on the root folder

# Run

Run `yarn start` or `npm start` on the root folder

The application listens on port 4000

The API route is `http://localhost:4000/api/product/:id` you can use any id, the result will always be the same as the results are mocked.

# Ideas

Some special consideration I want you to be aware of:

- Testing is shameful in this task. Started doing some functional/Jest testing, but -sincerely- I have run out of time. Sorry about that, I also wanted to do some unit testing with Tape (never used it before but looks promising).
- I have not taken into consideration some edge cases and, even worse, many error handling. The task asked for a focus on design, so I hope that's not a problem.
- Obviously many things are missing: i18n, performance optimizations, etc
- Have tried to keep dependencies to the minimum, but I have used Express to simplify stuff that would not add any value to the task.
- Have tried to keep in mind the future of the api: new endpoints, new outputs, etc
- Would have liked to give it a try with GraphQL if we were to develop this from the ground-up.
