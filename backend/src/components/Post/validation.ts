import * as Joi from 'joi';
import Validation from '../validation';
import { IPostModel } from './model';

/**
 * @export
 * @class PostValidation
 * @extends Validation
 */
class PostValidation extends Validation {

    /**
     * Creates an instance of PostValidation.
     * @memberof PostValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IPostModel} params
     * @returns {Joi.ValidationResult<IPostModel >}
     * @memberof PostValidation
     */
    createPost(
        params: IPostModel
    ): Joi.ValidationResult < IPostModel > {
        const schema: Joi.Schema = Joi.object().keys({
            content: Joi.string().required(),
            author: Joi.exist()
        });
        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof PostValidation
     */
    getPost(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof PostValidation
     */
    removePost(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }
}

export default new PostValidation();
