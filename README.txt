ODOO QUIZ - MEMBERS

BẢNG HƯỚNG DẪN SỬ DỤNG FILE

| File | Chức năng | Cách sử dụng |
|---|---|---|
| index.html | Giao diện bài quiz | Mở bằng Live Server, sau đó truy cập địa chỉ website được cung cấp. |
| script.js | Xử lý câu hỏi, chấm điểm và localStorage | Không cần mở trực tiếp; được index.html tự động nạp. |
| style.css | Định dạng giao diện | Không cần mở trực tiếp; được index.html tự động nạp. |
| README.txt | Tài liệu hướng dẫn | Đọc file này để xem cách chạy và các lưu ý của ứng dụng. |
| mau-chung-nhan-tham-khao.pdf | File PDF tham khảo | Mở bằng trình đọc PDF khi cần xem mẫu chứng nhận. |
| .vscode/launch.json | Cấu hình chạy Chrome bằng VS Code | Mở project trên cổng 8080, sau đó chạy cấu hình "Launch Chrome against localhost" trong mục Run and Debug. |

CÁC BƯỚC SỬ DỤNG

1. Mở folder bằng VS Code.
2. Cài và khởi động Live Server cho file index.html.
3. Nếu dùng cấu hình launch.json, bảo đảm ứng dụng đang chạy tại http://localhost:8080.
4. Thành viên nhập họ tên và làm bài.
5. Chỉ kết quả đạt trên 80% và đủ điều kiện nhận chứng nhận mới được lưu bằng localStorage.
6. Nếu bài có đầy đủ answer key và điểm > 80%, nút "Xem phiếu khen thưởng" xuất hiện.
7. Nhấn "In / Lưu PDF" để in hoặc Save as PDF.

LƯU Ý:
- Đây là phiên bản frontend-only.
- localStorage KHÔNG đồng bộ giữa nhiều máy/điện thoại.
- Nếu muốn tất cả thành viên ở các thiết bị khác nhau cùng lưu vào một danh sách chung,
  cần thêm backend/database (ví dụ Firebase, Supabase, MySQL, SQL Server...).


CẬP NHẬT:
- Không tạo thêm Bộ Test riêng.
- Đã gắn đáp án trực tiếp vào 4 mảng hiện có:
  Mảng 06, Mảng 07, Mảng 10, Mảng 12.
