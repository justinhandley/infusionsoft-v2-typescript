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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ObjectModel } from '../models';
import { Opportunity } from '../models';
import { OpportunityList } from '../models';
import { SalesPipeline } from '../models';
import { UpdateOpportunityRequest } from '../models';
/**
 * OpportunityApi - axios parameter creator
 * @export
 */
export const OpportunityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new opportunity as the authenticated user.
         * @summary Create an Opportunity
         * @param {UpdateOpportunityRequest} [body] opportunity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOpportunityUsingPOST: async (body?: UpdateOpportunityRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/opportunities`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrives a single opportunity
         * @summary Retrieve an Opportunity
         * @param {number} opportunityId opportunityId
         * @param {Array<string>} [optionalProperties] Comma-delimited list of Opportunity properties to include in the response. (Some fields such as &#x60;custom_fields&#x60; aren&#x27;t included, by default.)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOpportunityUsingGET: async (opportunityId: number, optionalProperties?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'opportunityId' is not null or undefined
            if (opportunityId === null || opportunityId === undefined) {
                throw new RequiredError('opportunityId','Required parameter opportunityId was null or undefined when calling getOpportunityUsingGET.');
            }
            const localVarPath = `/v1/opportunities/{opportunityId}`
                .replace(`{${"opportunityId"}}`, encodeURIComponent(String(opportunityId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (optionalProperties) {
                localVarQueryParameter['optional_properties'] = optionalProperties;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a list of all opportunities.  Please note: the sample response erroneously shows properties, such as _stage reasons_, that are unavailable through the list endpoint. Such properties are only available through the retrieve operation. Future versions of the Opportunity resource will correct the oversight.
         * @summary List Opportunities
         * @param {number} [limit] Sets a total of items to return
         * @param {number} [offset] Sets a beginning range of items to return
         * @param {string} [order] Attribute to order items by
         * @param {string} [searchTerm] Returns opportunities that match any of the contact&#x27;s &#x60;given_name&#x60;, &#x60;family_name&#x60;, &#x60;company_name&#x60;, and &#x60;email_addresses&#x60; (searches &#x60;EMAIL1&#x60; only) fields as well as &#x60;opportunity_title&#x60;
         * @param {number} [stageId] Returns opportunities for the provided stage id
         * @param {number} [userId] Returns opportunities for the provided user id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOpportunitiesUsingGET: async (limit?: number, offset?: number, order?: string, searchTerm?: string, stageId?: number, userId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/opportunities`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (searchTerm !== undefined) {
                localVarQueryParameter['search_term'] = searchTerm;
            }

            if (stageId !== undefined) {
                localVarQueryParameter['stage_id'] = stageId;
            }

            if (userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a list of all opportunity stages with pipeline details
         * @summary List Opportunity Stage Pipeline
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOpportunityStagePipelinesUsingGET: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/opportunity/stage_pipeline`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the custom fields for the Opportunity object
         * @summary Retrieve Opportunity Model
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveOpportunityModelUsingGET: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/opportunities/model`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces all values of a given opportunity
         * @summary Replace an Opportunity
         * @param {UpdateOpportunityRequest} [body] opportunity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOpportunityUsingPUT: async (body?: UpdateOpportunityRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/opportunities`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates an opportunity with only the values provided in the request.      *Note:* The POST payload for this request is identical to ['Replace an Opportunity'](https://developer.infusionsoft.com/docs/rest/#operation/updateOpportunityUsingPUT) operation.
         * @summary Update an Opportunity
         * @param {number} opportunityId opportunityId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePropertiesOnOpportunityUsingPATCH: async (opportunityId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'opportunityId' is not null or undefined
            if (opportunityId === null || opportunityId === undefined) {
                throw new RequiredError('opportunityId','Required parameter opportunityId was null or undefined when calling updatePropertiesOnOpportunityUsingPATCH.');
            }
            const localVarPath = `/v1/opportunities/{opportunityId}`
                .replace(`{${"opportunityId"}}`, encodeURIComponent(String(opportunityId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OpportunityApi - functional programming interface
 * @export
 */
export const OpportunityApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates a new opportunity as the authenticated user.
         * @summary Create an Opportunity
         * @param {UpdateOpportunityRequest} [body] opportunity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOpportunityUsingPOST(body?: UpdateOpportunityRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Opportunity>>> {
            const localVarAxiosArgs = await OpportunityApiAxiosParamCreator(configuration).createOpportunityUsingPOST(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrives a single opportunity
         * @summary Retrieve an Opportunity
         * @param {number} opportunityId opportunityId
         * @param {Array<string>} [optionalProperties] Comma-delimited list of Opportunity properties to include in the response. (Some fields such as &#x60;custom_fields&#x60; aren&#x27;t included, by default.)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOpportunityUsingGET(opportunityId: number, optionalProperties?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Opportunity>>> {
            const localVarAxiosArgs = await OpportunityApiAxiosParamCreator(configuration).getOpportunityUsingGET(opportunityId, optionalProperties, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieves a list of all opportunities.  Please note: the sample response erroneously shows properties, such as _stage reasons_, that are unavailable through the list endpoint. Such properties are only available through the retrieve operation. Future versions of the Opportunity resource will correct the oversight.
         * @summary List Opportunities
         * @param {number} [limit] Sets a total of items to return
         * @param {number} [offset] Sets a beginning range of items to return
         * @param {string} [order] Attribute to order items by
         * @param {string} [searchTerm] Returns opportunities that match any of the contact&#x27;s &#x60;given_name&#x60;, &#x60;family_name&#x60;, &#x60;company_name&#x60;, and &#x60;email_addresses&#x60; (searches &#x60;EMAIL1&#x60; only) fields as well as &#x60;opportunity_title&#x60;
         * @param {number} [stageId] Returns opportunities for the provided stage id
         * @param {number} [userId] Returns opportunities for the provided user id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOpportunitiesUsingGET(limit?: number, offset?: number, order?: string, searchTerm?: string, stageId?: number, userId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<OpportunityList>>> {
            const localVarAxiosArgs = await OpportunityApiAxiosParamCreator(configuration).listOpportunitiesUsingGET(limit, offset, order, searchTerm, stageId, userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieves a list of all opportunity stages with pipeline details
         * @summary List Opportunity Stage Pipeline
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOpportunityStagePipelinesUsingGET(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<SalesPipeline>>>> {
            const localVarAxiosArgs = await OpportunityApiAxiosParamCreator(configuration).listOpportunityStagePipelinesUsingGET(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get the custom fields for the Opportunity object
         * @summary Retrieve Opportunity Model
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveOpportunityModelUsingGET(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ObjectModel>>> {
            const localVarAxiosArgs = await OpportunityApiAxiosParamCreator(configuration).retrieveOpportunityModelUsingGET(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Replaces all values of a given opportunity
         * @summary Replace an Opportunity
         * @param {UpdateOpportunityRequest} [body] opportunity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOpportunityUsingPUT(body?: UpdateOpportunityRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Opportunity>>> {
            const localVarAxiosArgs = await OpportunityApiAxiosParamCreator(configuration).updateOpportunityUsingPUT(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates an opportunity with only the values provided in the request.      *Note:* The POST payload for this request is identical to ['Replace an Opportunity'](https://developer.infusionsoft.com/docs/rest/#operation/updateOpportunityUsingPUT) operation.
         * @summary Update an Opportunity
         * @param {number} opportunityId opportunityId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePropertiesOnOpportunityUsingPATCH(opportunityId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Opportunity>>> {
            const localVarAxiosArgs = await OpportunityApiAxiosParamCreator(configuration).updatePropertiesOnOpportunityUsingPATCH(opportunityId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * OpportunityApi - factory interface
 * @export
 */
export const OpportunityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates a new opportunity as the authenticated user.
         * @summary Create an Opportunity
         * @param {UpdateOpportunityRequest} [body] opportunity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOpportunityUsingPOST(body?: UpdateOpportunityRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<Opportunity>> {
            return OpportunityApiFp(configuration).createOpportunityUsingPOST(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrives a single opportunity
         * @summary Retrieve an Opportunity
         * @param {number} opportunityId opportunityId
         * @param {Array<string>} [optionalProperties] Comma-delimited list of Opportunity properties to include in the response. (Some fields such as &#x60;custom_fields&#x60; aren&#x27;t included, by default.)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOpportunityUsingGET(opportunityId: number, optionalProperties?: Array<string>, options?: AxiosRequestConfig): Promise<AxiosResponse<Opportunity>> {
            return OpportunityApiFp(configuration).getOpportunityUsingGET(opportunityId, optionalProperties, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a list of all opportunities.  Please note: the sample response erroneously shows properties, such as _stage reasons_, that are unavailable through the list endpoint. Such properties are only available through the retrieve operation. Future versions of the Opportunity resource will correct the oversight.
         * @summary List Opportunities
         * @param {number} [limit] Sets a total of items to return
         * @param {number} [offset] Sets a beginning range of items to return
         * @param {string} [order] Attribute to order items by
         * @param {string} [searchTerm] Returns opportunities that match any of the contact&#x27;s &#x60;given_name&#x60;, &#x60;family_name&#x60;, &#x60;company_name&#x60;, and &#x60;email_addresses&#x60; (searches &#x60;EMAIL1&#x60; only) fields as well as &#x60;opportunity_title&#x60;
         * @param {number} [stageId] Returns opportunities for the provided stage id
         * @param {number} [userId] Returns opportunities for the provided user id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOpportunitiesUsingGET(limit?: number, offset?: number, order?: string, searchTerm?: string, stageId?: number, userId?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<OpportunityList>> {
            return OpportunityApiFp(configuration).listOpportunitiesUsingGET(limit, offset, order, searchTerm, stageId, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a list of all opportunity stages with pipeline details
         * @summary List Opportunity Stage Pipeline
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOpportunityStagePipelinesUsingGET(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<SalesPipeline>>> {
            return OpportunityApiFp(configuration).listOpportunityStagePipelinesUsingGET(options).then((request) => request(axios, basePath));
        },
        /**
         * Get the custom fields for the Opportunity object
         * @summary Retrieve Opportunity Model
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveOpportunityModelUsingGET(options?: AxiosRequestConfig): Promise<AxiosResponse<ObjectModel>> {
            return OpportunityApiFp(configuration).retrieveOpportunityModelUsingGET(options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces all values of a given opportunity
         * @summary Replace an Opportunity
         * @param {UpdateOpportunityRequest} [body] opportunity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOpportunityUsingPUT(body?: UpdateOpportunityRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<Opportunity>> {
            return OpportunityApiFp(configuration).updateOpportunityUsingPUT(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an opportunity with only the values provided in the request.      *Note:* The POST payload for this request is identical to ['Replace an Opportunity'](https://developer.infusionsoft.com/docs/rest/#operation/updateOpportunityUsingPUT) operation.
         * @summary Update an Opportunity
         * @param {number} opportunityId opportunityId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePropertiesOnOpportunityUsingPATCH(opportunityId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Opportunity>> {
            return OpportunityApiFp(configuration).updatePropertiesOnOpportunityUsingPATCH(opportunityId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OpportunityApi - object-oriented interface
 * @export
 * @class OpportunityApi
 * @extends {BaseAPI}
 */
export class OpportunityApi extends BaseAPI {
    /**
     * Creates a new opportunity as the authenticated user.
     * @summary Create an Opportunity
     * @param {UpdateOpportunityRequest} [body] opportunity
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpportunityApi
     */
    public async createOpportunityUsingPOST(body?: UpdateOpportunityRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<Opportunity>> {
        return OpportunityApiFp(this.configuration).createOpportunityUsingPOST(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrives a single opportunity
     * @summary Retrieve an Opportunity
     * @param {number} opportunityId opportunityId
     * @param {Array<string>} [optionalProperties] Comma-delimited list of Opportunity properties to include in the response. (Some fields such as &#x60;custom_fields&#x60; aren&#x27;t included, by default.)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpportunityApi
     */
    public async getOpportunityUsingGET(opportunityId: number, optionalProperties?: Array<string>, options?: AxiosRequestConfig) : Promise<AxiosResponse<Opportunity>> {
        return OpportunityApiFp(this.configuration).getOpportunityUsingGET(opportunityId, optionalProperties, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieves a list of all opportunities.  Please note: the sample response erroneously shows properties, such as _stage reasons_, that are unavailable through the list endpoint. Such properties are only available through the retrieve operation. Future versions of the Opportunity resource will correct the oversight.
     * @summary List Opportunities
     * @param {number} [limit] Sets a total of items to return
     * @param {number} [offset] Sets a beginning range of items to return
     * @param {string} [order] Attribute to order items by
     * @param {string} [searchTerm] Returns opportunities that match any of the contact&#x27;s &#x60;given_name&#x60;, &#x60;family_name&#x60;, &#x60;company_name&#x60;, and &#x60;email_addresses&#x60; (searches &#x60;EMAIL1&#x60; only) fields as well as &#x60;opportunity_title&#x60;
     * @param {number} [stageId] Returns opportunities for the provided stage id
     * @param {number} [userId] Returns opportunities for the provided user id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpportunityApi
     */
    public async listOpportunitiesUsingGET(limit?: number, offset?: number, order?: string, searchTerm?: string, stageId?: number, userId?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<OpportunityList>> {
        return OpportunityApiFp(this.configuration).listOpportunitiesUsingGET(limit, offset, order, searchTerm, stageId, userId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieves a list of all opportunity stages with pipeline details
     * @summary List Opportunity Stage Pipeline
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpportunityApi
     */
    public async listOpportunityStagePipelinesUsingGET(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<SalesPipeline>>> {
        return OpportunityApiFp(this.configuration).listOpportunityStagePipelinesUsingGET(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the custom fields for the Opportunity object
     * @summary Retrieve Opportunity Model
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpportunityApi
     */
    public async retrieveOpportunityModelUsingGET(options?: AxiosRequestConfig) : Promise<AxiosResponse<ObjectModel>> {
        return OpportunityApiFp(this.configuration).retrieveOpportunityModelUsingGET(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Replaces all values of a given opportunity
     * @summary Replace an Opportunity
     * @param {UpdateOpportunityRequest} [body] opportunity
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpportunityApi
     */
    public async updateOpportunityUsingPUT(body?: UpdateOpportunityRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<Opportunity>> {
        return OpportunityApiFp(this.configuration).updateOpportunityUsingPUT(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates an opportunity with only the values provided in the request.      *Note:* The POST payload for this request is identical to ['Replace an Opportunity'](https://developer.infusionsoft.com/docs/rest/#operation/updateOpportunityUsingPUT) operation.
     * @summary Update an Opportunity
     * @param {number} opportunityId opportunityId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpportunityApi
     */
    public async updatePropertiesOnOpportunityUsingPATCH(opportunityId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Opportunity>> {
        return OpportunityApiFp(this.configuration).updatePropertiesOnOpportunityUsingPATCH(opportunityId, options).then((request) => request(this.axios, this.basePath));
    }
}
