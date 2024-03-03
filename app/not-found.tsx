import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-neutral-content">
      <div className="p-8 bg-white rounded-lg md:w-5/12 w-11/12 shadow-lg">
        <div className="flex flex-col items-center">
          <Image
            src={require("@/assets/image/404.png")}
            width={390}
            height={298}
            alt="404-not-found"
          />
          <p className="font-bold text-xl mt-4">
            Looks like you've got lost ...
          </p>
          <div role="button" className="btn btn-primary mt-4 btn-block">
            <Link href="/dashboard/overview">Back to Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
