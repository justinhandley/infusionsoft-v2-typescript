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

import { StageDetails } from './stage-details';
 /**
 * 
 *
 * @export
 * @interface SimpleOpportunityStage
 */
export interface SimpleOpportunityStage {

    /**
     * @type {StageDetails}
     * @memberof SimpleOpportunityStage
     */
    details?: StageDetails;

    /**
     * @type {number}
     * @memberof SimpleOpportunityStage
     * @example 0
     */
    id: number;

    /**
     * @type {string}
     * @memberof SimpleOpportunityStage
     */
    name?: string;

    /**
     * @type {Array<string>}
     * @memberof SimpleOpportunityStage
     */
    reasons?: Array<string>;
}
