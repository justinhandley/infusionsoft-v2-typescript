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

 /**
 * 
 *
 * @export
 * @interface SubscriptionPlan
 */
export interface SubscriptionPlan {

    /**
     * @type {boolean}
     * @memberof SubscriptionPlan
     */
    active?: boolean;

    /**
     * @type {number}
     * @memberof SubscriptionPlan
     */
    cycle?: number;

    /**
     * @type {number}
     * @memberof SubscriptionPlan
     */
    frequency?: number;

    /**
     * @type {number}
     * @memberof SubscriptionPlan
     */
    id?: number;

    /**
     * @type {number}
     * @memberof SubscriptionPlan
     */
    numberOfCycles?: number;

    /**
     * @type {number}
     * @memberof SubscriptionPlan
     */
    planPrice?: number;

    /**
     * @type {number}
     * @memberof SubscriptionPlan
     */
    subscriptionPlanIndex?: number;

    /**
     * @type {string}
     * @memberof SubscriptionPlan
     */
    subscriptionPlanName?: string;
}
