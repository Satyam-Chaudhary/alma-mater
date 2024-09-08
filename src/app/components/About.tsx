import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="m-20 space-y-5">
        <span className="text-gradient-2 text-3xl mb-4">About Us</span>
        <div className="p-2  pb-4">
          <div className="text-lg p-4 leading-9">
            Welcome to the Alma Mater Platform, a dedicated space where lifelong
            connections are nurtured, professional networks flourish, and the
            spirit of giving back is celebrated. Our platform, accessible
            through web is designed to strengthen the bond between our esteemed
            alumni and their alma mater, fostering a vibrant and engaged
            community that continues to thrive long after graduation.
            <br />
            By becoming a part of our alumni platform, you are not just staying
            connected—you are contributing to a thriving community that supports
            lifelong learning, professional development, and a shared sense of
            pride in our alma mater. Together, we can build a stronger, more
            connected, and more successful alumni network that continues to
            uplift each other and the institution we hold dear.
          </div>
          <div className="flex w-full items-center justify-center mt-2">
            <Link
              className=" inline-block bg-blue-500 text-white font-semibold py-2 px-4 text-center rounded-md min-w-[100px] shadow-md hover:bg-blue-600 active:bg-blue-700 transition duration-300 ease-in-out"
              href={"/about"}
            >
              Click to know more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
