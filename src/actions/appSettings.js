export const LST_SET_CREDENTIALS = 'LST_SET_CREDENTIALS';

export function setCredentials(credentials) {
    return {
        type: LST_SET_CREDENTIALS,
        payload: credentials
    }
}