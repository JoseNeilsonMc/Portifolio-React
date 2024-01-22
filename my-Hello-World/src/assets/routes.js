import express from 'express';

const routes = express.Router();

const AnnotationController = require('./controller/AnnotationController');

// Rotas Annotations
routes.post('/annotations', AnnotationController.create);

module.exports = routes;