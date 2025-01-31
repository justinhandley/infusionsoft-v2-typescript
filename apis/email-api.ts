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
import { EmailSendRequest } from '../models';
import { EmailSentCreate } from '../models';
import { EmailSentCreateList } from '../models';
import { EmailSentQueryResultList } from '../models';
import { EmailSentQueryResultWithContent } from '../models';
import { SetOfIds } from '../models';
/**
 * EmailApi - axios parameter creator
 * @export
 */
export const EmailApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a record of an email sent to a contact
         * @summary Create an Email Record
         * @param {EmailSentCreate} [body] Email records to persist, with content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEmailUsingPOST: async (body?: EmailSentCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/emails`;
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
         * Create a set of records of emails sent to contacts, maximum 1000 per transaction.
         * @summary Create a set of Email Records
         * @param {EmailSentCreateList} [body] Email records to persist, with content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEmailsUsingPOST: async (body?: EmailSentCreateList, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/emails/sync`;
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
         * Delete a specific email record
         * @summary Delete an Email Record
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteEmailUsingDELETE: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteEmailUsingDELETE.');
            }
            const localVarPath = `/v1/emails/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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
         * Un-syncs a batch of email records
         * @summary Un-sync a batch of Email Records
         * @param {SetOfIds} body emailIds
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteEmailsUsingPOST: async (body: SetOfIds, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling deleteEmailsUsingPOST.');
            }
            const localVarPath = `/v1/emails/unsync`;
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
         * Retrieves a single email that has been sent
         * @summary Retrieve an Email
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEmailUsingGET: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getEmailUsingGET.');
            }
            const localVarPath = `/v1/emails/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Retrieve a list of emails that have been sent  Keap is currently investigating an issue with degraded performance of this endpoint with very large (millions of records) record sets
         * @summary List Emails
         * @param {number} [contactId] Optional Contact Id to find Emails for
         * @param {string} [email] Optional email address to query on
         * @param {number} [limit] Sets a total of items to return
         * @param {number} [offset] Sets a beginning range of items to return
         * @param {boolean} [ordered] Optional boolean to turn off ORDER BY in SQL query
         * @param {string} [sinceSentDate] Optional date to query on, emails sent since the provided date, must be present if untilDate is provided
         * @param {string} [untilSentDate] Optional date to query on, email sent until the provided date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEmailsUsingGET: async (contactId?: number, email?: string, limit?: number, offset?: number, ordered?: boolean, sinceSentDate?: string, untilSentDate?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/emails`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (contactId !== undefined) {
                localVarQueryParameter['contact_id'] = contactId;
            }

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (ordered !== undefined) {
                localVarQueryParameter['ordered'] = ordered;
            }

            if (sinceSentDate !== undefined) {
                localVarQueryParameter['since_sent_date'] = sinceSentDate;
            }

            if (untilSentDate !== undefined) {
                localVarQueryParameter['until_sent_date'] = untilSentDate;
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
         * Send an Email to a list of Contacts
         * @summary Send an Email
         * @param {EmailSendRequest} [body] emailSendRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendEmailUsingPOST: async (body?: EmailSendRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/emails/queue`;
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
    }
};

/**
 * EmailApi - functional programming interface
 * @export
 */
export const EmailApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a record of an email sent to a contact
         * @summary Create an Email Record
         * @param {EmailSentCreate} [body] Email records to persist, with content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createEmailUsingPOST(body?: EmailSentCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<EmailSentCreate>>> {
            const localVarAxiosArgs = await EmailApiAxiosParamCreator(configuration).createEmailUsingPOST(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create a set of records of emails sent to contacts, maximum 1000 per transaction.
         * @summary Create a set of Email Records
         * @param {EmailSentCreateList} [body] Email records to persist, with content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createEmailsUsingPOST(body?: EmailSentCreateList, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<EmailSentCreateList>>> {
            const localVarAxiosArgs = await EmailApiAxiosParamCreator(configuration).createEmailsUsingPOST(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a specific email record
         * @summary Delete an Email Record
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteEmailUsingDELETE(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await EmailApiAxiosParamCreator(configuration).deleteEmailUsingDELETE(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Un-syncs a batch of email records
         * @summary Un-sync a batch of Email Records
         * @param {SetOfIds} body emailIds
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteEmailsUsingPOST(body: SetOfIds, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<{ [key: string]: string; }>>> {
            const localVarAxiosArgs = await EmailApiAxiosParamCreator(configuration).deleteEmailsUsingPOST(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieves a single email that has been sent
         * @summary Retrieve an Email
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEmailUsingGET(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<EmailSentQueryResultWithContent>>> {
            const localVarAxiosArgs = await EmailApiAxiosParamCreator(configuration).getEmailUsingGET(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a list of emails that have been sent  Keap is currently investigating an issue with degraded performance of this endpoint with very large (millions of records) record sets
         * @summary List Emails
         * @param {number} [contactId] Optional Contact Id to find Emails for
         * @param {string} [email] Optional email address to query on
         * @param {number} [limit] Sets a total of items to return
         * @param {number} [offset] Sets a beginning range of items to return
         * @param {boolean} [ordered] Optional boolean to turn off ORDER BY in SQL query
         * @param {string} [sinceSentDate] Optional date to query on, emails sent since the provided date, must be present if untilDate is provided
         * @param {string} [untilSentDate] Optional date to query on, email sent until the provided date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listEmailsUsingGET(contactId?: number, email?: string, limit?: number, offset?: number, ordered?: boolean, sinceSentDate?: string, untilSentDate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<EmailSentQueryResultList>>> {
            const localVarAxiosArgs = await EmailApiAxiosParamCreator(configuration).listEmailsUsingGET(contactId, email, limit, offset, ordered, sinceSentDate, untilSentDate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Send an Email to a list of Contacts
         * @summary Send an Email
         * @param {EmailSendRequest} [body] emailSendRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendEmailUsingPOST(body?: EmailSendRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await EmailApiAxiosParamCreator(configuration).sendEmailUsingPOST(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * EmailApi - factory interface
 * @export
 */
export const EmailApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a record of an email sent to a contact
         * @summary Create an Email Record
         * @param {EmailSentCreate} [body] Email records to persist, with content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createEmailUsingPOST(body?: EmailSentCreate, options?: AxiosRequestConfig): Promise<AxiosResponse<EmailSentCreate>> {
            return EmailApiFp(configuration).createEmailUsingPOST(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a set of records of emails sent to contacts, maximum 1000 per transaction.
         * @summary Create a set of Email Records
         * @param {EmailSentCreateList} [body] Email records to persist, with content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createEmailsUsingPOST(body?: EmailSentCreateList, options?: AxiosRequestConfig): Promise<AxiosResponse<EmailSentCreateList>> {
            return EmailApiFp(configuration).createEmailsUsingPOST(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a specific email record
         * @summary Delete an Email Record
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteEmailUsingDELETE(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return EmailApiFp(configuration).deleteEmailUsingDELETE(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Un-syncs a batch of email records
         * @summary Un-sync a batch of Email Records
         * @param {SetOfIds} body emailIds
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteEmailsUsingPOST(body: SetOfIds, options?: AxiosRequestConfig): Promise<AxiosResponse<{ [key: string]: string; }>> {
            return EmailApiFp(configuration).deleteEmailsUsingPOST(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a single email that has been sent
         * @summary Retrieve an Email
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEmailUsingGET(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<EmailSentQueryResultWithContent>> {
            return EmailApiFp(configuration).getEmailUsingGET(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of emails that have been sent  Keap is currently investigating an issue with degraded performance of this endpoint with very large (millions of records) record sets
         * @summary List Emails
         * @param {number} [contactId] Optional Contact Id to find Emails for
         * @param {string} [email] Optional email address to query on
         * @param {number} [limit] Sets a total of items to return
         * @param {number} [offset] Sets a beginning range of items to return
         * @param {boolean} [ordered] Optional boolean to turn off ORDER BY in SQL query
         * @param {string} [sinceSentDate] Optional date to query on, emails sent since the provided date, must be present if untilDate is provided
         * @param {string} [untilSentDate] Optional date to query on, email sent until the provided date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listEmailsUsingGET(contactId?: number, email?: string, limit?: number, offset?: number, ordered?: boolean, sinceSentDate?: string, untilSentDate?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<EmailSentQueryResultList>> {
            return EmailApiFp(configuration).listEmailsUsingGET(contactId, email, limit, offset, ordered, sinceSentDate, untilSentDate, options).then((request) => request(axios, basePath));
        },
        /**
         * Send an Email to a list of Contacts
         * @summary Send an Email
         * @param {EmailSendRequest} [body] emailSendRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendEmailUsingPOST(body?: EmailSendRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return EmailApiFp(configuration).sendEmailUsingPOST(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EmailApi - object-oriented interface
 * @export
 * @class EmailApi
 * @extends {BaseAPI}
 */
export class EmailApi extends BaseAPI {
    /**
     * Create a record of an email sent to a contact
     * @summary Create an Email Record
     * @param {EmailSentCreate} [body] Email records to persist, with content.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailApi
     */
    public async createEmailUsingPOST(body?: EmailSentCreate, options?: AxiosRequestConfig) : Promise<AxiosResponse<EmailSentCreate>> {
        return EmailApiFp(this.configuration).createEmailUsingPOST(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a set of records of emails sent to contacts, maximum 1000 per transaction.
     * @summary Create a set of Email Records
     * @param {EmailSentCreateList} [body] Email records to persist, with content.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailApi
     */
    public async createEmailsUsingPOST(body?: EmailSentCreateList, options?: AxiosRequestConfig) : Promise<AxiosResponse<EmailSentCreateList>> {
        return EmailApiFp(this.configuration).createEmailsUsingPOST(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete a specific email record
     * @summary Delete an Email Record
     * @param {number} id id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailApi
     */
    public async deleteEmailUsingDELETE(id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return EmailApiFp(this.configuration).deleteEmailUsingDELETE(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Un-syncs a batch of email records
     * @summary Un-sync a batch of Email Records
     * @param {SetOfIds} body emailIds
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailApi
     */
    public async deleteEmailsUsingPOST(body: SetOfIds, options?: AxiosRequestConfig) : Promise<AxiosResponse<{ [key: string]: string; }>> {
        return EmailApiFp(this.configuration).deleteEmailsUsingPOST(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieves a single email that has been sent
     * @summary Retrieve an Email
     * @param {number} id id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailApi
     */
    public async getEmailUsingGET(id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<EmailSentQueryResultWithContent>> {
        return EmailApiFp(this.configuration).getEmailUsingGET(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a list of emails that have been sent  Keap is currently investigating an issue with degraded performance of this endpoint with very large (millions of records) record sets
     * @summary List Emails
     * @param {number} [contactId] Optional Contact Id to find Emails for
     * @param {string} [email] Optional email address to query on
     * @param {number} [limit] Sets a total of items to return
     * @param {number} [offset] Sets a beginning range of items to return
     * @param {boolean} [ordered] Optional boolean to turn off ORDER BY in SQL query
     * @param {string} [sinceSentDate] Optional date to query on, emails sent since the provided date, must be present if untilDate is provided
     * @param {string} [untilSentDate] Optional date to query on, email sent until the provided date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailApi
     */
    public async listEmailsUsingGET(contactId?: number, email?: string, limit?: number, offset?: number, ordered?: boolean, sinceSentDate?: string, untilSentDate?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<EmailSentQueryResultList>> {
        return EmailApiFp(this.configuration).listEmailsUsingGET(contactId, email, limit, offset, ordered, sinceSentDate, untilSentDate, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Send an Email to a list of Contacts
     * @summary Send an Email
     * @param {EmailSendRequest} [body] emailSendRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailApi
     */
    public async sendEmailUsingPOST(body?: EmailSendRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return EmailApiFp(this.configuration).sendEmailUsingPOST(body, options).then((request) => request(this.axios, this.basePath));
    }
}
