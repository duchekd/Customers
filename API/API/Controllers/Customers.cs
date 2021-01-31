using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Customers : ControllerBase
    {
        //defaultní zákazníci
        public static List<Cstmr> CustomersList = new List<Cstmr>
        {
            new Cstmr{Id=0,Name="Conor", Surname="McGregor", Country="Ireland", Phone="777444222"},
            new Cstmr{Id=1, Name="Dustin",Surname="Poirier", Country="United States", Phone="741458469"}
        };

        public static int CustomersCount = CustomersList.Count;

        //Získat seznam zákazníků
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(CustomersList);
        }

        //Vytvořit nového zákazníka
        [HttpPut]
        public IActionResult Put(string Name, string Surname, string Country, string Phone)
        {
            CustomersList.Add(new Cstmr { Id = CustomersCount, Name = Name, Surname = Surname, Country = Country, Phone = Phone });
            CustomersCount++;
            return Ok(CustomersList);
        }

        //Odstranit zákazníka
        [HttpDelete]
        public IActionResult Delete(int Id)
        {
            for (int i = 0; i < CustomersList.Count; i++)
            {
                if (CustomersList[i].Id == Id)
                {
                    CustomersList.Remove(CustomersList[i]);
                }
            }
            return Ok(CustomersList);
        }

        //Upravit existujícího zákazníka
        [HttpPost]
        public IActionResult Post(int Id, string Name, string Surname, string Country, string Phone)
        {
            for (int i = 0; i < CustomersList.Count; i++)
            {
                if (CustomersList[i].Id == Id)
                {
                    CustomersList[i].Name = Name;
                    CustomersList[i].Surname = Surname;
                    CustomersList[i].Country = Country;
                    CustomersList[i].Phone = Phone;
                }
            }

            return Ok(CustomersList);

        }

    }
}
