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

import { EmailSentQueryResult } from './email-sent-query-result';
 /**
 * 
 *
 * @export
 * @interface EmailSentQueryResultList
 */
export interface EmailSentQueryResultList {

    /**
     * @type {number}
     * @memberof EmailSentQueryResultList
     */
    count?: number;

    /**
     * @type {Array<EmailSentQueryResult>}
     * @memberof EmailSentQueryResultList
     */
    emails?: Array<EmailSentQueryResult>;

    /**
     * @type {string}
     * @memberof EmailSentQueryResultList
     */
    next?: string;

    /**
     * @type {string}
     * @memberof EmailSentQueryResultList
     */
    previous?: string;
}
