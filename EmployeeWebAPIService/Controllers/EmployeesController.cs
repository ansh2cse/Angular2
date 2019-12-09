using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EmployeeWebAPIService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeesController : ControllerBase
    {
        private static readonly List<Employee> Employees = new List<Employee>
        {
            new Employee {
            Code= "emp101",Name= "Tom",Gender= "Male",
            AnnualSalary= 5500,DateOfBirth= "6/25/1988"
            },
            new Employee {
            Code= "emp102", Name= "Alex", Gender= "Male",
            AnnualSalary= 5700.95, DateOfBirth= "9/6/1982"
            },
            new Employee {
            Code= "emp103", Name= "Mike", Gender= "Male",
            AnnualSalary= 5900, DateOfBirth= "12/8/1979"
            },
            new Employee {
            Code= "emp104", Name= "Mary", Gender= "Female",
            AnnualSalary= 6500.826, DateOfBirth= "10/14//1980"
            }
        };

        private readonly ILogger<EmployeesController> _logger;

        public EmployeesController(ILogger<EmployeesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            System.Threading.Thread.Sleep(2000);
            return Employees;
        }
        [HttpGet("{code}")]
        public Employee Get(string code)
        {
            return Employees.FirstOrDefault(e => e.Code == code);
        }
    }
}
