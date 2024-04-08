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
 * @interface UpdateNote
 */
export interface UpdateNote {

    /**
     * @type {string}
     * @memberof UpdateNote
     */
    body?: string;

    /**
     * @type {number}
     * @memberof UpdateNote
     */
    contactId?: number;

    /**
     * @type {string}
     * @memberof UpdateNote
     */
    title?: string;

    /**
     * @type {string}
     * @memberof UpdateNote
     */
    type?: UpdateNoteTypeEnum;

    /**
     * @type {number}
     * @memberof UpdateNote
     */
    userId?: number;
}

/**
 * @export
 * @enum {string}
 */
export enum UpdateNoteTypeEnum {
    Appointment = 'Appointment',
    Call = 'Call',
    Email = 'Email',
    Fax = 'Fax',
    Letter = 'Letter',
    Other = 'Other'
}

