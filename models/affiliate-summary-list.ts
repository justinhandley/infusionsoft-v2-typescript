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

import { AffiliateSummary } from './affiliate-summary';
 /**
 * 
 *
 * @export
 * @interface AffiliateSummaryList
 */
export interface AffiliateSummaryList {

    /**
     * @type {number}
     * @memberof AffiliateSummaryList
     */
    count?: number;

    /**
     * @type {Array<AffiliateSummary>}
     * @memberof AffiliateSummaryList
     */
    summaries?: Array<AffiliateSummary>;
}
