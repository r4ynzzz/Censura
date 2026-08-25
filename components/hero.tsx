"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-white flex flex-row m-4">
      {/* Info */}
      <div className="flex justify-center items-center w-1/2">
        <div className="w-13/15">
          <h1 className="font-bold text-4xl pb-4">Empowering Businesses</h1>
          <h1 className="font-bold text-4xl pb-4">With Effortless Feedback.</h1>
          <p className="">
            More info on more info. Get your feedback. there should be more
            feedback info here. It should get even longer for crazier reasons.
          </p>
          <Button
            className="w-1/2 mt-4 rounded-2xl text-lg h-10"
            onClick={() => router.push("/sign-up")}
          >
            Try Now
          </Button>
        </div>
      </div>

      {/* image */}
      <div className="flex w-1/2">
        <Image
          src="feedback_hero_two_phones_v10.svg"
          width={500}
          height={500}
          alt="Feedback image"
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
}
