using System;

namespace TMSAPI.Controllers
{
    public class ServiceResponse
    {
        public const string DEFAULT_ERRORMESSAGE = "Có lỗi trong quá trình xử lý";

        /// <summary>
        /// Kết quả thực thi (true = success, false = lỗi)
        /// </summary>
        public bool Success { get; set; } = true;

        /// <summary>
        /// Mã lỗi phụ (để phân biệt chi tiết hơn các trường hợp lỗi ở mã lỗi chính)
        /// </summary>
        public int SubCode { get; set; }

        /// <summary>
        /// Nội dung lỗi hiển thị cho người dùng
        /// </summary>
        public string UserMessage { get; set; }

        /// <summary>
        /// Nội dung lỗi của hệ thống (phục vụ cho quá trình kiểm tra lỗi)
        /// </summary>
        public string SystemMessage { get; set; }

        /// <summary>
        /// Mã lỗi chính
        /// </summary>
        public int Code { get; set; } = 1;
        /// <summary>
        /// Dữ liệu trả về
        /// </summary>
        public object Data { get; set; }

        /// <summary>
        /// Giờ hiện tại của server
        /// </summary>
        public DateTime ServerTime { get; set; } = DateTime.Now;
        public ServiceResponse OnException(Exception ex)
        {
            if (ex != null)
            {
                this.Success = false;
                this.Code = 0;
                this.UserMessage = DEFAULT_ERRORMESSAGE;
#if true
                this.SystemMessage = ex.Message; //TODO: qvliem Tam thoi tra ve loi trong giai doan BETA
                if (ex.InnerException != null)
                {
                    this.SystemMessage += Environment.NewLine + ex.InnerException.Message;
                }
#else
                this.SystemMessage = "Exception.";
#endif
            }

            return this;
        }
    }
}