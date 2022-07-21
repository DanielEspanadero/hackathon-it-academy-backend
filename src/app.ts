// This file is the beginning of the project, to which we import the model of the server made in express based on classes.

import Server from './models/Server';

const server = new Server();

server.listen();