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

import { CategoryReference } from './category-reference';
 /**
 * 
 *
 * @export
 * @interface CreateTag
 */
export interface CreateTag {

    /**
     * @type {CategoryReference}
     * @memberof CreateTag
     */
    category?: CategoryReference;

    /**
     * The tag description
     *
     * @type {string}
     * @memberof CreateTag
     */
    description?: string;

    /**
     * The tag name
     *
     * @type {string}
     * @memberof CreateTag
     */
    name: string;
}
