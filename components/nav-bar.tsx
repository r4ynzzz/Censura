import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <nav className="bg-white flex items-center justify-between py-4 px-6 lg:px-14 text-black drop-shadow-md sticky top-0 z-1">
      <h1 className="font-bold">Censura</h1>
      <span>Link Link Link</span>
      <span className="">
        <Button variant="outline" className="mx-2">
          Sign in
        </Button>
        <Button>Sign Up</Button>
      </span>
    </nav>
  );
}
