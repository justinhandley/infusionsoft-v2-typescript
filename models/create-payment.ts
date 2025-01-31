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
 * @interface CreatePayment
 */
export interface CreatePayment {

    /**
     * @type {boolean}
     * @memberof CreatePayment
     */
    applyToCommissions?: boolean;

    /**
     * @type {boolean}
     * @memberof CreatePayment
     */
    chargeNow?: boolean;

    /**
     * @type {number}
     * @memberof CreatePayment
     */
    creditCardId?: number;

    /**
     * Used when charge_now:false or inserting historical data. ex `2017-01-01T22:17:59.039Z`
     *
     * @type {Date}
     * @memberof CreatePayment
     */
    date?: Date;

    /**
     * @type {string}
     * @memberof CreatePayment
     */
    notes?: string;

    /**
     * @type {string}
     * @memberof CreatePayment
     */
    paymentAmount?: string;

    /**
     * @type {string}
     * @memberof CreatePayment
     */
    paymentGatewayId?: string;

    /**
     * @type {string}
     * @memberof CreatePayment
     */
    paymentMethodType?: CreatePaymentPaymentMethodTypeEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum CreatePaymentPaymentMethodTypeEnum {
    CREDITCARD = 'CREDIT_CARD',
    CASH = 'CASH',
    CHECK = 'CHECK',
    TOKEN = 'TOKEN'
}

