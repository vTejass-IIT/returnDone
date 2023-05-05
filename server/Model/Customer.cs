using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Xml.Linq;

namespace SendEmailDotNetCoreWebAPI.Model
{
    public class Customer
    {
        public string TimeSlot { get; set; }
        public long Date { get; set; }
        public List<Store> StoreNames { get; set; }
        public string PickupAddress { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Code { get; set; }
        public List<IFormFile> Receipt { get; set; }
    }

    public class Store
    {
        public int Item { get; set; }
        public string StoreType { get; set; }
        public string Name { get; set; }
    }
}

