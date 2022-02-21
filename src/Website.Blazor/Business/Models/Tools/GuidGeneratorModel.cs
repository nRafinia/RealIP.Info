using System.ComponentModel;

namespace Business.Models.Tools
{
    public class GuidGeneratorModel
    {
        [DisplayName("Uppercase")]
        public Boolean Uppercase { get; set; }

        [DisplayName("Braces")]
        public Boolean Braces { get; set; }

        [DisplayName("Hyphens")]
        public Boolean Hyphens { get; set; }
    }
}