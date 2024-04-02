import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req) {

        if (req.nextUrl.pathname.startsWith('/create-user') && req.nextauth.token.role !== 'GitHub Admin') {
            return NextResponse.redirect('http://localhost:3000/denied')
        }
    }, {
        callbacks: {
            authorized: ( {token }) => !!token
        }
    }

    

)

export const config = { matcher: ["/create-user"] }