using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackendReastaurant.Models
{
  public class User
  {
    [Key]
    public int userId { get; set; }
    [Required]
    [Column(TypeName = "nvarchar(30)")]
    public string FirstName { get; set; }
    [Required]
    [Column(TypeName = "nvarchar(30)")]
    public string LastName { get; set; }
    [Required]
    [Column(TypeName = "nvarchar(15)")]
    public string PhoneNumber { get; set; }
    [Required]
    [Column(TypeName = "nvarchar(30)")]
    public string UserEmail { get; set; }

  }
}
