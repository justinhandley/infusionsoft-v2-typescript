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

import { Company } from './company';
 /**
 * 
 *
 * @export
 * @interface CompanyList
 */
export interface CompanyList {

    /**
     * @type {Array<Company>}
     * @memberof CompanyList
     */
    companies?: Array<Company>;

    /**
     * @type {number}
     * @memberof CompanyList
     */
    count?: number;

    /**
     * @type {string}
     * @memberof CompanyList
     */
    next?: string;

    /**
     * @type {string}
     * @memberof CompanyList
     */
    previous?: string;
}
