# react-express-socketio-boilerplate

A very simple and straightforward boilerplate to create apps using a React frontend, served by webpack, and Express/Socket.IO on the backend.

Of course, it's also trivial to add [MySQL](https://www.npmjs.com/package/mysql) and use that on the backend as well.

This boilerplate is based off of [simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack), props to them 👏. Aside from adding Socket.IO, I also tweaked a few webpack configurations and added scss support.

For further documentation on how the boilerplate works, give simple-react-full-stack's README a read to better understand how it all works, it's all very simple really.

## Features
- React on the frontend, scss included
- webpack
- Express/Socket.IO on the frontend

## But I don't need Socket.IO!
If you don't need Socket.IO, here are the steps to removing it from your project.
Make sure to do all this before you run `npm install`
- Remove 'Socket.IO' from the list of dependencies
- At `/src/server/index.js`, remove all references to Socket.IO
- At `/src/client/index.js` and `/src/client/pages/App.js`, remove all references to Socket.IO

## Contributing
Of course, pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)