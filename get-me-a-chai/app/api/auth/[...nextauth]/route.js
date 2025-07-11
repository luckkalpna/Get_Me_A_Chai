import mongoose from "mongoose";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import Payment from "@/models/Payment";


export const authoptions =  NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "email" },
    //     password: { label: "Password", type: "password" }
    //   },
    //   async authorize(credentials) {
    //     // Replace with your user validation logic
    //     const user = { id: "1", name: "Admin", email: "admin@example.com" };

    //     if (
    //       credentials.email === "admin@example.com" &&
    //       credentials.password === "admin123"
    //     ) {
    //       return user;
    //     } else {
    //       return null;
    //     }
    //   }
    // })
  ],
  callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    if(account.provider == "github"){
      // Connect to the database
      const client = await mongoose.connect()
      // Check if the user is already exists in the database
      const currentUser = User.findOne({email: email})
      if(!currentUser){
        // Creaate a new user
        const newUser = new User({
          email: email,
          username: email.split("@")[0]
        })
        await newUser.save()
        user.name = newUser.username
      }
      else{
        user.name = newUser.username
      }
    }
  }
}
});

export { authoptions as GET, authoptions as POST}
