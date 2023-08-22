import axios from "axios"

import { BASE_API_URL, METHODS } from "./api"
const _ = require("lodash")
global.$request = {
    call: async function (options = {}) {
        try {
            const response = await axios(_.merge({
                baseURL: BASE_API_URL,
                timeout: 600000, //5Minute
                method: METHODS.GET,
            }, options))
            
            return {
                data: response.data?.data,
                statusCode: response.data?.status_code,
                isSuccess : response.data?.success,
                message : response.data?.message
            }
        } catch (error) {
            return {
                data: error.response?.data,
                statusCode: error.response?.status_code,
                isSuccess : false
            }
        }
    },

    get: async function (url, params = {}, options = {}) {
        return this.call(_.merge({ method: METHODS.GET, url, params }, options))
    },

    post: async function (url, data = {}, options = {}) {
        return this.call(_.merge({ method: METHODS.POST, url, data }, options))
    },

    patch: async function (url, data = {}, options = {}) {
        return this.call(_.merge({ method: METHODS.PATCH, url, data }, options))
    },

    delete: async function (url, data = {}, options = {}) {
        return this.call(_.merge({ method: METHODS.DELETE, url, data }, options))
    },
}