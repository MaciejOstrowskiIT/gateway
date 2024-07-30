import { Route } from './Route';
import { Handler, Method, Middleware } from './types/types';
import { authenticateToken } from '../middleware/jwt';

/**
 * Represents a protected HTTP route.
 * @class ProtectedRoute
 * @extends {Route}
 */
export class ProtectedRoute extends Route {
  /**
   * Creates a new instance of the ProtectedRoute class.
   * @param {Method} method - HTTP method, one of: 'get', 'post', 'put', 'delete'.
   * @param {string} path - Path for the route.
   * @param {Handler} handler - Function to handle HTTP requests.
   * @param {Middleware} [protectedAuthMiddleware=authenticateToken] - Middleware for authentication, defaults to `authenticateToken`.
   */
  constructor(
    method: Method,
    path: string,
    protectedAuthMiddleware: Middleware = authenticateToken,
    handler: Handler
  ) {
    super(method, path, protectedAuthMiddleware, handler);
  }
}
