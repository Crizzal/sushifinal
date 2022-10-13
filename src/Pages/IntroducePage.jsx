import React from "react";
import phan from "../assets/image/phan.png";
import withLayout from "../HOCs/WithLayout";

const IntroducePage = () => {
  return (
    <div className="max-w-[1360px] m-auto px-4">
      <div className="relative mt-8">
        <img
          src="https://sushiway.com.vn/wp-content/uploads/2022/07/banner-gt.png"
          alt=""
          className="h-[800px] md:h-auto"
        />
        <div className="absolute w-3/4 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-base font-bold">
            Mới được thành lập từ tháng 06/2021. Sushi Way Là chuỗi nhà hàng
            chuyên giao các món Nhật như sushi, sashimi, cơm cuộn, cơm bento,
            salad… chỉ phục vụ dưới hình thức Delivery & Take Away. Với mục tiêu
            giúp mọi người hoàn toàn có thể thưởng thức các món ăn Nhật Bản tươi
            ngon ngay tại nhà chỉ trong vòng 60 phút.
          </div>
          <img src={phan} alt="" />
        </div>
      </div>

      <div className="mt-8">
        <div className="w-full flex">
          <div className="m-auto px-5 py-3 mb-5 rounded-xl font-bold text-white text-2xl md:text-4xl bg-[#B61C0B] text-center">
            HỆ THỐNG CHI NHÁNH
          </div>
        </div>
        <img
          className="mt-8"
          src="https://sushiway.com.vn/wp-content/uploads/2022/09/SSW-bannerchinhanh-2209-1318x395px-01-1536x460.png"
          alt=""
        />
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div className="flex flex-col gap-4">
          <img
            src="https://sushiway.com.vn/wp-content/uploads/2022/07/Rectangle-17.png"
            alt=""
          />
          <img
            src="https://sushiway.com.vn/wp-content/uploads/2022/07/Rectangle-17-1.png"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full flex">
            <div className="px-5 py-3 mb-5 rounded-xl font-bold text-white text-2xl md:text-4xl bg-[#B61C0B]">
              TẦM NHÌN
            </div>
          </div>
          <div className="text-base font-bold">
            Các món ăn được thực hiện từ tay các đầu bếp kinh nghiệm nhà hàng
            Nhật đặc biệt là đầu bếp Hoshi Phan – Người sáng lập và là bếp
            trưởng điều hành giám sát ngay từ khâu nhập các nguyên liệu tươi
            sống chất lượng bậc nhất như cá hồi Nauy, cá ngừ, cá cam… và chỉ
            nhập tươi hàng ngày. Mong muốn mang lại những món ăn tươi ngon tới
            khách hàng, hướng tới mục tiêu trở thành chuỗi nhà hàng món nhật có
            quy mô và hệ thống lớn nhất trên khắp cả nước
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between flex-col-reverse md:flex-row items-center gap-4">
        <div className="w-full md:w-1/2">
          <div className="w-full flex">
            <div className="px-5 py-3 mb-5 rounded-xl font-bold text-white text-2xl md:text-4xl bg-[#B61C0B]">
              DỊCH VỤ
            </div>
          </div>
          <div className="text-base font-bold">
            Với chuỗi hệ thống chi nhánh Bếp khép kín chế biến trong môi trường
            lạnh, các món ăn được đảm bảo vệ sinh theo những tiêu chuẩn khắt khe
            nhất. Dịch vụ shipper của Sushi Way đáp ứng các đơn đặt hàng trong
            thời gian nhanh nhất, bên cạnh đó với thiết kế đặc biệt của hộp đựng
            giữ lạnh, các món ăn sẽ được giao tận tay thực khách mà không hề bị
            thay đổi chất lượng với các loại hải sản tươi ngon.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img
            src="https://sushiway.com.vn/wp-content/uploads/2022/07/image-64.png"
            alt=""
          />
        </div>
      </div>

      <div className="mt-8">
        <div className="w-full flex">
          <div className="px-5 py-3 mb-5 rounded-xl font-bold text-white text-2xl md:text-4xl bg-[#B61C0B]">
            ĐA DẠNG
          </div>
        </div>
        <img
          src="https://sushiway.com.vn/wp-content/uploads/2022/07/gioi-thieu-banner-1536x586.jpg"
          alt=""
        />
      </div>

      <div className="mt-8 flex justify-between flex-col md:flex-row gap-5">
        <div className="flex flex-col w-full md:w-1/3 items-center">
          <img
            className="w-[120px]"
            src="https://sushiway.com.vn/wp-content/uploads/2022/07/icon-ssw-1-1-1.png"
            alt=""
          />
          <h2 className="text-xl block mb-3 font-bold">
            Chọn yêu thích của bạn
          </h2>
          <p className="text-center text-base">
            Chọn bữa ăn yêu thích của bạn và đặt hàng trực tuyến hoặc qua điện
            thoại. Thật dễ dàng để tùy chỉnh đơn đặt hàng của bạn.
          </p>
        </div>

        <div className="flex flex-col w-full md:w-1/3 items-center">
          <img
            className="w-[120px]"
            src="https://sushiway.com.vn/wp-content/uploads/2022/07/icon-ssw-2-2.png"
            alt=""
          />
          <h2 className="text-xl block mb-3 font-bold">
            Cung cấp các bữa ăn cho bạn
          </h2>
          <p className="text-center text-base">
            Chúng tôi đã chuẩn bị và giao bữa ăn đến tận nhà cho bạn.
          </p>
        </div>

        <div className="flex flex-col w-full md:w-1/3 items-center">
          <img
            className="w-[120px]"
            src="https://sushiway.com.vn/wp-content/uploads/2022/07/icon-ssw-3-1-1.png"
            alt=""
          />
          <h2 className="text-xl block mb-3 font-bold">Ăn và thưởng thức</h2>
          <p className="text-center text-base">
            Không mua sắm, không nấu nướng và không dọn dẹp. Cùng gia đình
            thưởng thức những bữa ăn lành mạnh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default withLayout(IntroducePage);
