const http = require('http');
const express = require('express');

const app = express();

/** create server using http */
const server = http.createServer(app);