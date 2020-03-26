# Deliverables

* Discuss Client Side Routing
* Discuss Static vs Dynamic Routing

* Investigate how to change the url while still maintaining a single-page app using `window.history.pushState({}, null, 'page');` and `window.history.back()`

* Build out the following functionality, using ReactRouter
  * Use `BrowserRouter` to set up Client Side Routing capabilities
  * Use `Switch` to control which component we are seeing
  * Use `Route` to define routes for various components
  * Use `Link` to create a Nav Bar
  * Use `withRouter` to mimic a redirect after creating a new item
  * Use `match` to access the url params or page path
  * Render just one item when a user navigates to '/items/:id'


# Setup

* `npm install react-router-dom`
* `import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';`

