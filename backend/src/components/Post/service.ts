import * as Joi from 'joi';
import PostModel, { IPostModel } from './model';
import PostValidation from './validation';
import { IPostService } from './interface';
import { Types } from 'mongoose';
import { IUserModel } from '../User/model';

/**
 * @export
 * @implements {IPostModelService}
 */
const PostService: IPostService = {
    /**
     * @returns {Promise < IPostModel[] >}
     * @memberof PostService
     */
    async findAll(): Promise < IPostModel[] > {
        try {
            return await PostModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IPostModel >}
     * @memberof PostService
     */
    async findOne(id: string): Promise < IPostModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = PostValidation.getPost({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await PostModel.findOne({
                _id: Types.ObjectId(id)
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IPostModel} Post
     * @returns {Promise < IPostModel >}
     * @memberof PostService
     */
    async insert(body: IPostModel, author: IUserModel): Promise < IPostModel > {
        try {
            body.author = author;
            const validate: Joi.ValidationResult < IPostModel > = PostValidation.createPost(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const Post: IPostModel = await PostModel.create(body);

            return Post;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IPostModel >}
     * @memberof PostService
     */
    async remove(id: string): Promise < IPostModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = PostValidation.removePost({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const Post: IPostModel = await PostModel.findOneAndRemove({
                _id: Types.ObjectId(id)
            });

            return Post;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default PostService;
