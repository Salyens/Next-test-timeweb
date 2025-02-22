import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Image
        src="/next.svg"
        alt="Profile"
        width={1000}
        height={1000}
      />
    </div>
  );
}
