//   map 메서드를 사용하여 배열 반복 가능
//    a = 배열 안에있는 데이터로 순차적으로 변경
// i = 반복될 때 마다 0부터 1씩 커짐
//   array.map((a, i) => {
//     console.log(a);
//   });
// import Image from "next/image";
// import aaa from "/public/food0.png";

"use client";
import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [수량, 수량변경] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
            <span> {수량} </span>
            <button
              onClick={() => {
                수량변경(수량 + 1);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                수량변경(수량 - 1);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
