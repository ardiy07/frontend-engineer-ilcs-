import React from "react";

function BookingDetails({ spot }) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-semibold text-center text-[#17529D]">Booking Detail Tempat Parkir</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Nama</label>
          <input
            type="text"
            className="border border-[#17529D] p-2 w-full rounded-md"
            value={spot.booked?.nama}
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Nomor Kendaraan</label>
          <input
            type="text"
            className="border border-[#17529D] p-2 w-full rounded-md"
            value={spot.booked?.nomor_kendaraan}
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Waktu Parkir</label>
          <input
            type="text"
            className="border border-[#17529D] p-2 w-full rounded-md"
            value={spot.booked?.waktu_parkir.replace(/\./g, ':') + ' WIB'}
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Duration</label>
          <input
            type="text"
            className="border border-[#17529D] p-2 w-full rounded-md"
            value={spot.booked?.duration + ' Jam'}
            disabled
          />
        </div>
      </form>
    </div>
  );
}

export default BookingDetails;
