import nodemailer from 'nodemailer';

// Create reusable transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  newsletter?: boolean;
}

export interface CustomTourEmailData {
  name: string;
  email: string;
  phone?: string;
  date?: string;
  groupSize?: string;
  interests: string[];
  duration: string;
  additionalRequests?: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Send to yourself
    replyTo: data.email,
    subject: `[Contact Form] ${data.subject} - from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold; width: 30%;">Name</td>
            <td style="padding: 10px; background: #f9fafb;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Email</td>
            <td style="padding: 10px; background: #f9fafb;">
              <a href="mailto:${data.email}">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Phone</td>
            <td style="padding: 10px; background: #f9fafb;">${data.phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Subject</td>
            <td style="padding: 10px; background: #f9fafb;">${data.subject}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Newsletter</td>
            <td style="padding: 10px; background: #f9fafb;">${data.newsletter ? 'Yes, subscribed' : 'No'}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background: #f9fafb; border-left: 4px solid #dc2626;">
          <h3 style="margin: 0 0 10px 0; color: #374151;">Message:</h3>
          <p style="margin: 0; white-space: pre-wrap; color: #4b5563;">${data.message}</p>
        </div>
        
        <p style="margin-top: 30px; font-size: 12px; color: #9ca3af;">
          This email was sent from the contact form on Dubrovnik Tours website.
        </p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

export async function sendCustomTourEmail(data: CustomTourEmailData) {
  const interestsFormatted = data.interests.length > 0 
    ? data.interests.join(', ') 
    : 'Not specified';

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    replyTo: data.email,
    subject: `[Custom Tour Request] from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
          🎯 New Custom Tour Request
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold; width: 30%;">Name</td>
            <td style="padding: 10px; background: #f9fafb;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Email</td>
            <td style="padding: 10px; background: #f9fafb;">
              <a href="mailto:${data.email}">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Phone</td>
            <td style="padding: 10px; background: #f9fafb;">${data.phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Preferred Date</td>
            <td style="padding: 10px; background: #f9fafb;">${data.date || 'Flexible'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Group Size</td>
            <td style="padding: 10px; background: #f9fafb;">${data.groupSize || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Duration</td>
            <td style="padding: 10px; background: #f9fafb;">${data.duration || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Interests</td>
            <td style="padding: 10px; background: #f9fafb;">${interestsFormatted}</td>
          </tr>
        </table>
        
        ${data.additionalRequests ? `
        <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-left: 4px solid #f59e0b;">
          <h3 style="margin: 0 0 10px 0; color: #374151;">Additional Requests:</h3>
          <p style="margin: 0; white-space: pre-wrap; color: #4b5563;">${data.additionalRequests}</p>
        </div>
        ` : ''}
        
        <p style="margin-top: 30px; font-size: 12px; color: #9ca3af;">
          This email was sent from the custom tour form on Dubrovnik Tours website.
        </p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

