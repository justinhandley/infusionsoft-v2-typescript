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

import { Goal } from './goal';
import { Sequence } from './sequence';
 /**
 * 
 *
 * @export
 * @interface CampaignWithStats
 */
export interface CampaignWithStats {

    /**
     * @type {number}
     * @memberof CampaignWithStats
     */
    activeContactCount?: number;

    /**
     * @type {number}
     * @memberof CampaignWithStats
     */
    completedContactCount?: number;

    /**
     * @type {number}
     * @memberof CampaignWithStats
     */
    createdByGlobalId?: number;

    /**
     * @type {Date}
     * @memberof CampaignWithStats
     */
    dateCreated?: Date;

    /**
     * @type {string}
     * @memberof CampaignWithStats
     */
    errorMessage?: string;

    /**
     * @type {Array<Goal>}
     * @memberof CampaignWithStats
     */
    goals?: Array<Goal>;

    /**
     * @type {number}
     * @memberof CampaignWithStats
     */
    id?: number;

    /**
     * @type {boolean}
     * @memberof CampaignWithStats
     */
    locked?: boolean;

    /**
     * @type {string}
     * @memberof CampaignWithStats
     */
    name?: string;

    /**
     * @type {Date}
     * @memberof CampaignWithStats
     */
    publishedDate?: Date;

    /**
     * @type {boolean}
     * @memberof CampaignWithStats
     */
    publishedStatus?: boolean;

    /**
     * @type {string}
     * @memberof CampaignWithStats
     */
    publishedTimeZone?: string;

    /**
     * @type {Array<Sequence>}
     * @memberof CampaignWithStats
     */
    sequences?: Array<Sequence>;

    /**
     * @type {string}
     * @memberof CampaignWithStats
     */
    timeZone?: string;
}
