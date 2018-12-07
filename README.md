Work in progress build of the [Cabana Design System](https://cabanadesignsystem.com/) in React

# !! DO NOT USE THIS - It's a conceptual thing for now !!

# Basics:
- Currently built off create-react-app
- Using `styled-components` with `styled-system`
- Working through each element of the design system and implementing a first round

# Concepts to communicate:
- Out-of-the-box defaults are just for show. All using `defaultProps` to set this
- Use theme.js to customise values for the various parameters
- Use out-of-the-box components as you like
- Compose your own components by wrapping the pre-made ones

# Dependencies
- styled-components
- styled-system
- react-modal
- react-simple-tooltip

# Alpha Todo
[x] Build up components
[x] "Convert" to an installable npm package
[x] Build demo page that consumes library
[ ] a11y
[ ] Cards - decide on negative images 

## Tech issues to overcome
- styled-system applying props as attrs (check out system-components)
- do rigorous testing with how configurable all elements are
- check over primitives
