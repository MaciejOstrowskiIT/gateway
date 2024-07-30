import { Handler, Method, Middleware } from './types/types';
import express from 'express';

/**
 * Represents an HTTP route.
 * @class Route
 */
export class Route {
  /**
   * Creates a new instance of the Route class.
   * @param {Method} method - HTTP method, one of: 'get', 'post', 'put', 'delete'.
   * @param {string} path - Path for the route.
   * @param {Middleware} middleware - Middleware to execute before the handler.
   * @param {Handler} handler - Function to handle HTTP requests.
   */
  constructor(
    private method: Method,
    private path: string,
    private middleware: Middleware,
    private handler: Handler
  ) {}

  /**
   * Registers the route with the given router.
   * @param {express.Router} router - Instance of an Express router, e.g., const router = express.Router();
   * @returns {void}
   */
  registerRoute(router: express.Router): void {
    const middlewareArray = Array.isArray(this.middleware) ? this.middleware : [this.middleware];
    router[this.method](this.path, ...middlewareArray, this.handler);
  }
}
