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

import { Affiliate } from './affiliate';
 /**
 * 
 *
 * @export
 * @interface AffiliateList
 */
export interface AffiliateList {

    /**
     * @type {Array<Affiliate>}
     * @memberof AffiliateList
     */
    affiliates?: Array<Affiliate>;

    /**
     * @type {number}
     * @memberof AffiliateList
     */
    count?: number;

    /**
     * @type {string}
     * @memberof AffiliateList
     */
    next?: string;

    /**
     * @type {string}
     * @memberof AffiliateList
     */
    previous?: string;
}
