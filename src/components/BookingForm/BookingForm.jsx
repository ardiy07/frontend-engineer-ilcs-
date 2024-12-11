import React, { useState } from "react";

function BookingForm({ spot, onBookingSubmit }) {
  const [nama, setNama] = useState("");
  const [nomorKendaraan, setNomorKendaraan] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama || !nomorKendaraan || !duration) {
      alert("Harap isi semua form");
      return;
    }

    const bookingData = {
      nama: nama,
      nomor_kendaraan: nomorKendaraan,
      waktu_parkir: new Date().toLocaleTimeString(),
      duration: duration,
    };

    onBookingSubmit(spot.id, bookingData);
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-semibold text-center text-[#17529D]">Booking Tempat Parkir</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Nama</label>
          <input
            type="text"
            className="border border-[#17529D] p-2 w-full rounded-md"
            placeholder="Masukan Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Nomor Kendaraan</label>
          <input
            type="text"
            className="border border-[#17529D] p-2 w-full rounded-md"
            placeholder="Masukan Nomor Kendaraan"
            value={nomorKendaraan}
            onChange={(e) => setNomorKendaraan(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Duration (Dalam Jam)</label>
          <input
            type="number"
            className="border border-[#17529D] p-2 w-full rounded-md"
            placeholder="Masukan Duration Parkir"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#17529D] text-white py-2 px-4 rounded-md w-full"
        >
          Booking Parkir
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
