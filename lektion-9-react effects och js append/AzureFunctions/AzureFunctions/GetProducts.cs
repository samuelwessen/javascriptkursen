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
using System.Collections.Generic;
using System.Linq;

namespace AzureFunctions
{
    public static class GetProducts
    {
        [FunctionName("GetProducts")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
            [CosmosDB(databaseName: "win20", collectionName: "products", ConnectionStringSetting = "CosmosDB", CreateIfNotExists = true, SqlQuery = "SELECT * FROM c")] IEnumerable<Product> products,
            ILogger log)
        {

            if (products.Any())
                return new OkObjectResult(products);
            else
                return new OkObjectResult(new List<IEnumerable<Product>>());
        }
    }
}
