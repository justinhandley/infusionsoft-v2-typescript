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
import { RestApplicationConfiguration } from '../models';
import { Setting } from '../models';
/**
 * SettingApi - axios parameter creator
 * @export
 */
export const SettingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves whether the application is enabled
         * @summary Retrieve application status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApplicationEnabledUsingGET: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/setting/application/enabled`;
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
         * Get the properties for the current application's configuration
         * @summary Retrieve application configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigurationUsingGET: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/setting/application/configuration`;
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
         * Lists the Contact types in a comma-separated list.   *Note:* This is now provided by GET /setting/application/configuration
         * @summary List Contact types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContactOptionTypesUsingGET: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/setting/contact/optionTypes`;
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
    }
};

/**
 * SettingApi - functional programming interface
 * @export
 */
export const SettingApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves whether the application is enabled
         * @summary Retrieve application status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApplicationEnabledUsingGET(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Setting>>> {
            const localVarAxiosArgs = await SettingApiAxiosParamCreator(configuration).getApplicationEnabledUsingGET(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get the properties for the current application's configuration
         * @summary Retrieve application configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfigurationUsingGET(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RestApplicationConfiguration>>> {
            const localVarAxiosArgs = await SettingApiAxiosParamCreator(configuration).getConfigurationUsingGET(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists the Contact types in a comma-separated list.   *Note:* This is now provided by GET /setting/application/configuration
         * @summary List Contact types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getContactOptionTypesUsingGET(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Setting>>> {
            const localVarAxiosArgs = await SettingApiAxiosParamCreator(configuration).getContactOptionTypesUsingGET(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SettingApi - factory interface
 * @export
 */
export const SettingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves whether the application is enabled
         * @summary Retrieve application status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApplicationEnabledUsingGET(options?: AxiosRequestConfig): Promise<AxiosResponse<Setting>> {
            return SettingApiFp(configuration).getApplicationEnabledUsingGET(options).then((request) => request(axios, basePath));
        },
        /**
         * Get the properties for the current application's configuration
         * @summary Retrieve application configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfigurationUsingGET(options?: AxiosRequestConfig): Promise<AxiosResponse<RestApplicationConfiguration>> {
            return SettingApiFp(configuration).getConfigurationUsingGET(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the Contact types in a comma-separated list.   *Note:* This is now provided by GET /setting/application/configuration
         * @summary List Contact types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getContactOptionTypesUsingGET(options?: AxiosRequestConfig): Promise<AxiosResponse<Setting>> {
            return SettingApiFp(configuration).getContactOptionTypesUsingGET(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingApi - object-oriented interface
 * @export
 * @class SettingApi
 * @extends {BaseAPI}
 */
export class SettingApi extends BaseAPI {
    /**
     * Retrieves whether the application is enabled
     * @summary Retrieve application status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingApi
     */
    public async getApplicationEnabledUsingGET(options?: AxiosRequestConfig) : Promise<AxiosResponse<Setting>> {
        return SettingApiFp(this.configuration).getApplicationEnabledUsingGET(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the properties for the current application's configuration
     * @summary Retrieve application configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingApi
     */
    public async getConfigurationUsingGET(options?: AxiosRequestConfig) : Promise<AxiosResponse<RestApplicationConfiguration>> {
        return SettingApiFp(this.configuration).getConfigurationUsingGET(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists the Contact types in a comma-separated list.   *Note:* This is now provided by GET /setting/application/configuration
     * @summary List Contact types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingApi
     */
    public async getContactOptionTypesUsingGET(options?: AxiosRequestConfig) : Promise<AxiosResponse<Setting>> {
        return SettingApiFp(this.configuration).getContactOptionTypesUsingGET(options).then((request) => request(this.axios, this.basePath));
    }
}
