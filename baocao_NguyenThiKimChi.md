## Họ và tên: Nguyễn Thị Kim Chi
### MSV: 22027100
### Nhóm: Nhóm 26

# BÁO CÁO DỰ ÁN MÔN HỌC CÔNG NGHỆ PHẦN MỀM
* Bài tập nhóm: Xây dựng Web thư viện online
* User Story: Là một khách hàng, tôi muốn có chức năng đăng nhập, phục vụ việc bảo mật cho người dùng.
1. Phân tích, thiết kế
- Phân chia công việc, xác định mức độ quan trọng của từng đầu việc.
- Thiết kế giao diện login.

2. Xử lý
- Ghi phương thức đăng nhập: Sử dụng Gmail, Facebook, Github, LinkedIn.
- Ghi thông tin đăng nhập: Email, mật khẩu.
- Tạo database lưu trữ tài khoản khách hàng.
- Cài đặt chức năng.

3. Kiểm tra
- Kiểm tra tài khoản Email bắt buộc là định dạng abc@gmail.com.
- Kiểm tra mật khẩu: Độ dài từ 6 đến 20 ký tự.
- Kiểm tra tính bắt buộc đăng nhập của tất cả người dùng.
- Kiểm tra người dùng phải đăng nhập mới có thể sử sụng các tính năng khác.
- Kiểm tra khi người dùng chưa đăng nhập mà sử dụng các tính năng khác sẽ được dẫn đến trang đăng nhập trước khi sử dụng các dịch vụ.
- Kiểm tra giao diện hiển trị trên các thiết bị khác nhau.
- Kiểm tra bao phủ của từng hàm, hàm nào chưa được gọi sử dụng sẽ được loại bỏ.
- Dự đoán nơi nào của hệ thống dễ bị ẩn chứa lỗi, kiểm tra kỹ đối với tường trường hợp ở vị trí đó.

* Hướng dẫn sử dụng
- Khi chưa đăng nhập thì trên thanh header hiện button 'Login'.
- Khi đăng nhập thành công thì cuối thanh công cụ hiện button 'logout'.
- Khi đăng xuất thì thanh công cụ lại hiện login.
- Các sản phẩm trong kho thư viện riêng sẽ tính lại từ đầu để không gây xung đột trong tài khoản.