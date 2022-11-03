export { default } from "next-auth/middleware";

export const config = {matcher: [
    // "/:path*",
    "/orders/:path*",
    "/products/:path*",
    "/settings/:path*",
    "/users/:path*",
    "/",
]}