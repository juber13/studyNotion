
export const AsyncHandler = (requestHandler) => {
    return (req , res , next) => {
        new Promise.resolve(requestHandler(req, res)).catch(err => next(err));
    }
}