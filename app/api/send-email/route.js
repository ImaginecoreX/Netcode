import nodemailer from 'nodemailer';
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
import { NextResponse } from 'next/server';

//http://localhost:3000/api/send-email

export async function POST (request) {


    const emailData = await request.json();

      const oauth2Client = new OAuth2(
        '870284985778-j63j9a8u553ug1l6bocfvkphlr1t6de3.apps.googleusercontent.com',//Client ID
        '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',//Client Secret
        'https://developers.google.com/oauthplayground',// Redirect URL for testing
      );
  

      oauth2Client.setCredentials({
        refresh_token:'1//04HTQ3Vy2AlipCgYIARAAGAQSNwF-L9Irs_VBFcNnWJZ1R_FuFnoYtJ1y6Aph_2gKamgAXNJa47Tl0ggvxeDy-51erBAgwS3wM-Q',
      });
  
      const transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
          type: 'OAuth2',
          user: 'info.givedonor@gmail.com',
          clientId:'870284985778-j63j9a8u553ug1l6bocfvkphlr1t6de3.apps.googleusercontent.com',
          clientSecret:'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',
          refreshToken:'1//04HTQ3Vy2AlipCgYIARAAGAQSNwF-L9Irs_VBFcNnWJZ1R_FuFnoYtJ1y6Aph_2gKamgAXNJa47Tl0ggvxeDy-51erBAgwS3wM-Q',
          accessToken: oauth2Client.getAccessToken(),
        },
      });

      
      try {
        // Send mail with defined transport object
        await transporter.sendMail({
          from:'info.givedonor@gmail.com',
          to:emailData.to,
          subject:emailData.subject,
          text:emailData.msg,
          html:emailData.html
        });
        
  
        return NextResponse.json({ "msg":"sucess", "data":emailData })
        
      } catch (error) {
        console.log('Error sending email:', error);
        return NextResponse.json({ "msg":"Error Sending Email" , "data":emailData });

      }


}
