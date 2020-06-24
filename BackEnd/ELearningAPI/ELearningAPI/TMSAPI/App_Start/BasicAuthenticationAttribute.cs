using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Principal;
using System.Threading;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using TMSBL;

namespace TMSAPI
{
    public class BasicAuthenticationAttribute : AuthorizationFilterAttribute
    {
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            string uri = actionContext.Request.RequestUri.LocalPath.ToLower();
            if (uri.StartsWith("/api/user/login") || uri.StartsWith("/api/test/value") || uri.StartsWith("/api/user/signup"))
            {
                return;
            }
            if (actionContext.Request.Headers.Authorization != null)
            {
                var authToken = actionContext.Request.Headers.Authorization.Parameter;

                var decodeauthToken = System.Text.Encoding.UTF8.GetString(Convert.FromBase64String(authToken));

                // at 0th postion of array we get username and at 1st we get password  
                // tạm thời chỉ validate xem có userID trong hệ thống ^_^
                if (IsAuthorizedUser(int.Parse(decodeauthToken)))
                {
                    Thread.CurrentPrincipal = new GenericPrincipal(
                    new GenericIdentity(decodeauthToken), null);
                }
                else
                {
                    actionContext.Response = actionContext.Request
                    .CreateResponse(HttpStatusCode.Unauthorized);
                }
            }
            else
            {
                actionContext.Response = actionContext.Request
                 .CreateResponse(HttpStatusCode.Unauthorized);
            }
        }

        public static bool IsAuthorizedUser(int userID)
        {
            var auth = new BaseBL();
            var res = auth.ExecuteScalarUsingStoredProcedure<object>("Proc_ValidateToken", new { v_UserID = userID });
            if (res.ToString() == "1")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
