import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import nodemailer from 'nodemailer';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import Handlebars from 'handlebars';
import { readFileSync } from 'fs';
import path from 'path';

// Instantiate Prisma Client
const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: process.env.EMAIL_SERVER_PORT,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  secure: false, // Change secure to false
  requireTLS: true, // Add this line to use STARTTLS
});

const emailsDir = path.resolve(process.cwd(), 'emails');

const sendWelcomeEmail = async ({ user }) => {
  const { email } = user;

  try {
    const emailFile = readFileSync(path.join(emailsDir, 'welcome.html'), {
      encoding: 'utf8',
    });
    const emailTemplate = Handlebars.compile(emailFile);
    await transporter.sendMail({
      from: `"✨ PersoAI" ${process.env.EMAIL_FROM}`,
      to: email,
      subject: 'Welcome to PersoAI! 🎉',
      html: emailTemplate({
        base_url: process.env.NEXTAUTH_URL,
        support_email: 'support@persoai.xyz',
      }),
    });
  } catch (error) {
    console.log(`❌ Unable to send welcome email to user (${email})`);
  }
};

const sendVerificationRequest = ({ identifier, url }) => {
  const emailFile = readFileSync(path.join(emailsDir, 'confirm-email.html'), {
    encoding: 'utf8',
  });
  const emailTemplate = Handlebars.compile(emailFile);
  transporter.sendMail({
    from: `"✨ PersoAI" ${process.env.EMAIL_FROM}`,
    to: identifier,
    subject: 'Your sign-in link for PersoAI',
    html: emailTemplate({
      base_url: process.env.NEXTAUTH_URL,
      signin_url: url,
      email: identifier,
    }),
  });
};

export default NextAuth({
  pages: {
    signIn: '/signIn',
    signOut: '/',
    error: '/',
    verifyRequest: '/auth/verify',
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      maxAge: 10 * 60,
      sendVerificationRequest,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  events: { createUser: sendWelcomeEmail },
});
