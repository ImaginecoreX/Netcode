import nodemailer from 'nodemailer';
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
import { NextResponse } from 'next/server';

//http://localhost:3000/api/send-email

export async function POST (request) {


    const emailData = await request.json();

      const oauth2Client = new OAuth2(
        '870284985778-sv7u2uue7d37me346sjoq7a5slgr5kk8.apps.googleusercontent.com',//Client ID
        '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',//Client Secret
        'https://developers.google.com/oauthplayground',// Redirect URL for testing
      );
  

      oauth2Client.setCredentials({
        refresh_token:'1//04WQPazUDJPWbCgYIARAAGAQSNwF-L9IrKA9CA2u18cVRRjmRdsbCFv4POBmh7cGuAOdU2nqlV6VAiHVuTRDCop_bJUHi0JO4IQY',
      });
  
      const transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
          type: 'OAuth2',
          user: 'teams.netcode@gmail.com',
          clientId:'870284985778-sv7u2uue7d37me346sjoq7a5slgr5kk8.apps.googleusercontent.com',
          clientSecret:'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',
          refreshToken:'1//04WQPazUDJPWbCgYIARAAGAQSNwF-L9IrKA9CA2u18cVRRjmRdsbCFv4POBmh7cGuAOdU2nqlV6VAiHVuTRDCop_bJUHi0JO4IQY',
          accessToken: oauth2Client.getAccessToken(),
        },
      });

      
      try {
        // Send mail with defined transport object
        await transporter.sendMail({
          from:emailData.email,
          to:'teams.netcode@gmail.com',
          subject:emailData.subject,
          html:emailData.html
        });

        await transporter.sendMail({
          from:'teams.netcode@gmail.com',
          to:emailData.email,
          subject:emailData.subject,
          text:'Thank your for contacting us, we will get back to you soon...'
        });
        
  
        return NextResponse.json({ "msg":"success", "data":emailData })
        
      } catch (error) {
        console.log('Error sending email:', error);
        return NextResponse.json({ "msg":"Error Sending Email" , "data":emailData });

      }


}
