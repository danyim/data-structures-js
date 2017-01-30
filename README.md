# Data Structures in Javascript
[![Build Status](https://travis-ci.org/danyim/data-structures-js.svg?branch=master)](https://travis-ci.org/danyim/data-structures-js) [![Dependency Status](https://www.versioneye.com/user/projects/57984ee874848d002b4b9eab/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/57984ee874848d002b4b9eab)

This is an effort to implement every major data structure/algorithm in a typical CS curriculum using ES6 Javascript modules with complete code coverage.

### Data Structures/Algorithms Covered
- Binary Trees
- Linked lists
- Stacks
- Queues
- Bubble sort
- Insertion sort
- Merge sort
- Quick sort
- Hash tables
- Heaps (max and min)

### Installation
1. Run `npm install`
2. Run `npm test` to see test results with coverage report
3. While developing, run the following `ava -vw -m src/[prefix]*.spec.js` running to watch for changes in a specifc module. Or run `ava -vw -m src/[prefix]*.spec.js -m "*does xyz*"` to watch and only run tests that match the glob

### Tooling
- **Testing:** [Ava](https://github.com/avajs/ava) and [Istanbul](https://github.com/istanbuljs/nyc)
- **ES6:** [Babel](https://babeljs.io/)
- **Code Style/Linting:** [ESLint](http://eslint.org/)
- **Debugging:** [devtool](https://github.com/Jam3/devtool)
    - Use for step through debugging via `babel src -d lib && devtool lib/*`

### Resources
 - Similar projects:
   - [nzakas/computer-science-in-javascript](https://github.com/nzakas/computer-science-in-javascript)
   - [gwtw/js-data-structures](https://github.com/gwtw/js-data-structures)
   - [benoitvallon/computer-science-in-javascript](https://github.com/benoitvallon/computer-science-in-javascript)
