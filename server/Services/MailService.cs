using MailKit.Security;
using Microsoft.Extensions.Options;
using SendEmailDotNetCoreWebAPI.Model;
using SendEmailDotNetCoreWebAPI.Settings;
using System.IO;
using System.Net;
using MailKit.Net.Smtp;
using System.Threading.Tasks;
using MimeKit;
using System;

namespace SendEmailDotNetCoreWebAPI.Services
{
    public class MailService : IMailService
    {
        private readonly MailSettings _mailSettings;
        private string _messageBody;

        public MailService(IOptions<MailSettings> mailSettings)
        {
            _mailSettings = mailSettings.Value;
        }

        //Email to us
        public async Task SendEmailAsync(Customer customer)
        {
            var email = new MimeMessage();

            email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
            email.To.Add(MailboxAddress.Parse("projectem2023@gmail.com"));
            email.Subject = "New Order Placed";
            var builder = new BodyBuilder();
            // Create the message body

            _messageBody = "<p>Time Slot: " + customer.TimeSlot + "</p>" +
                     "<p>Date: " + customer.Date + "</p>" +
                     "<p>Pickup Address: " + customer.PickupAddress + "</p>" +
                     "<p>Phone Number: " + customer.PhoneNumber + "</p>" +
                     "<p>Email: " + customer.Email + "</p>" +
                     "<p>Last Name: " + customer.LastName + "</p>" +
                     "<p>First Name: " + customer.FirstName + "</p>" +
                     "<p>Code: " + customer.Code + "</p><br>";

            // Add the list of stores to the message body
            _messageBody += "Stores:\n";
            foreach (var store in customer.StoreNames)
            {
                _messageBody += "<p>Name: " + store.Name + "</p>" +
                     "<p>Store Type: " + store.StoreType + "</p>" +
                     "<p>Item: " + store.Item + "</p>";

            }
            // Add the list of receipts to the message body
            _messageBody += "Receipts:\n";
            if (customer.Receipt != null)
            {
                foreach (var receipt in customer.Receipt)
                {
                    _messageBody += $"{receipt}\n";
                    _messageBody += $"{receipt.FileName}\n";
                }
            }
            _messageBody += "\n";



            builder.HtmlBody = _messageBody;
            email.Body = builder.ToMessageBody();

            //Attach files from each store

            byte[] fileBytes;
            if (customer.Receipt != null)
                foreach (var file in customer.Receipt)
                {
                    if (file.Length > 0)
                    {
                        using (var ms = new MemoryStream())
                        {
                            file.CopyTo(ms);
                            fileBytes = ms.ToArray();
                        }
                        builder.Attachments.Add(file.FileName, fileBytes, ContentType.Parse(file.ContentType));
                    }
                }
            try
            {
                using var smtp = new SmtpClient();
                smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
                smtp.Authenticate(_mailSettings.Mail, _mailSettings.Password);
                await smtp.SendAsync(email);
                smtp.Disconnect(true);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        //Email to customer
        public async Task SendEmailAsyncToCustomer(Customer customer)
        {
            var email = new MimeMessage();

            email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
            email.To.Add(MailboxAddress.Parse(customer.Email));
            email.Subject = "Your order has been placed with Return Done!";
            var builder = new BodyBuilder();
            // Create the message body

            _messageBody = "<p>Thank you from Return Done team!</p>" +
                     "<p>Your pickup request has been received.</p>" +
                     "<p>Please use " + customer.Code + " as your reference number for any future communication related to this order.</p>";

            builder.HtmlBody = _messageBody;
            email.Body = builder.ToMessageBody();

            try
            {
                using var smtp = new SmtpClient();
                smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
                smtp.Authenticate(_mailSettings.Mail, _mailSettings.Password);
                await smtp.SendAsync(email);
                smtp.Disconnect(true);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public string GetMessageBody()
        {
            return _messageBody;
        }
    }
}
