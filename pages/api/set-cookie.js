import { setCookie } from "cookies-next";
export default function handler(req, res) {
    const { authToken, mem_type } = req.body;

    // Set cookies server-side
    setCookie("authToken", authToken, {
        req,
        res,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
        secure: process.env.NODE_ENV === 'production', // Ensure secure flag is set in production
        sameSite: 'Lax',
    });
    setCookie("mem_type", mem_type, {
        req,
        res,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
    });

    res.status(200).json({ message: "Cookies set successfully" });
}
