# Description
This a Trivia Game app. Test your knowledge against random question and see if you can
score 10/10.

# Getting started
Download the project and run the following commands inside it's folder

* `yarn install`
* `yarn start`

You can use npm if you prefer.

### Don't have NodeJS installed?
No problem! You can also start the project using docker.

* `docker-compose up`

### Play
Now you just need to play it in your browser. If it doesn't open automatically you just need to access
`http://localholst:3000`

# Run tests and code quality tools

* `yarn test`
* `yarn lint`

# Developer considerations
* There is some libs I'm used to work with when developing react application but I didn't
use in this one because It's a simple app. It would be overkill.
  * [ImmutableJS](https://immutable-js.github.io/immutable-js/)
  * [css-modules](https://github.com/css-modules/css-modules)
  * [react-router-config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config)

* I needed to use dangerouslySetInnerHTML twice in this project because the API returns
an HTML instead of a pure text. For this reason I disabled the ESLint rule react/no-danger
only in these two files

# Guides

### SVG
In order to add a new svg icon to the application you need to do the following things:
* Add it's symbol to the `defs` tag into public/index.html with an id attribute starting with `icon-`
* Call the SvgIcon component passing the name prop. It must match the symbol id minus `icon-`
