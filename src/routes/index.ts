import { Route } from './Route';
import { authenticateToken } from '../middleware/jwt';
import { isValidLoginReq, isValidRegisterReq } from '../middleware/validateReqBody';
import { AuthController } from '../controllers/AuthController';
import { TransactionsController } from '../controllers/TransactionsController';
import { UserController } from '../controllers/UserController';
import { ProtectedRoute } from './ProtectedRoute';

const authController = new AuthController(process.env.AUTH_API!);
const transactionsController = new TransactionsController(process.env.TRANSACTIONS_API!);
const userController = new UserController(process.env.USERS_API!);

/* @formatter:off */
/**
 * @param {Array} routes Array of routes, where:
 *  @param {string} method get/post/put/delete
 *  @param {string} path path for the gateway api
 *  @param {Middleware} middleware middleware or middleware[]
 *  @param {Handler} handler usually controller for request
 */

export const routes: (Route | ProtectedRoute)[] = [
  // User routes
  // new Route('get', '/api/get-all-accounts', authenticateToken, (req, res) => userController.getAccounts(req, res)),
  // new Route('get', '/api/get-user-id/:userID', authenticateToken, (req, res) => userController.getUserID(req, res)),
  // // new Route('get', '/api/get-user-data/:userID', authenticateToken, (req, res) => userController.getUserData(req, res)),
  // new Route('get', '/api/edit-user-data', authenticateToken, (req, res) => userController.editData(req, res)),
  new Route('get', '/api/find-accounts/:userID', authenticateToken, (req, res) => userController.getUserData(req, res)),

  // Transaction routes
  new Route('get', '/api/get-transactions', authenticateToken, (req, res) => transactionsController.getTransactions(req, res)),
  // new Route('get', '/api/get-permissions', authenticateToken, (req, res) => transactionsController.getTransactions(req, res)),

  // Auth routes
  new Route('post', '/api/login', isValidLoginReq, (req, res) => authController.login(req, res)),
  new Route('post', '/api/signup', isValidRegisterReq, (req, res) => authController.signup(req, res)),
];


// const y = Object.getPrototypeOf(authController.login)
// console.log(y)