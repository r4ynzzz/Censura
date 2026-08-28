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
        <Card className="w-80 h-80 rounded-2xl">
          <CardHeader className="h-36">
            <CardTitle>Custom Forms</CardTitle>
            <CardDescription>
              Create forms with questions regarding anything. Forms come in many
              different structures.
            </CardDescription>
            <CardAction>Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Content</p>
          </CardContent>
          <CardFooter>
            <p>Footer</p>
          </CardFooter>
        </Card>
        <Card className="w-80 h-80 rounded-2xl">
          <CardHeader className="h-36">
            <CardTitle>Form Analytics</CardTitle>
            <CardDescription>
              Results from forms are analyzed. Prominent data is displayed to be
              used.
            </CardDescription>
            <CardAction>Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Content</p>
          </CardContent>
          <CardFooter>
            <p>Footer</p>
          </CardFooter>
        </Card>
        <Card className="w-80 h-80 rounded-2xl">
          <CardHeader className="h-36">
            <CardTitle>Fleetwood Mac</CardTitle>
            <CardDescription>
              Only the best band to ever exist. Cannot be topped by anyone. Go
              ahead, try.
            </CardDescription>
            <CardAction>Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Content</p>
          </CardContent>
          <CardFooter>
            <p>Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
