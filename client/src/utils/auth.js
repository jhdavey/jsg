const decode = require('jwt-decode');

module.exports = (context) => {
    //context - { ...headers }
    const authHeader = context.req.headers.authorization;
    if (authHeader) {
        //Bearer ....
    const token = authHeader.split('Bearer')[1];
    if (token) {
        try {
            const user = decode.verify(token, "UNSAFE_STRING");
            return user;
        } catch (err) {
            throw new Error('Invalid/Expired token');
        }
    }
    throw new Error("Authentication token must be 'Bearer [token]'");
    }
    throw new Error('Authorization header must be provided');
}