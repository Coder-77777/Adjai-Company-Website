const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "No token provided"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Admin access only"
            });
        }

        req.admin = decoded;
        next();

    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Invalid admin token"
        });
    }
}

module.exports = adminMiddleware;