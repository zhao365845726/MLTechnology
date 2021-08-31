using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MLTechnology
{
  public class ConfigurationManager
  {
    ///注入IConfiguration
    public static IConfiguration Configuration { get; set; }

    public ConfigurationManager()
    {
      Configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")//你的配置文件
                .Build();
    }

    public static object getSection(string section)
    {
      if(section.IndexOf('.') > 0)
      {
        string[] arrSection = section.Split('.');
        string sectionName = string.Empty;
        string sectionValue = string.Empty;
        IConfigurationSection sectionConfig;
        for (int i = 0; i < arrSection.Length; i++)
        {
          if(i == arrSection.Length - 1)
          {
            //则返回最终的值
            sectionConfig = getNextSection(arrSection[i]);
            sectionValue = sectionConfig.Value;
          }
          else
          {
            //一直请求getSection
            sectionConfig = getNextSection(arrSection[i]);
          }

        }
        return sectionValue;
      }
      return Configuration.GetSection(section).Value;
    }

    private static IConfigurationSection getNextSection(string sectionName)
    {
      return Configuration.GetSection(sectionName);
    }
  }
}
