Work in progress build of the [Cabana Design System](https://cabanadesignsystem.com/) in React

# Take part in the Alpha Projects
- [See project doc](https://docs.google.com/document/d/1-l3p8BzwHaukl3mhh8bSb5C1hVjb7MNuWFtS4xEfOj4/edit?usp=sharing)

<div align="center">
  <a href="https://cabana-react-docs.herokuapp.com/#/">
    <img alt="styled-components" src="https://i.imgur.com/2oFxHhj.png" height="100"  />
  </a>
</div>

<br />

<div align="center">
  <strong>A design system built especially for both Sketch and React.</strong>
  <br />
  <br />

<a href="https://spectrum.chat/cabana-designsystem"><img src="https://withspectrum.github.io/badge/badge.svg" alt="Join the community on Spectrum"></a>
</div>

<br />
<br />

## [Docs](https://cabana-react-docs.herokuapp.com)

**See the documentation at [cabana-react-docs.herokuapp.com](https://cabana-react-docs.herokuapp.com)** for more information about using `cabana-react`!

## Example: Your first Cabana component

<!-- prettier-ignore -->
```JSX
import { ThemeProvider } from 'styled-components';
import { Button } from 'cabana-react';
import myTheme from './theme.js';

const App = () => (
    <ThemeProvider theme={myTheme}>
        <Button bg="primary" color="white">Hi!</Button>
    </ThemeProvider>
);
```

This is what you'll see in your browser:

<div align="center">
    <img alt="Screenshot of the above code ran in a browser" src="https://i.imgur.com/EJMmI3y.png" height="62" />
</div>

## The Cabana Sketch Library

Cabana-React is the React counterpart of the Cabana Sketch Library. Check out the [Cabana Design System](https://cabanadesignsystem.com) website for a more in-depth rundown of how the design system works, and for access to the library.

## Contributing

If you would like to contribute to `cabana-react` please see our [contributing and community guidelines](./CONTRIBUTING.md), they will help you get set up locally and explain the whole process. (Coming Soon)

## License

Licensed under the MIT License, Copyright © 2018-present Marc Andrew and Lucas Arundell.
