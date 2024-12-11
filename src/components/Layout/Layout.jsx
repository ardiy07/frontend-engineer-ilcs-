import React, { useEffect, useState } from "react";
import {
  getDataLocalStorage,
  saveToLocalStorage,
} from "../../utils/localStorageUtils";
import { Layer, Stage } from "react-konva";
import Spot from "../Spot/Spot";
import Modal from "../Modal/Modal";
import BookingDetails from "../BookingDetails/BookingDetails";
import BookingForm from "../BookingForm/BookingForm";
import GateFilter from "../GateFilter/GateFilter";

function Layout() {
  const [screenWidth, setScreenWidth] = useState(() => window.innerWidth);
  const [dataParkir, setDataParkir] = useState(null);
  const [filterDataGate, setFilterDataGate] = useState("gateSelatan");
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ambil data parkir
  useEffect(() => {
    const fetcData = getDataLocalStorage("dataParkir");
    setDataParkir(fetcData);
  }, []);

  //   Config resonsive layout
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //   Set jumlah kolom
  const isMobile = screenWidth <= 768;
  const mobileColumns = screenWidth < 400 ? 2 : 3;
  const desktopColumns = 5;
  const columns = isMobile ? mobileColumns : desktopColumns;

  //   set padding
  const stagePadding = 10;
  const stageWidth = screenWidth - stagePadding * 2;
  const rectWidth = stageWidth / columns - stagePadding;
  const rectHeight = 100;
  const stageHeight =
    Math.ceil(dataParkir?.gates?.[0]?.data?.length / columns) *
      (rectHeight + stagePadding) +
    stagePadding;

  // Handle ketika spot parkir di klik
  const handleSpotClick = (spot) => {
    setSelectedSpot(spot);
    setIsModalOpen(true);
  };

  //   Handle melakukan booking spot parkir
  const handleBookingSubmit = (spotId, bookingData) => {
    const updateData = { ...dataParkir };
    const gate = updateData.gates.find((gate) =>
      gate.data.some((spot) => spot.id === spotId)
    );
    const spot = gate?.data.find((spot) => spot.id === spotId);

    if (spot) {
      spot.status = "booked";
      spot.booked = bookingData;
    }

    saveToLocalStorage("dataParkir", updateData);

    setDataParkir(updateData);

    setIsModalOpen(false);
  };

  //   Handle close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSpot(null);
  };

  //   Handle filter data
  const handleFilterData = (gateName) => {
    setFilterDataGate(gateName);
  };

  if (!dataParkir) {
    return <div>Loading...</div>;
  }

  const filterData = filterDataGate
    ? dataParkir?.gates.filter((gate) => gate.name === filterDataGate)
    : dataParkir.gates;

  return (
    <>
      <GateFilter
        gates={dataParkir?.gates}
        filterDataGate={filterDataGate}
        onFilterDataChange={handleFilterData}
      />

      {filterData?.map((gate, index) => (
        <div className="p-2 mb-20 mt-14 md:mt-4">
          <div key={index}>
            <div className="py-2 rounded-t-lg border-2 border-[#17529D] border-b-0">
              <h1 className="text-center text-[#17529D] font-bold text-xl">
                {gate.label}
              </h1>
            </div>

            <div className="flex justify-center flex-col border-[#17529D] border-2 rounded-b-lg pt-2">
              <Stage
                width={stageWidth}
                height={stageHeight}
                style={{ display: "flex", justifyContent: "center",cursor: "pointer" }}
              >
                <Layer>
                  {gate.data.map((spot, index) => (
                    <Spot
                      key={spot.id}
                      index={index}
                      colums={columns}
                      spot={spot}
                      rectWidth={rectWidth}
                      rectHeigh={rectHeight}
                      stadePadding={stagePadding}
                      onSpotClick={handleSpotClick}
                    />
                  ))}
                </Layer>
              </Stage>
              <div className="px-3 mb-3">
                <h3 className="font-bold">Informasi:</h3>
                <div className="flex flex-col gap-1 mt-1 px-2">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="w-3 h-3 bg-[#17529D]"></div>
                    <p className="font-semibold tracking-tighter">
                      Tempat parkir sudah di booking
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <div className="w-3 h-3 border-[#17529D] border-2"></div>
                    <p className="font-semibold tracking-tighter">
                      Tempat parkir kosong
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {isModalOpen && selectedSpot && (
        <Modal onClose={handleCloseModal}>
          {selectedSpot.status === "booked" ? (
            <BookingDetails spot={selectedSpot} />
          ) : (
            <BookingForm
              spot={selectedSpot}
              onBookingSubmit={handleBookingSubmit}
            />
          )}
        </Modal>
      )}
    </>
  );
}

export default Layout;
