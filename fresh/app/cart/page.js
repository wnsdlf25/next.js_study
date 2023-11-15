// client component
// 로딩속도 느림
// js 기능이 필요한 곳에서 사용
// "use client";
import data from "./data.js";
import Hello from "./hello.js";

export default function Cart() {
  let cart = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {/* props 문법을 사용해서 부모 컴포넌트에서 자식컴포넌트로 데이터 전송 가능 */}
      <CartItem item={cart[0]} />
      <CartItem item={cart[1]} />
      <Banner content="롯데카드" />
      <Banner content="현대카드" />
      <RedBut color="blue" />
      {/* <Hello /> */}
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}

function RedBut(props) {
  return <button style={{ background: props.color }}>버튼</button>;
}

// component 만들기

// server component
// use client 를 쓰지 않고 그냥 component를 만들면 server component가됨
// html에 자바스크립트 기능 넣기 불가능
// 로딩속도빠름
// 검색엔진 노출 유리
function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item} </p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
