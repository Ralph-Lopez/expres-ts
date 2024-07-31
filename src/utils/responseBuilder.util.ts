const DynamicResponse = async (isSuccess: boolean, message: string, data: object) => {
    return {
        isSuccess,
        message,
        data
    };
}

const DbResponse = async (isSuccess: boolean, code: string, data: object) => {
    //get db response by code
    const message = "";
    return {
        isSuccess,
        message,
        data
    };
}

export default {
    DynamicResponse,
    DbResponse
}