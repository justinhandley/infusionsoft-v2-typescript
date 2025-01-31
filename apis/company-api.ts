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
import { Company } from '../models';
import { CompanyList } from '../models';
import { CreateOrPatchCompany } from '../models';
import { ObjectModel } from '../models';
/**
 * CompanyApi - axios parameter creator
 * @export
 */
export const CompanyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new company as the authenticated user. NB: Company must contain at least the company name. The `country_code` is required if `region` is specified.  You may opt-in or mark a Company as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to unconfirmed (marketable) for email addresses that are currently in the following states: Unengaged Marketable Unengaged Non-Marketable Non-Marketable Opt-Out: Manual All other existing statuses e.g. List Unsubscribe, Opt-Out System etc will remain non-marketable and in their existing state.
         * @summary Create a Company
         * @param {CreateOrPatchCompany} [body] company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCompanyUsingPOST: async (body?: CreateOrPatchCompany, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/companies`;
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
         * Retrieves a single company
         * @summary Retrieve a Company
         * @param {number} companyId companyId
         * @param {Array<string>} [optionalProperties] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren&#x27;t included, by default.)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompanyUsingGET: async (companyId: number, optionalProperties?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            if (companyId === null || companyId === undefined) {
                throw new RequiredError('companyId','Required parameter companyId was null or undefined when calling getCompanyUsingGET.');
            }
            const localVarPath = `/v1/companies/{companyId}`
                .replace(`{${"companyId"}}`, encodeURIComponent(String(companyId)));
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
         * Retrieves a list of all companies
         * @summary List Companies
         * @param {string} [companyName] Optional company name to query on
         * @param {number} [limit] Sets a total of items to return
         * @param {number} [offset] Sets a beginning range of items to return
         * @param {Array<string>} [optionalProperties] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren&#x27;t included, by default.)
         * @param {string} [order] Attribute to order items by
         * @param {string} [orderDirection] How to order the data i.e. ascending (A-Z) or descending (Z-A)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCompaniesUsingGET: async (companyName?: string, limit?: number, offset?: number, optionalProperties?: Array<string>, order?: string, orderDirection?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/companies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (companyName !== undefined) {
                localVarQueryParameter['company_name'] = companyName;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (optionalProperties) {
                localVarQueryParameter['optional_properties'] = optionalProperties;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (orderDirection !== undefined) {
                localVarQueryParameter['order_direction'] = orderDirection;
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
         * Get the custom fields and optional properties for the Company object
         * @summary Retrieve Company Model
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCompanyModelUsingGET: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/companies/model`;
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
         * Updates a company with only the values provided in the request.  You may opt-in or mark a Company as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to unconfirmed (marketable) for email addresses that are currently in the following states: Unengaged Marketable Unengaged Non-Marketable Non-Marketable Opt-Out: Manual All other existing statuses e.g. List Unsubscribe, Opt-Out System etc will remain non-marketable and in their existing state.
         * @summary Update a Company
         * @param {number} companyId companyId
         * @param {CreateOrPatchCompany} [body] company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCompanyUsingPATCH: async (companyId: number, body?: CreateOrPatchCompany, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            if (companyId === null || companyId === undefined) {
                throw new RequiredError('companyId','Required parameter companyId was null or undefined when calling updateCompanyUsingPATCH.');
            }
            const localVarPath = `/v1/companies/{companyId}`
                .replace(`{${"companyId"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
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
    }
};

/**
 * CompanyApi - functional programming interface
 * @export
 */
export const CompanyApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates a new company as the authenticated user. NB: Company must contain at least the company name. The `country_code` is required if `region` is specified.  You may opt-in or mark a Company as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to unconfirmed (marketable) for email addresses that are currently in the following states: Unengaged Marketable Unengaged Non-Marketable Non-Marketable Opt-Out: Manual All other existing statuses e.g. List Unsubscribe, Opt-Out System etc will remain non-marketable and in their existing state.
         * @summary Create a Company
         * @param {CreateOrPatchCompany} [body] company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCompanyUsingPOST(body?: CreateOrPatchCompany, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Company>>> {
            const localVarAxiosArgs = await CompanyApiAxiosParamCreator(configuration).createCompanyUsingPOST(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieves a single company
         * @summary Retrieve a Company
         * @param {number} companyId companyId
         * @param {Array<string>} [optionalProperties] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren&#x27;t included, by default.)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompanyUsingGET(companyId: number, optionalProperties?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Company>>> {
            const localVarAxiosArgs = await CompanyApiAxiosParamCreator(configuration).getCompanyUsingGET(companyId, optionalProperties, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieves a list of all companies
         * @summary List Companies
         * @param {string} [companyName] Optional company name to query on
         * @param {number} [limit] Sets a total of items to return
         * @param {number} [offset] Sets a beginning range of items to return
         * @param {Array<string>} [optionalProperties] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren&#x27;t included, by default.)
         * @param {string} [order] Attribute to order items by
         * @param {string} [orderDirection] How to order the data i.e. ascending (A-Z) or descending (Z-A)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCompaniesUsingGET(companyName?: string, limit?: number, offset?: number, optionalProperties?: Array<string>, order?: string, orderDirection?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CompanyList>>> {
            const localVarAxiosArgs = await CompanyApiAxiosParamCreator(configuration).listCompaniesUsingGET(companyName, limit, offset, optionalProperties, order, orderDirection, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get the custom fields and optional properties for the Company object
         * @summary Retrieve Company Model
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveCompanyModelUsingGET(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ObjectModel>>> {
            const localVarAxiosArgs = await CompanyApiAxiosParamCreator(configuration).retrieveCompanyModelUsingGET(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates a company with only the values provided in the request.  You may opt-in or mark a Company as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to unconfirmed (marketable) for email addresses that are currently in the following states: Unengaged Marketable Unengaged Non-Marketable Non-Marketable Opt-Out: Manual All other existing statuses e.g. List Unsubscribe, Opt-Out System etc will remain non-marketable and in their existing state.
         * @summary Update a Company
         * @param {number} companyId companyId
         * @param {CreateOrPatchCompany} [body] company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCompanyUsingPATCH(companyId: number, body?: CreateOrPatchCompany, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Company>>> {
            const localVarAxiosArgs = await CompanyApiAxiosParamCreator(configuration).updateCompanyUsingPATCH(companyId, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CompanyApi - factory interface
 * @export
 */
export const CompanyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates a new company as the authenticated user. NB: Company must contain at least the company name. The `country_code` is required if `region` is specified.  You may opt-in or mark a Company as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to unconfirmed (marketable) for email addresses that are currently in the following states: Unengaged Marketable Unengaged Non-Marketable Non-Marketable Opt-Out: Manual All other existing statuses e.g. List Unsubscribe, Opt-Out System etc will remain non-marketable and in their existing state.
         * @summary Create a Company
         * @param {CreateOrPatchCompany} [body] company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCompanyUsingPOST(body?: CreateOrPatchCompany, options?: AxiosRequestConfig): Promise<AxiosResponse<Company>> {
            return CompanyApiFp(configuration).createCompanyUsingPOST(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a single company
         * @summary Retrieve a Company
         * @param {number} companyId companyId
         * @param {Array<string>} [optionalProperties] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren&#x27;t included, by default.)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompanyUsingGET(companyId: number, optionalProperties?: Array<string>, options?: AxiosRequestConfig): Promise<AxiosResponse<Company>> {
            return CompanyApiFp(configuration).getCompanyUsingGET(companyId, optionalProperties, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a list of all companies
         * @summary List Companies
         * @param {string} [companyName] Optional company name to query on
         * @param {number} [limit] Sets a total of items to return
         * @param {number} [offset] Sets a beginning range of items to return
         * @param {Array<string>} [optionalProperties] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren&#x27;t included, by default.)
         * @param {string} [order] Attribute to order items by
         * @param {string} [orderDirection] How to order the data i.e. ascending (A-Z) or descending (Z-A)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCompaniesUsingGET(companyName?: string, limit?: number, offset?: number, optionalProperties?: Array<string>, order?: string, orderDirection?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CompanyList>> {
            return CompanyApiFp(configuration).listCompaniesUsingGET(companyName, limit, offset, optionalProperties, order, orderDirection, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the custom fields and optional properties for the Company object
         * @summary Retrieve Company Model
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveCompanyModelUsingGET(options?: AxiosRequestConfig): Promise<AxiosResponse<ObjectModel>> {
            return CompanyApiFp(configuration).retrieveCompanyModelUsingGET(options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a company with only the values provided in the request.  You may opt-in or mark a Company as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to unconfirmed (marketable) for email addresses that are currently in the following states: Unengaged Marketable Unengaged Non-Marketable Non-Marketable Opt-Out: Manual All other existing statuses e.g. List Unsubscribe, Opt-Out System etc will remain non-marketable and in their existing state.
         * @summary Update a Company
         * @param {number} companyId companyId
         * @param {CreateOrPatchCompany} [body] company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCompanyUsingPATCH(companyId: number, body?: CreateOrPatchCompany, options?: AxiosRequestConfig): Promise<AxiosResponse<Company>> {
            return CompanyApiFp(configuration).updateCompanyUsingPATCH(companyId, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CompanyApi - object-oriented interface
 * @export
 * @class CompanyApi
 * @extends {BaseAPI}
 */
export class CompanyApi extends BaseAPI {
    /**
     * Creates a new company as the authenticated user. NB: Company must contain at least the company name. The `country_code` is required if `region` is specified.  You may opt-in or mark a Company as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to unconfirmed (marketable) for email addresses that are currently in the following states: Unengaged Marketable Unengaged Non-Marketable Non-Marketable Opt-Out: Manual All other existing statuses e.g. List Unsubscribe, Opt-Out System etc will remain non-marketable and in their existing state.
     * @summary Create a Company
     * @param {CreateOrPatchCompany} [body] company
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public async createCompanyUsingPOST(body?: CreateOrPatchCompany, options?: AxiosRequestConfig) : Promise<AxiosResponse<Company>> {
        return CompanyApiFp(this.configuration).createCompanyUsingPOST(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieves a single company
     * @summary Retrieve a Company
     * @param {number} companyId companyId
     * @param {Array<string>} [optionalProperties] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren&#x27;t included, by default.)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public async getCompanyUsingGET(companyId: number, optionalProperties?: Array<string>, options?: AxiosRequestConfig) : Promise<AxiosResponse<Company>> {
        return CompanyApiFp(this.configuration).getCompanyUsingGET(companyId, optionalProperties, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieves a list of all companies
     * @summary List Companies
     * @param {string} [companyName] Optional company name to query on
     * @param {number} [limit] Sets a total of items to return
     * @param {number} [offset] Sets a beginning range of items to return
     * @param {Array<string>} [optionalProperties] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren&#x27;t included, by default.)
     * @param {string} [order] Attribute to order items by
     * @param {string} [orderDirection] How to order the data i.e. ascending (A-Z) or descending (Z-A)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public async listCompaniesUsingGET(companyName?: string, limit?: number, offset?: number, optionalProperties?: Array<string>, order?: string, orderDirection?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CompanyList>> {
        return CompanyApiFp(this.configuration).listCompaniesUsingGET(companyName, limit, offset, optionalProperties, order, orderDirection, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the custom fields and optional properties for the Company object
     * @summary Retrieve Company Model
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public async retrieveCompanyModelUsingGET(options?: AxiosRequestConfig) : Promise<AxiosResponse<ObjectModel>> {
        return CompanyApiFp(this.configuration).retrieveCompanyModelUsingGET(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a company with only the values provided in the request.  You may opt-in or mark a Company as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to unconfirmed (marketable) for email addresses that are currently in the following states: Unengaged Marketable Unengaged Non-Marketable Non-Marketable Opt-Out: Manual All other existing statuses e.g. List Unsubscribe, Opt-Out System etc will remain non-marketable and in their existing state.
     * @summary Update a Company
     * @param {number} companyId companyId
     * @param {CreateOrPatchCompany} [body] company
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public async updateCompanyUsingPATCH(companyId: number, body?: CreateOrPatchCompany, options?: AxiosRequestConfig) : Promise<AxiosResponse<Company>> {
        return CompanyApiFp(this.configuration).updateCompanyUsingPATCH(companyId, body, options).then((request) => request(this.axios, this.basePath));
    }
}
