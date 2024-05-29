# Technical Test for Frontend Developer

## Overview

The goal of this test is to evaluate your skills as a frontend developer. You will build a small Next.js application that displays a list of quests and navigates the user to the quest page upon clicking.

You can find the Figma design to implement [here](https://www.figma.com/file/gL07N5fiYjJgzC2Iq7rvv8/NG-Frontend-Application?type=design&node-id=0%3A1&mode=design&t=9ypnuVirENWfK9sr-1).

## Tasks

- Clone this repository
- Integrate the following pages
  - quests
  - quests/:questSlug
- Implement the "Airdrop Rewards to the Guardian" logic using [Jotai](https://jotai.org/)

> Please note that the API endpoints are already implemented in `/app/api/quests` and `/app/api/quest`

## Libraries

- [Nextjs](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Jotai](https://jotai.org/)
- [react-query](https://react-query.tanstack.com/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)

> the project is already configured and ready to be used with these libraries

## Requirements

- Use useQuery hook from react-query to fetch data from the API for the `/quests` page.
- Leverage the NextJs features to statically generate the `/quests/:questSlug` pages.
- Use Styled Components to style the application.
- Use Jotai to manage the "Airdrop Rewards to the Guardian" logic.
- Make sure the application is fully functional on both desktop and mobile devices.
- Follow the provided Figma design.

## Evaluation Criteria

- Code quality and adherence to best practices
- Correctness of the implementation
- Performance and scalability
- Knowledge of the libraries used

## Submitting the test

1. Publish your code to a public repository or add [Swiiny](https://github.com/swiiny) as a collaborator to your private repository.
2. Send an email to [jobs@nodeguardians.io](mailto:jobs@nodeguardians.io) with the following information:
   - The link to your repository
   - Your resume as an attachment
   - Any other relevant information
3. In the email subject, please write: "Technical Test for Frontend Developer" + your name
