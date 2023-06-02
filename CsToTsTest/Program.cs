using CsToTs;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace CsToTsTest
{
    class Program
    {
        const string BasePath = @"...\Lib";
        const string ExportFileName = "types.ts";

        static void Main(string[] args)
        {
            AppDomain.CurrentDomain.AssemblyResolve += CurrentDomain_AssemblyResolve;

            var assembly = Assembly.Load(File.ReadAllBytes(Path.Combine(BasePath, "....dll")));

            var types = assembly.GetTypes().ToList();

            var typeScriptFile = Generator.GenerateTypeScript(new TypeScriptOptions
            {
                TypeRenamer = (type) =>
                {
                    return ToCamelCase(type);
                },
                MemberRenamer = (member) =>
                {
                    return ToCamelCase(member.Name);
                }
            }, types.Where(x => IsValidType(x)));

            Console.WriteLine(typeScriptFile);

            Console.WriteLine($"File created: {ExportFileName}");
            
            File.WriteAllText(ExportFileName, typeScriptFile);

            Console.ReadLine();
        }

        public static string ToCamelCase(string s)
        {
            if (string.IsNullOrEmpty(s))
            {
                return s;
            }
            if (!char.IsUpper(s[0]))
            {
                return s;
            }
            char[] array = s.ToCharArray();
            for (int i = 0; i < array.Length; i++)
            {
                bool flag = i + 1 < array.Length;
                if (i > 0 && flag && !char.IsUpper(array[i + 1]))
                {
                    break;
                }
                array[i] = char.ToLower(array[i], CultureInfo.InvariantCulture);
            }
            return new string(array);
        }

        private static Assembly CurrentDomain_AssemblyResolve(object sender, ResolveEventArgs args)
        {
            Console.WriteLine(args.Name);

            return Assembly.Load(File.ReadAllBytes(Path.Combine(BasePath, args.Name.Remove(args.Name.IndexOf(',')) + ".dll")));
        }

        private static bool IsValidType(Type type)
        {
            if (type.IsInterface)
                return false;

            if (type.IsAbstract)
                return false;

            if (!type.IsPublic)
                return false;

            if (IsAnonymousType(type))
                return false;

            if (type.IsClass && !(type.Name.EndsWith("DTO") || type.Name.EndsWith("CO")))
                return false;

            return true;
        }

        private static bool IsAnonymousType(Type type)
        {
            if (type == null)
                throw new ArgumentNullException("type");

            return Attribute.IsDefined(type, typeof(CompilerGeneratedAttribute), false)
                && type.IsGenericType && type.Name.Contains("AnonymousType")
                && (type.Name.StartsWith("<>") || type.Name.StartsWith("VB$"))
                && type.Attributes.HasFlag(TypeAttributes.NotPublic);
        }
    }
}
