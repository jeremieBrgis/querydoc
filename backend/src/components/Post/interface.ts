import { IPostModel } from './model';
import { IUserModel } from '../User/model';

/**
 * @export
 * @interface IPostService
 */
export interface IPostService {

    /**
     * @returns {Promise<IPostModel[]>}
     * @memberof IPostService
     */
    findAll(): Promise<IPostModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IPostModel>}
     * @memberof IPostService
     */
    findOne(code: string): Promise<IPostModel>;

    /**
     * @param {IPostModel} IPostModel
     * @returns {Promise<IPostModel>}
     * @memberof IPostService
     */
    insert(IPostModel: IPostModel, author: IUserModel): Promise<IPostModel>;

    /**
     * @param {string} id
     * @returns {Promise<IPostModel>}
     * @memberof IPostService
     */
    remove(id: string): Promise<IPostModel>;
}
