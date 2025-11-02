# EmailJS Setup Guide for Book Appointment Modal

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** `appointment_request`

**Subject:**
```
New Appointment Request from {{from_name}}
```

**Body:**
```
Dear Dr. Pramod Kadam,

You have received a new appointment request:

Patient Details:
- Name: {{patient_name}}
- Phone: {{patient_phone}}
- Email: {{patient_email}}

Appointment Details:
- Service: {{service}}
- Preferred Date: {{appointment_date}}
- Preferred Time: {{appointment_time}}

Additional Message:
{{message}}

Please contact the patient to confirm the appointment.

Best regards,
K Care Clinic Appointment System
```

4. Save and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123xyz789`)

## Step 5: Update BookAppointmentModal.jsx
Open `src/components/BookAppointmentModal.jsx` and replace these lines (around line 53-55):

```javascript
const serviceID = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
const templateID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key
```

With your actual values:

```javascript
const serviceID = "service_abc123"; // Your actual service ID
const templateID = "template_xyz789"; // Your actual template ID
const publicKey = "abc123xyz789"; // Your actual public key
```

## Step 6: Test the Modal
1. Run `npm run dev`
2. Click any "Book Appointment" or "Book Consultation" button
3. Fill out the form
4. Submit and check your email (check spam folder too)

## Troubleshooting

### Emails not sending?
- Check browser console for errors
- Verify all IDs are correct
- Check EmailJS dashboard usage limits
- Ensure email service is properly connected

### Wrong email recipient?
- Update the `to_name` field in BookAppointmentModal.jsx line 58
- Or modify the template in EmailJS dashboard to send to specific email

### Want to change template?
- Edit template variables in EmailJS dashboard
- Match variable names in `templateParams` object (lines 58-68)

## Additional Notes
- Free tier: 200 emails/month
- Emails may take 1-2 minutes to arrive
- Always check spam/junk folder for test emails
- Consider upgrading EmailJS plan for production use
