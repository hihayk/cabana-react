<div align="center">
  <a href="https://cabana-react-docs.herokuapp.com">
    <img alt="cabana react logo" src="https://i.imgur.com/2oFxHhj.png" width="514px"  />
  </a>
</div>
<div align="center" style="text-align: center;">
  <strong>A design system built especially for both Sketch and React.</strong> 
  <br />
  This is an Alpha build of the <a href="https://cabanadesignsystem.com">Cabana Design System</a> in React
  <br />
  <br />
  <a href="https://spectrum.chat/cabana-designsystem"><img src="https://withspectrum.github.io/badge/badge.svg" alt="Join the   community on Spectrum"></a>
</div>

<br />

## [Docs](https://cabana-react-docs.herokuapp.com)

**See the documentation at [cabana-react-docs.herokuapp.com](https://cabana-react-docs.herokuapp.com)** for more information about using `cabana-react`! NOTE: The docs site may take ~30sec to load as it's running on a free Heroku instance and may need some time to spin up. Enjoy a quiet mental break 

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

<div align="center"
    <img alt="Screenshot of the above code ran in a browser" src="https://i.imgur.com/EJMmI3y.png" height="62" />
</div>

## Theme File Starter
Use [this theme file](https://github.com/lucastobrazil/cabana-react-docs/blob/master/src/theme.js) as a starting point to configure your Cabana config. 

## The Cabana Sketch Library

Cabana-React is the React counterpart of the Cabana Sketch Library. Check out the [Cabana Design System](https://cabanadesignsystem.com) website for a more in-depth rundown of how the design system works, and for access to the library.

## Contributing

If you would like to contribute to `cabana-react` please see our [contributing and community guidelines](./CONTRIBUTING.md), they will help you get set up locally and explain the whole process. (Coming Soon)

## License

Licensed under the MIT License, Copyright © 2018-present Marc Andrew and Lucas Arundell.
