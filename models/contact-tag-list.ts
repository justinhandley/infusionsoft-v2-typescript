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

import { ContactTag } from './contact-tag';
 /**
 * 
 *
 * @export
 * @interface ContactTagList
 */
export interface ContactTagList {

    /**
     * @type {number}
     * @memberof ContactTagList
     */
    count?: number;

    /**
     * @type {string}
     * @memberof ContactTagList
     */
    next?: string;

    /**
     * @type {string}
     * @memberof ContactTagList
     */
    previous?: string;

    /**
     * @type {Array<ContactTag>}
     * @memberof ContactTagList
     */
    tags?: Array<ContactTag>;
}
