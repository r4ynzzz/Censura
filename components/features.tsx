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
          <CardHeader>
            <CardTitle>Feature 1</CardTitle>
            <CardDescription>Describe feature 1</CardDescription>
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
          <CardHeader>
            <CardTitle>Feature 1</CardTitle>
            <CardDescription>Describe feature 1</CardDescription>
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
          <CardHeader>
            <CardTitle>Feature 1</CardTitle>
            <CardDescription>Describe feature 1</CardDescription>
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
