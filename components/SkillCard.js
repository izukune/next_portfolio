import Image from "next/image";
import { Children } from "react";

export default function IzuCard({ title, children, comment }) {
  return (
    <div className="bg-white bg-opacity-50 text-center shadow-xl p-8 w-80 lg:w-96 rounded mx-8 my-4">
      <div className="my-4">
        <p className="font-bold text-2xl">{title}</p>
      </div>
      <div className="m-1">{children}</div>
      <div className="mt-4">
        <p className="">{comment}</p>
      </div>
    </div>
  );
}
