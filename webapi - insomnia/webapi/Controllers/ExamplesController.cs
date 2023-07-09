using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers;

[Route("[controller]")]
[ApiController]
public class ExamplesController : Controller
{
    [HttpGet("{id}")]
    public ActionResult<string> Get(int id, [FromHeader] string token, [FromQuery] string term)
    {
        string message = id.ToString() + " " + token + " " + term;
        if (token != "abc")
        {
            return Unauthorized("unauthorized");
        }
        return Ok(message);
    }
    
    [HttpPost]
    public ActionResult<string> Get(int id, [FromHeader] string token, [FromQuery] string term, [FromBody] POSTResponseBody postBody)
    {
        // string message = id.ToString() + " " + token + " " + term;
        // if (token != "abc")
        // {
        //     return Unauthorized("unauthorized");
        // }
        
        return Ok(postBody.SomeString + " " + postBody.SomeInt);
    }
}

public class POSTResponseBody
{
    public bool SomeBool { get; set; }
    public string SomeString { get; set; }
    public int SomeInt { get; set; }
}
