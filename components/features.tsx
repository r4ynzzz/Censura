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
    <div className="flex w-full min-h-screen bg-white justify-center">
      <div className="flex items-center justify-between">
        <Card className="w-80 h-80 rounded-2xl m-4">
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
        <Card className="w-80 h-80 rounded-2xl m-4">
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
        <Card className="w-80 h-80 rounded-2xl m-4">
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
