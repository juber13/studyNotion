class ApiResponse{
    constructor(statuscode , data , message = "Success"){
        this.message = message;
        this.statuscode = statuscode;
        this.success = success < 400;
        this.data = data;
    }
}

export {ApiResponse};