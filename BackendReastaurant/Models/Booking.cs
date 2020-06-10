using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackendReastaurant.Models
{
  public class Booking
  {
    [Key]
    public int BookingId { get; set; }
    [Required]
    [Column(TypeName = "nvarchar(30)")]
    public string FirstName { get; set; }
    [Required]
    [Column(TypeName = "nvarchar(30)")]
    public string LastName { get; set; }
    [Required]
    [Column(TypeName = "int")]
    public int CountSeats { get; set; }
    [Required]
    [Column(TypeName = "nvarchar(20)")]
    public string Date { get; set; }
    [Required]
    [Column(TypeName = "nvarchar(30)")]
    public string UserEmail { get; set; }
    [Required]
    [Column(TypeName = "nvarchar(15)")]
    public string PhoneNumber { get; set; }
    [Required]
    [Column(TypeName = "nvarchar(50)")]
    public string Wishes { get; set; }
  }
}
