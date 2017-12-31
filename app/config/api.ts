const API_PREFIX: string = "http://212.143.128.217:9200";
// const API_PREFIX: string = "http://192.168.1.7:4000"

export const Api = {
    GET_USERS: `${API_PREFIX}/users`,
    ADD_INVOICE: `${API_PREFIX}/upload`,
    GET_EXPENCE_TYPES: `${API_PREFIX}/expTypes`
}
