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
 * @interface Affiliate
 */
export interface Affiliate {

    /**
     * @type {string}
     * @memberof Affiliate
     */
    code?: string;

    /**
     * @type {number}
     * @memberof Affiliate
     */
    contactId?: number;

    /**
     * @type {number}
     * @memberof Affiliate
     */
    id?: number;

    /**
     * @type {string}
     * @memberof Affiliate
     */
    name?: string;

    /**
     * @type {boolean}
     * @memberof Affiliate
     */
    notifyOnLead?: boolean;

    /**
     * @type {boolean}
     * @memberof Affiliate
     */
    notifyOnSale?: boolean;

    /**
     * @type {number}
     * @memberof Affiliate
     */
    parentId?: number;

    /**
     * @type {string}
     * @memberof Affiliate
     */
    status?: string;

    /**
     * @type {number}
     * @memberof Affiliate
     */
    trackLeadsFor?: number;
}
