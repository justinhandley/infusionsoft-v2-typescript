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

import { TaggedCompany } from './tagged-company';
 /**
 * 
 *
 * @export
 * @interface TaggedCompanyList
 */
export interface TaggedCompanyList {

    /**
     * @type {Array<TaggedCompany>}
     * @memberof TaggedCompanyList
     */
    companies?: Array<TaggedCompany>;

    /**
     * @type {number}
     * @memberof TaggedCompanyList
     */
    count?: number;

    /**
     * @type {string}
     * @memberof TaggedCompanyList
     */
    next?: string;

    /**
     * @type {string}
     * @memberof TaggedCompanyList
     */
    previous?: string;
}
