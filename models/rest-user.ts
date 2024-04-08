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

import { Address } from './address';
import { FaxNumber } from './fax-number';
import { PhoneNumber } from './phone-number';
 /**
 * 
 *
 * @export
 * @interface RestUser
 */
export interface RestUser {

    /**
     * @type {Address}
     * @memberof RestUser
     */
    address?: Address;

    /**
     * @type {string}
     * @memberof RestUser
     */
    companyName?: string;

    /**
     * @type {number}
     * @memberof RestUser
     */
    createdBy?: number;

    /**
     * @type {Date}
     * @memberof RestUser
     */
    dateCreated?: Date;

    /**
     * @type {string}
     * @memberof RestUser
     */
    emailAddress?: string;

    /**
     * @type {string}
     * @memberof RestUser
     */
    familyName?: string;

    /**
     * @type {Array<FaxNumber>}
     * @memberof RestUser
     */
    faxNumbers?: Array<FaxNumber>;

    /**
     * @type {string}
     * @memberof RestUser
     */
    givenName?: string;

    /**
     * @type {number}
     * @memberof RestUser
     */
    globalUserId?: number;

    /**
     * @type {number}
     * @memberof RestUser
     */
    id: number;

    /**
     * @type {string}
     * @memberof RestUser
     */
    infusionsoftId?: string;

    /**
     * @type {string}
     * @memberof RestUser
     */
    jobTitle?: string;

    /**
     * @type {Date}
     * @memberof RestUser
     */
    lastUpdated?: Date;

    /**
     * @type {number}
     * @memberof RestUser
     */
    lastUpdatedBy?: number;

    /**
     * @type {string}
     * @memberof RestUser
     */
    middleName?: string;

    /**
     * @type {boolean}
     * @memberof RestUser
     */
    partner?: boolean;

    /**
     * @type {Array<PhoneNumber>}
     * @memberof RestUser
     */
    phoneNumbers?: Array<PhoneNumber>;

    /**
     * @type {string}
     * @memberof RestUser
     */
    preferredName?: string;

    /**
     * @type {string}
     * @memberof RestUser
     */
    status?: RestUserStatusEnum;

    /**
     * @type {string}
     * @memberof RestUser
     */
    timeZone?: string;

    /**
     * @type {string}
     * @memberof RestUser
     */
    website?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum RestUserStatusEnum {
    Active = 'Active',
    Invited = 'Invited',
    Inactive = 'Inactive'
}

