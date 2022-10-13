import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import New from "../Components/Common/New";
import withLayout from "../HOCs/WithLayout";

const NewsDetail = () => {
  return (
    <div className="md:mt-8 px-2 w-full md:max-w-[1360px] m-auto">
      <div className="md:flex items-center text-base mt-2">
        <Link to="/" className="inline">
          Trang chủ
        </Link>{" "}
        <span className="mx-1">/</span>
        <p className="text-[#848484] inline">
          ĐẶC QUYỀN ƯU ĐÃI CHO THÀNH VIÊN: GIẢM ĐẾN 15%
        </p>
      </div>

      <div className="flex mt-5">
        <div className="m-auto max-w-[1080px]">
          <img
            src="https://sushiway.com.vn/wp-content/uploads/2022/09/1013x675.png"
            alt=""
            className="w-full"
          />
          <div className="p-[6px] mt-5 mb-4 bg-[#FFF4F3] rounded-md text-xs text-[#B61C0B] inline-block">
            Chuyên mục Sushiway,
          </div>
          <h1 className="text-2xl text-black font-semibold block mb-3">
            ĐẶC QUYỀN ƯU ĐÃI CHO THÀNH VIÊN: GIẢM ĐẾN 15%
          </h1>
          <div className="text-base text-black">
            ĐẶC QUYỀN ƯU ĐÃI CHO THÀNH VIÊN: GIẢM ĐẾN 15% <br /> Đến Sushi Way,
            gọi món không cần nhìn giá là có thật fans nhé. Bởi vì, chỉ cần là
            thành viên, fans sẽ được giảm giá “khủng” theo hạng mức: <br />– Thẻ
            Bạc: Giảm 5% trên tổng hóa đơn. <br />– Thẻ Vàng: Giảm 10% trên tổng
            hóa đơn. – Thẻ Bạch Kim: Giảm 15% trên tổng hóa đơn. Lưu ý:
            <br /> – Chương trình được diễn ra xuyên suốt không có thời hạn.
            <br /> – Không áp dụng đồng thời với các chương trình khuyến mãi
            khác. <br />– Khi thanh toán chỉ cần đọc SĐT để đăng kí thành viên
            và sẽ được hưởng ưu đãi từ hệ thống Membership của Sushi Way. Ngoài
            ra, khi Fans đặt bàn tối thiểu trước 6 tiếng sẽ được TẶNG 1 BÁNH
            SINH NHẬT hoành tráng. Chương trình chỉ áp dụng khi ăn tại cửa hàng
            và không áp dụng cho delivery. Đừng quên mang theo CMND hoặc CCCD để
            xuất trình với nhân viên để nhận bánh kem fans nhé. Quá nhiều ưu
            đãi, quá nhiều đặc quyền, ghé Sushi Way và “triển” ngay một bữa thật
            hoành tráng thôi nào! Fan vui lòng đặt món trực tiếp qua fanpage
            hoặc website: https://sushiway.com.vn/thuc-don/ Hotline: 0899 091
            779 #sushiway #sushi #sashimi #monnhat #amthucnhatban
            #antruatietkiem #freeship #dacquyenthanhvien #Membership
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-14">
        <div className="flex justify-between items-center mb-5 md:mb-10">
          <h1 className="text-2xl font-semibold">Bài viết khác</h1>
          <div className="text-base md:text-lg text-[#B61C0B] cursor-pointer flex items-center gap-3">
            <p>Xem thêm</p>
            <div className="text-sm md:text-base">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {Array(3)
            .fill(0)
            .map((item, index) => (
              <New key={index} />
            ))}
        </div>
      </div>

      <form className="mt-10 bg-[#F2F2F2] px-6 pt-4">
        <div className="text-xl text-black mb-2 font-bold">Trả lời</div>
        <div className="text-base mb-2 text-black">
          Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc
          được đánh dấu *
        </div>
        <div className="flex flex-col">
          <label
            className="text-sm text-[#222222] font-semibold mb-1"
            htmlFor="comment"
          >
            Bình luận *
          </label>
          <textarea
            name=""
            id="comment"
            cols="30"
            rows="10"
            className="p-2 mb-2 border-[#ddd] border outline-none"
          ></textarea>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-4 ">
          <div className="flex flex-col flex-1">
            <label
              className="text-sm text-[#222222] font-semibold mb-1"
              htmlFor="name"
            >
              Tên *
            </label>
            <input
              type="text"
              className="p-2 mb-2 border-[#ddd] border outline-none"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label
              className="text-sm text-[#222222] font-semibold mb-1"
              htmlFor="email"
            >
              Email *
            </label>
            <input
              type="text"
              className="p-2 mb-2 border-[#ddd] border outline-none"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label
              className="text-sm text-[#222222] font-semibold mb-1"
              htmlFor="web"
            >
              Trang web
            </label>
            <input
              type="text"
              className="p-2 mb-2 border-[#ddd] border outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#446084] text-white text-lg font-semibold px-5 py-1 mb-4"
        >
          PHẢN HỒI
        </button>
      </form>
    </div>
  );
};

export default withLayout(NewsDetail);
