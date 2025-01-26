import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
};

export default Page;
