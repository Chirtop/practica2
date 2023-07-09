// using Microsoft.AspNetCore.Mvc;
// using System;
// using System.IO;
// using Newtonsoft.Json;
//
// namespace webapi.Controllers;
//
// [Route("[controller]")]
// [ApiController]
// public class PersonsController : Controller
// {
//     [HttpGet]
//     public ActionResult<string> Get(int id, [FromHeader] string token, [FromQuery] string term)
//     {
//         string jsonContents = System.IO.File.ReadAllText("Persons.json");
//         Person[] persons =  JsonConvert.DeserializeObject<Person[]>(jsonContents);
//         
//         for (int i = 0; i < persons.Length; i++)
//         {
//             if(persons[i].email.Contains(term)) 
//                 return Ok(persons[i].email);
//                 
//         }
//         return NotFound();
//     }
// }
//
// public class Person
// {
//     public int id { get; set; }
//     public string email { get; set; }
//     public string company { get; set; }
//     public string name { get; set; }
//     public string age { get; set; }
//     
// }



using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using Newtonsoft.Json;

namespace webapi.Controllers;

[Route("[controller]")]
[ApiController]
public class PersonsController : Controller
{
    [HttpGet]
    public ActionResult<string> Get(int id, [FromHeader] string token, [FromQuery] string term)
    {
        string jsonContents = System.IO.File.ReadAllText("Persons.json");
        Person[] persons =  JsonConvert.DeserializeObject<Person[]>(jsonContents);
        List<string> searchResult = new List<string>();
        
            for (int i = 0; i < persons.Length; i++)
            {
                if(persons[i].email.Contains(term))
                    searchResult.Add(persons[i].email);
            }
            if (searchResult.Count != 0)
            {
                return Ok(searchResult);
            }
            
        return NotFound();
    }
}

public class Person
{
    public int id { get; set; }
    public string email { get; set; }
    public string company { get; set; }
    public string name { get; set; }
    public string age { get; set; }
    
}