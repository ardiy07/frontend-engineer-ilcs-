import React from "react";
import { Rect, Text } from "react-konva";

function Spot({
  spot,
  index,
  colums,
  rectWidth,
  rectHeigh,
  stadePadding,
  onSpotClick,
}) {
  const x = (index % colums) * (rectWidth + stadePadding);
  const y = Math.floor(index / colums) * (rectHeigh + stadePadding);
  return (
    <>
      <Rect
        x={x + 5}
        y={y}
        width={rectWidth}
        height={rectHeigh}
        fill={spot.status === "empty" ? "white" : "#17529D"}
        stroke="#17529D"
        strokeWidth={2}
        onClick={() => onSpotClick(spot)}
      />
      <Text
        x={x}
        y={y + rectHeigh / 2 - 10}
        width={rectWidth}
        align="center"
        text={spot.status === "empty" ? `Spot ${spot.id}` : "Booked"}
        fill={spot.status === "empty" ? "#17529D" : "white"}
        fontSize={16}
        fontStyle="bold"
      />
    </>
  );
}

export default Spot;
