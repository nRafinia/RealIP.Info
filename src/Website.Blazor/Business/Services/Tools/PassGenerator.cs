using Business.Models.DI;
using Business.Models.Tools;
using MlkPwgen;

namespace Business.Services.Tools
{
    public class PassGenerator : ISingleton
    {
        private const string CharsLCase = "abcdefgijkmnopqrstwxyz";
        private const string CharsUCase = "ABCDEFGHJKLMNPQRSTWXYZ";
        private const string CharsNumeric = "0123456789";
        private const string CharsSpecial = "*$-+?_&=!%{}/";

        public string Generate(PassGeneratorModel model)
        {
            var pLen = model.Prefix?.Length ?? 0;
            var sLen = model.Suffix?.Length ?? 0;
            if (pLen + sLen > model.Len)
            {
                return model.Prefix + model.Suffix;
            }

            var len = model.Len - pLen - sLen;
            var passStr = string.Empty;
            if (model.LowerCase)
                passStr += CharsLCase;
            if (model.UpperCase)
                passStr += CharsUCase;
            if (model.Numberic)
                passStr += CharsNumeric;
            if (model.SpecialChar)
                passStr += CharsSpecial;

            if (!string.IsNullOrWhiteSpace(model.Custom))
                passStr = model.Custom;

            if (string.IsNullOrWhiteSpace(passStr))
                return string.Empty;

            var res = PasswordGenerator.Generate(len, passStr);
            res = $"{model.Prefix}{res}{model.Suffix}";
            return res;
        }
    }
}