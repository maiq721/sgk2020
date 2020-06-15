using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MISA.AMIS.Core.Attribute;
using MISA.AMIS.Core.Model;
namespace TMSBO.Model
{
[ConfigTable("user_class", "",false,"")]
public class UserClass : BaseModel
{
 [Key]
/// <summary>
/// 
/// </summary>
public int ID { get; set; }
/// <summary>
/// 
/// </summary>
public int? ProgramID { get; set; }
/// <summary>
/// 
/// </summary>
public string ProgramName { get; set; }
/// <summary>
/// 
/// </summary>
public int? ClassID { get; set; }
/// <summary>
/// 
/// </summary>
public string ClassName { get; set; }
/// <summary>
/// 
/// </summary>
public int? UserID { get; set; }
/// <summary>
/// 
/// </summary>
public string FullName { get; set; }
/// <summary>
/// 
/// </summary>
public string UserName { get; set; }
/// <summary>
/// 
/// </summary>
public string RoleCode { get; set; }
/// <summary>
/// Loại user: 1 là học sinh, 2 là giáo viên
/// </summary>
public int? RoleType { get; set; }
}
}
