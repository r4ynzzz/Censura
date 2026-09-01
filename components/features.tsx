import { Badge } from "./ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

export default function Features() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 justify-center items-center">
      <div className="flex flex-col m-4 justify-center items-center">
        <Badge
          variant="default"
          className="text-black font-bold bg-gray-300 rounded-3xl mb-4 h-8 w-32"
        >
          Featuring
        </Badge>
        <h1 className="text-black font-extrabold text-3xl mb-8">
          Solutions For All Data Specific Problems
        </h1>
      </div>
      <div className="flex items-center justify-between w-3/4">
        <Card className="flex justify-start w-80 h-96 rounded-2xl">
          <CardContent className="m-2">
            <CardContent className="flex">
              <Image
                src="/FTWDMAC.jpg"
                width={250}
                height={250}
                alt="Fleetwood Mac"
                className="rounded"
              />
            </CardContent>
            <CardContent className="flex-col items-start mt-4">
              <CardTitle className="font-extrabold">Fleetwood Mac</CardTitle>
              <CardDescription className="mt-3">
                Only the best band to ever exist. Cannot be topped by anyone. Go
                ahead, try.
              </CardDescription>
            </CardContent>
          </CardContent>
        </Card>

        <Card className="flex justify-start w-80 h-96 rounded-2xl">
          <CardContent className="m-2">
            <CardContent className="flex">
              <Image
                src="/FTWDMAC.jpg"
                width={250}
                height={250}
                alt="Fleetwood Mac"
                className="rounded"
              />
            </CardContent>
            <CardContent className="flex-col items-start mt-4">
              <CardTitle className="font-extrabold">Fleetwood Mac</CardTitle>
              <CardDescription className="mt-3">
                Only the best band to ever exist. Cannot be topped by anyone. Go
                ahead, try.
              </CardDescription>
            </CardContent>
          </CardContent>
        </Card>

        <Card className="flex justify-start w-80 h-96 rounded-2xl">
          <CardContent className="m-2">
            <CardContent className="flex">
              <Image
                src="/FTWDMAC.jpg"
                width={250}
                height={250}
                alt="Fleetwood Mac"
                className="rounded"
              />
            </CardContent>
            <CardContent className="flex-col items-start mt-4">
              <CardTitle className="font-extrabold">Fleetwood Mac</CardTitle>
              <CardDescription className="mt-3">
                Only the best band to ever exist. Cannot be topped by anyone. Go
                ahead, try.
              </CardDescription>
            </CardContent>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
