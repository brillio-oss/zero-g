# Contributing

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_
series [How to Contribute to an Open Source Project on GitHub][egghead]

## Project setup

1. Fork and clone the repo
2. `$ yarn install` to install dependencies
3. `$ yarn start` to validate you've got it working
4. Create a branch for your PR

> Tip: Keep your `master` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/kentcdodds/generator-kcd-oss
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream," Then
> fetch the git information from that remote, then set your local `master`
> branch to use the upstream master branch whenever you run `git pull`. Then you
> can make all of your pull request branches based on this `master` branch.
> Whenever you want to update your version of `master`, do a regular `git pull`.

## Committing and Pushing changes

Please make sure to run the tests before you commit your changes. You can run
`npm run test:update` which will update any snapshots that need updating. Make
sure to include those changes (if they exist) in your commit.

## Help needed

Please checkout the [the open issues][issues]

Also, please watch the repo and respond to questions/bug reports/feature
requests! Thanks!

## Issues & Bugs

Submit an [issue][new-issue] or [pull request][pull-requests] with a fix if you find any bugs in
the project. See [below](#submitting-pull-requests) for instructions on sending
in pull requests, and be sure to reference the code style guide
first!

When submitting an issue or pull request, make sure you're as detailed as possible
and fill in all answers to questions asked in the templates. For example, an issue
that simply states "X/Y/Z isn't working!" will be closed.

## Submitting Pull Requests

Before you do anything, make sure you check the current list of [pull requests][4]
to ensure you aren't duplicating anyone's work. Then, do the following:

1. Fork the repository and make your changes in a git branch: `git checkout -b my-branch base-branch`
2. Read and follow the code style guidelines.
3. Make sure your feature or fix doesn't break the project! Test thoroughly.
4. Commit your changes, and be sure to leave a detailed commit message.
5. Push your branch to your forked repo on GitHub: `git push origin my-branch`
6. [Submit a pull request][pull-requests] and hold tight!
7. If any changes are requested by the project maintainers, make them and follow
   this process again until the changes are merged in.

## Code Style

We use an automatic code formatter called Prettier. Run `yarn prettier` after making any changes to the code.

Then, our linter will catch most issues that may exist in your code. You can check the status of your code styling by simply running `yarn linc`.

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at Airbnb’s Style Guide will guide you in the right direction.


## Style Guide

### Component definition

All components (presentation, containers or pages) should **always** be
defined as a directory, named with pascal casing. The main component file
should be `index.js`, main stylesheet `style.css`. CSS custom properties
can be kept in `properties.css`:

```
AwesomeCard/
├── index.js
├── properties.css
└── style.css
```

* Styles should always be defined in a separate CSS file
* Avoid prefixing or suffixing component names
  - E.g.: `lib/pages/UserPage` or `lib/container/UserContainer`
* On conflict rename on import time
  - `import UserContainer from '...'`
  - `import { User as UserContainer } from '...'`

### Project organization

Your project components should be separated in at least three directories:

```
awesome-react-project/
└── src/
   ├── components/
   ├── containers/
   └── pages/
```

Each of these directories have special types of components:

#### `components/`

Stateless components. Shouldn't store state. Most components in this
directory will be function-based components. Stuff like buttons, inputs,
labels and all presentational components goes here. This components can
also accept functions as props and dispatch events, but no state should
be held inside.

#### `containers/`

Container components can store state. Containers are built mostly from
the composition of presentational components with some styles to layout
them together. Containers can also store internal state and access refs
to provide additional logic, but all actions should be accepted as
component callbacks.

#### `pages/`

Page components can store state, receive route parameters and dispatch
Redux actions when applicable. Pages are the highest level of application's
components. They represent the application routes and most times are
displayed by a router. Pages are also responsible for handling container
components callbacks and flowing data into children containers.

### Some # Code standards

#### Destruct your `props`

#### More than 2 props from an object been used in the same place should be destructed


#### Code style
#### Line length should not exceed 80 characters.

#### Use explanatory variables
Bad
```js
const onlyNumbersRegex = /^\d+$/
const validateNumber = message => value => !onlyNumbersRegex.test(value) && message

validateNumber('error message')(1)
```

Good
```js
const onlyNumbersRegex = /^\d+$/
const getNumberValidation = message => value => !onlyNumbersRegex.test(value) && message

const isNumber = getNumberValidation('error message')

isNumber(1)
```

#### Use searchable names
Bad
```js
setTimeout(doSomething, 86400000)
```

Good
```js
const DAY_IN_MILLISECONDS = 86400000

setTimeout(doSomething, DAY_IN_MILLISECONDS)
```


#### Naming

- Test files must start with the class which will be tested followed by `.test`.

- Class and components folders names must start with capital letter.


#### React peculiarities

#### Never "promisify" the `setState`
It's a small anti-pattern which can cause some problems in the component lifecicle. You can found more arguments about this in [this issue](https://github.com/facebook/react/issues/2642#issuecomment-352135607)

#### Mixins
 - [Do not use mixins](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html)

 Why? Mixins introduce implicit dependencies, cause name clashes, and cause snowballing complexity. Most use cases for mixins can be accomplished in better ways via components, higher-order components, or utility modules.

#### Components 

- One line props when are more than 2 or big props

Bad
```jsx
<button type="submit" disabled onClick={() => null} className="aLongSpecificClassName">
  Click here
</button>

<button type="submit" className="aLongSpecificClassName">
  Click here
</button>

<button className="aLongSpecificClassName">Click here</button>
```

Good
```jsx
<button
  className="aLongSpecificClassNameWithLasers"
  disabled={loading}
  onClick={() => null}
  type="submit"
>
  Click here
</button>
```

- One line component

Bad
``` js
<div className="example"><span class="highlight">Bad</span> example</div>
```

Good
``` js
<div className="example">
  <span className="highlight">Bad</span>
  example
</div>
```

<!-- prettier-ignore-start -->
[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[issues]: https://github.com/brillio-oss/zero-g/issues
[new-issue]: https://github.com/brillio-oss/zero-g/issues/new
[pull-requests]: https://github.com/brillio-oss/zero-g/pulls
<!-- prettier-ignore-end -->
