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
 * @interface UserInfoDTO
 */
export interface UserInfoDTO {

    /**
     * @type {string}
     * @memberof UserInfoDTO
     */
    email: string;

    /**
     * @type {string}
     * @memberof UserInfoDTO
     */
    familyName: string;

    /**
     * @type {string}
     * @memberof UserInfoDTO
     */
    givenName: string;

    /**
     * @type {number}
     * @memberof UserInfoDTO
     */
    globalUserId: number;

    /**
     * @type {string}
     * @memberof UserInfoDTO
     */
    infusionsoftId: string;

    /**
     * @type {boolean}
     * @memberof UserInfoDTO
     */
    isAdmin?: boolean;

    /**
     * @type {string}
     * @memberof UserInfoDTO
     */
    middleName?: string;

    /**
     * @type {string}
     * @memberof UserInfoDTO
     */
    preferredName?: string;

    /**
     * @type {string}
     * @memberof UserInfoDTO
     */
    sub: string;
}
