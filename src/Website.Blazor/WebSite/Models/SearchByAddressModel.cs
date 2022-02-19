using System.ComponentModel.DataAnnotations;

namespace WebSite.Models;

public class SearchByAddressModel
{
    [Required]
    public string Address { get; set; }
}