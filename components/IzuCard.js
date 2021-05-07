import Image from "next/image";

export default function IzuCard({
  title,
  image_url,
  sub_title,
  content,
  slide_message,
}) {
  return (
    <div className="flex justify-center pt-4 pb-8">
      <div className="bg-white bg-opacity-50 text-center shadow-xl p-8 pb-2 w-80 lg:w-96 rounded text-lg text-sm lg:text-lg">
        <div>
          <p className="font-bold text-2xl">{title}</p>
        </div>
        <div className="flex justify-center my-4">
          <Image
            src={image_url}
            width={130}
            height={130}
            alt="image"
            className="rounded-full"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold text-sm ls:text-lg">{sub_title}</p>
        </div>
        <div className="mt-4">
          <p className="font-bold text-sm ls:text-lg">{content}</p>
        </div>
        <div className="mt-4">
          <p className="text-sm ls:text-lg">{slide_message}</p>
        </div>
      </div>
    </div>
  );
}
