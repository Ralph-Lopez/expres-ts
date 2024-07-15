const dynamicResponse = async (isSuccess: boolean, message: string, data: object) => {
    return {
        isSuccess,
        message,
        data
    };
}

const dbResponse = async (isSuccess: boolean, code: string, data: object) => {
    //get db response by code
    const message = "";
    return {
        isSuccess,
        message,
        data
    };
}

export default {
    dynamicResponse,
    dbResponse
}