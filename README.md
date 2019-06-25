# ADAPT Design System
As the design lab are using the Cabana Design System as the starting point for ADAPT, this repo is building upon [Cabana-React](https://lucastobrazil.github.io/cabana-react-docs-gh) project. This repo will grow/change a lot now it's in the ADAPT team.

# Getting Started
1. Install dependencies
```
yarn install
```

2. To actively develop components, you can run 
```
yarn run build:watch
```
The build will re-run every time you save changes. Alternatively you can run `yarn run build` each time you wish to build.

3. Linting
```
yarn run lint
```
Note: The linter is not clear of warnings (yet).

# Roadmap / path forward:
Now that ADAPT will take over this repo, the following topics should be addressed:

1. *Storybook* - currently there is no documentation for this design system. For Cabana, the idea was to have a separate project that acts like a real-world app that uses the `npm` package... This way the components could be tested in real life. Some discussion have already been had around implementing storybook with this project, or perhaps a documentation site for the ADAPT DS that follows the same concept as above.
2. Consider if the move to *Emotion* instead of styled-components makes sense
3. Consider the *lint rules* and if they can / should be aligned with ADAPT standards
4. Consider where/how the `npm` package should be published so our projects can use the ADAPT Design System.
5. Establish a governance model for how we'll handle component development between design and dev
6. Establish a workflow for tickets (Jira, Trello etc)
