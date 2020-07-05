import { Injectable, Output, EventEmitter } from '@angular/core';
import { Toast } from 'src/app/base/base-model/toast-model';

@Injectable({
  providedIn: 'root'
})
/// Output = nơi gọi subscribe hứng dữ liệu
/// hàm tương ứng output = nhận đầu vào dữ liệu
export class TransferDataService {
  // thông báo
  @Output()
  notification: EventEmitter<any> = new EventEmitter();
  // notify toast
  @Output()
  toastObject: EventEmitter<any> = new EventEmitter();
  constructor() { }
  // thông báo
  valueChangedNotify(data: Toast) {
    this.notification.emit(data);
  }

  showErrorToast(message?: string) {
    if (!message)
      message = "Có lỗi xảy ra!";
    const toast = new Toast(message, "error");
    this.toastObject.emit(toast);
  }

  /**
   * Hiển thị toast thông báo thành công
   * @param message
   */
  showSuccessToast(message: string) {
    const toast = new Toast(message, "success");
    this.toastObject.emit(toast);
  }

  /**
   * Hiển thị toast cảnh báo
   * @param message
   */
  showWarningToast(message: string) {
    const toast = new Toast(message, "warning");
    this.toastObject.emit(toast);
  }
}
