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
 * @interface ProductStatus
 */
export interface ProductStatus {

    /**
     * @type {Product_}
     * @memberof ProductStatus
     */
    product?: Product_;

    /**
     * @type {string}
     * @memberof ProductStatus
     */
    status?: ProductStatusStatusEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum ProductStatusStatusEnum {
    CREATED = 'CREATED',
    UPDATED = 'UPDATED',
    DELETED = 'DELETED'
}

