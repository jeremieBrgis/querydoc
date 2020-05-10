import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection';
import * as crypto from 'crypto';
import { Document, Schema, Mongoose } from 'mongoose';
import { NextFunction } from 'express';
import { IUserModel } from '../User/model';
import UserSchema from '../User/model';


/**
 * @export
 * @interface IPostModel
 * @extends {Document}
 */
export interface IPostModel extends Document {
    content: string;
    author: IUserModel;
}


/**
 * @swagger
 * components:
 *  schemas:
 *    PostSchema:
 *      required:
 *        - content
 *      properties:
 *        id:
 *          type: string
 *        content:
 *          type: string
 *        author:
 *          type: User
 *    Posts:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/PostSchema'
 */
const PostSchema: Schema = new Schema({
    content: String,
    author: {type: Schema.Types.ObjectId, ref: 'UserModel'},
}, {
    collection: 'Postmodel',
    versionKey: false
});

export default connections.db.model < IPostModel > ('PostModel', PostSchema);
