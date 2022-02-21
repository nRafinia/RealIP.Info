using System.ComponentModel.DataAnnotations;

namespace Business.Models.Tools
{
    public class PassGeneratorModel
    {
        [Display(Name = "Include Uppercase Characters (A-Z)")]
        public Boolean UpperCase { get; set; }

        [Display(Name = "Include Lowercase Characters (a-z)")]
        public Boolean LowerCase { get; set; }

        [Display(Name = "Include Numbers (1234567890)")]
        public Boolean Numberic { get; set; }

        [Display(Name = "Include Symbols (*$-+?_&=!%{}/)")]
        public Boolean SpecialChar { get; set; }

        [Display(Name = "Custom Characters")]
        public Boolean CustomChar { get; set; }

        [Display(Name = "Custom Characters")]
        [DataType(DataType.Text)]
        public string Custom { get; set; }

        [Display(Name = "Password Length")]
        public int Len { get; set; }

        [Display(Name = "Prefix")]
        [DataType(DataType.Text)]
        public string Prefix { get; set; }

        [Display(Name = "Suffix")]
        [DataType(DataType.Text)]
        public string Suffix { get; set; }
    }
}