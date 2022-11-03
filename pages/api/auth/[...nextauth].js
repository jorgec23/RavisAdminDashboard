import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: { label: "Username", type: "text", placeholder: ""},
            password: { label: "Password", type: "password"}
        },
        async authorize(credentials) {
            const res = await fetch(process.env.authenticateAdminsEndpoint,{
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: {"Content-Type": "application/json"}
            })

            const user = await res.json()

            // no error and user data was retrieved
            if (res.ok && user) {
                return user;
            }

            // data was not retreivable
            return null;
        }


      }),
      // ...add more providers here
    ],
    callbacks: {
        jwt: async({token, user}) => {
            // first time jwt callback is run, user object is available
            if (user) {
                token.id = user.id;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
            }
            return token;
        },
        session: ({session, token}) => {
            if  (token) {
                session.id = token.id;
                session.firstName = token.firstName;
                session.lastName = token.lastName;
            }
            return session;
        },
    },
    jwt: {
        encryption: true,
    },
    pages: {
        signIn: '/signin/signin',
    }
  }

  export default NextAuth(authOptions)