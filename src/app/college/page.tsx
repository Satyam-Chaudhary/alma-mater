import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/images/college.jpg"
        alt="College"
        width={500}
        height={500}
        />
    </div>
  );
}
