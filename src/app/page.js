"use client";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./slices/counterSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <main>
      <h1>Hello world</h1>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </main>
  );
}
