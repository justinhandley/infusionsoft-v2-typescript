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

import { AddressInformation } from './address-information';
import { EcommerceReportingOrderContactDetails } from './ecommerce-reporting-order-contact-details';
import { OrderItem } from './order-item';
import { PaymentPlan } from './payment-plan';
 /**
 * 
 *
 * @export
 * @interface Order
 */
export interface Order {

    /**
     * @type {EcommerceReportingOrderContactDetails}
     * @memberof Order
     */
    contact?: EcommerceReportingOrderContactDetails;

    /**
     * @type {string}
     * @memberof Order
     */
    creationDate?: string;

    /**
     * @type {number}
     * @memberof Order
     */
    id?: number;

    /**
     * @type {number}
     * @memberof Order
     */
    leadAffiliateId?: number;

    /**
     * @type {string}
     * @memberof Order
     */
    modificationDate?: string;

    /**
     * @type {string}
     * @memberof Order
     */
    notes?: string;

    /**
     * @type {string}
     * @memberof Order
     */
    orderDate?: string;

    /**
     * @type {Array<OrderItem>}
     * @memberof Order
     */
    orderItems?: Array<OrderItem>;

    /**
     * @type {PaymentPlan}
     * @memberof Order
     */
    paymentPlan?: PaymentPlan;

    /**
     * @type {number}
     * @memberof Order
     */
    refundTotal?: number;

    /**
     * @type {number}
     * @memberof Order
     */
    salesAffiliateId?: number;

    /**
     * @type {AddressInformation}
     * @memberof Order
     */
    shippingInformation?: AddressInformation;

    /**
     * @type {string}
     * @memberof Order
     */
    status?: string;

    /**
     * @type {string}
     * @memberof Order
     */
    title?: string;

    /**
     * @type {number}
     * @memberof Order
     */
    total?: number;

    /**
     * @type {number}
     * @memberof Order
     */
    totalDue?: number;

    /**
     * @type {number}
     * @memberof Order
     */
    totalPaid?: number;
}
