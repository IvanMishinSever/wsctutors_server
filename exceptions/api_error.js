module.exports = class ApiError extends Error {
    status;
    errors;
constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }
    static UnauthorisedError() {
        return new ApiError(401,'Пользователь не авторизован');
    }
    static BedRequest(message, errors =[]) {
        return new ApiError(400, message, errors);
    }
    static BedRequestAlreadyExist(message, errors =[]) {
        return new ApiError(409, message, errors);
    }
    static BedRequestUserNotFound(message, errors =[]) {
        return new ApiError(404, message, errors);
    }
    static BedRequestWrongPassword(message, errors =[]) {
        return new ApiError(401, message, errors);
    }
}