using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using TMSBL;
using Unity;
using Unity.AspNet.WebApi;

namespace TMSAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // unity for denpendency injection
            var container = new UnityContainer();
            //đăng ký BL
            container.RegisterType<IBaseBL, BaseBL>();
            container.RegisterType<ITestBL, TestBL>();
            container.RegisterType<IUserBL, UserBL>();
            container.RegisterType<IProgramBL, ProgramBL>();
            container.RegisterType<IClassBL, ClassBL>();
            container.RegisterType<ISubjectBL, SubjectBL>();
            container.RegisterType<ITopicBL, TopicBL>();
            container.RegisterType<ILessonBL, LessonBL>();
            container.RegisterType<IUserRoleBL, UserRoleBL>();


            config.DependencyResolver = new UnityResolver(container);
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
