import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        CognitoProvider({
            clientId: process.env.COGNITO_ID,
            clientSecret: process.env.COGNITO_SECRET,
            issuer: process.env.COGNITO_ISSUER,
        }),
    ],
};

export default NextAuth(authOptions);
