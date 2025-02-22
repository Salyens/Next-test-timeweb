import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Image
        src="https://media.cntraveler.com/photos/5627b0d7c4dab9d441424e8b/16:9/w_1280,c_limit/oslo-norway-cr-getty.jpg"
        alt="Profile"
        width={1000}
        height={1000}
      />
    </div>
  );
}
