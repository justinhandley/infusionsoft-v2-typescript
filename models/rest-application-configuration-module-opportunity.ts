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

import { RestApplicationConfigurationModuleOpportunityStates } from './rest-application-configuration-module-opportunity-states';
 /**
 * 
 *
 * @export
 * @interface RestApplicationConfigurationModuleOpportunity
 */
export interface RestApplicationConfigurationModuleOpportunity {

    /**
     * @type {string}
     * @memberof RestApplicationConfigurationModuleOpportunity
     */
    defaultStage?: string;

    /**
     * @type {RestApplicationConfigurationModuleOpportunityStates}
     * @memberof RestApplicationConfigurationModuleOpportunity
     */
    states?: RestApplicationConfigurationModuleOpportunityStates;
}
