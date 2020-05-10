import { Router } from 'express';
import { PostComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/posts
 * 
 * @swagger
 * /v1/posts:
 *   get:
 *     description: Get all stored Posts in Database
 *     tags: ["Posts"]
 *     security:
 *      - cookieAuth: []
 *     responses:
 *       200:
 *         description: An array of Posts
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Post'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', PostComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/posts
 * 
 * @swagger
 * /v1/posts:
 *   post:
 *      description: Create new Post
 *      tags: ["Posts"]
 *      security:
 *       - cookieAuth: []
 *      requestBody:
 *        description: Post creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/PostSchema'
 *            example:
 *              content: "a markdown content"
 *      responses:
 *        201:
 *          description: return created Post
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/PostSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', PostComponent.create);

/**
 * GET method route 
 * @example http://localhost:PORT/v1/posts/:id
 * 
 * @swagger
 * /v1/posts/{id}:
 *  get:
 *    description: Get Post by PostId
 *    tags: ["Posts"]
 *    security:
 *      - cookieAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique PostId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return Post by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/PostSchema'
 */
router.get('/:id', PostComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/posts/:id
 * 
 * @swagger
 * /v1/posts/{id}:
 *  delete:
 *    description: Delete Post by PostId
 *    tags: ["Posts"]
 *    security:
 *      - cookieAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique PostId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted Post
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/PostSchema'
 */
router.delete('/:id', PostComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
