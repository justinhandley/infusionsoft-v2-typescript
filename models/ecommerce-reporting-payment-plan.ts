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

import { EcommerceReportingPaymentGateway } from './ecommerce-reporting-payment-gateway';
 /**
 * 
 *
 * @export
 * @interface EcommerceReportingPaymentPlan
 */
export interface EcommerceReportingPaymentPlan {

    /**
     * @type {boolean}
     * @memberof EcommerceReportingPaymentPlan
     */
    autoCharge?: boolean;

    /**
     * @type {number}
     * @memberof EcommerceReportingPaymentPlan
     */
    creditCardId?: number;

    /**
     * @type {number}
     * @memberof EcommerceReportingPaymentPlan
     */
    daysBetweenPayments?: number;

    /**
     * @type {number}
     * @memberof EcommerceReportingPaymentPlan
     */
    initialPaymentAmount?: number;

    /**
     * @type {string}
     * @memberof EcommerceReportingPaymentPlan
     */
    initialPaymentDate?: string;

    /**
     * @type {number}
     * @memberof EcommerceReportingPaymentPlan
     */
    numberOfPayments?: number;

    /**
     * @type {EcommerceReportingPaymentGateway}
     * @memberof EcommerceReportingPaymentPlan
     */
    paymentGateway?: EcommerceReportingPaymentGateway;

    /**
     * @type {string}
     * @memberof EcommerceReportingPaymentPlan
     */
    planStartDate?: string;
}
