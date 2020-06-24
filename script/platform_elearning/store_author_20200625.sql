CREATE PROCEDURE platform_elearning.Proc_Login(IN v_UserName VARCHAR(255), IN v_Password VARCHAR(255))
  SQL SECURITY INVOKER
  COMMENT 'đăng nhập'
BEGIN
SELECT * FROM user AS U
	WHERE U.UserName = v_UserName AND U.Password = v_Password;
END;

  CREATE PROCEDURE platform_elearning.Proc_ValidateToken(IN v_UserID INT)
  SQL SECURITY INVOKER
  COMMENT 'Kiểm tra user có trong hệ thống'
BEGIN
    SELECT CASE WHEN U.UserID IS NOT NULL
				 THEN 1
				 ELSE 0
			END AS Valid
	FROM	user AS U 
	WHERE	U.UserID = v_UserID;
END