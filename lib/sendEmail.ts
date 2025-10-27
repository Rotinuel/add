import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendOrderEmail(to: string, reference: string, item: string) {
  const msg = {
    to,
    from: "noreply@xiotworks.com",
    subject: "Order Confirmation",
    text: `Thank you for your purchase of ${item}. Your reference: ${reference}.`,
    html: `<p>Thank you for your purchase of <b>${item}</b>.<br/>Transaction Ref: <b>${reference}</b></p>`,
  };
  await sgMail.send(msg);
}
