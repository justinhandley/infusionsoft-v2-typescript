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

import { AffiliateCommission } from './affiliate-commission';
 /**
 * 
 *
 * @export
 * @interface AffiliateCommissionList
 */
export interface AffiliateCommissionList {

    /**
     * @type {Array<AffiliateCommission>}
     * @memberof AffiliateCommissionList
     */
    commissions?: Array<AffiliateCommission>;

    /**
     * @type {number}
     * @memberof AffiliateCommissionList
     */
    count?: number;

    /**
     * @type {string}
     * @memberof AffiliateCommissionList
     */
    next?: string;

    /**
     * @type {string}
     * @memberof AffiliateCommissionList
     */
    previous?: string;
}
