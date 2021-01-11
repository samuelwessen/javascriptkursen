using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using AzureFunctions.Models;

namespace AzureFunctions
{
    public static class AddProducts
    {
        [FunctionName("AddProducts")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req,
            [CosmosDB(databaseName: "win20", collectionName: "products", ConnectionStringSetting = "CosmosDB", CreateIfNotExists = true)] out Product cosmos,
            ILogger log)
        {

            string requestBody = new StreamReader(req.Body).ReadToEnd();
            var product = JsonConvert.DeserializeObject<Product>(requestBody);

            if (product != null)
            {
                cosmos = product;
                return new OkResult();
            }
                
            else
            {
                cosmos = null;
                return new BadRequestResult();
            }
        }
    }
}
