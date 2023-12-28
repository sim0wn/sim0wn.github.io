import { Rowdies } from "next/font/google";

const rowdies = Rowdies({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

export default function Header() {
  return (
    <header
      className={`bg-purple-800 px-2 py-4 text-center font-bold text-4xl ${rowdies.className} text-white`}
    >
      <h1>sim0wn</h1>
    </header>
  );
}
