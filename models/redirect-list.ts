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

import { AffiliateRedirect } from './affiliate-redirect';
 /**
 * 
 *
 * @export
 * @interface RedirectList
 */
export interface RedirectList {

    /**
     * @type {number}
     * @memberof RedirectList
     */
    count?: number;

    /**
     * @type {string}
     * @memberof RedirectList
     */
    next?: string;

    /**
     * @type {string}
     * @memberof RedirectList
     */
    previous?: string;

    /**
     * @type {Array<AffiliateRedirect>}
     * @memberof RedirectList
     */
    redirects?: Array<AffiliateRedirect>;
}
