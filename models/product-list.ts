/* tslint:disable */
/* eslint-disable */
/**
 * Keap REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.70.0.655384-hf-202403291416
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Product_ } from './product_';
 /**
 * 
 *
 * @export
 * @interface ProductList
 */
export interface ProductList {

    /**
     * @type {number}
     * @memberof ProductList
     */
    count?: number;

    /**
     * @type {string}
     * @memberof ProductList
     */
    next?: string;

    /**
     * @type {string}
     * @memberof ProductList
     */
    previous?: string;

    /**
     * @type {Array<Product_>}
     * @memberof ProductList
     */
    products?: Array<Product_>;

    /**
     * @type {string}
     * @memberof ProductList
     */
    syncToken?: string;
}
