export function asyncHandler(controller) {
    return (req,res, next) => {
        Promise
            .resolve(controller(req, res, next))
            .catch((err) => {
                next(err);
            })
    }
}