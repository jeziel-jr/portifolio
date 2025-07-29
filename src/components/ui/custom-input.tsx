import { ArrowRight } from "lucide-react";

export default function CustomInput({}) {
  return (
    <div className="w-full max-w-lg flex items-center rounded-full border border-neutral-200 bg-white/30 py-2.5 pr-2 pl-6 backdrop-blur-lg transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
      <input
        placeholder="Pergunte-me qualquer coisa…"
        type="text"
        className="w-full border-none bg-transparent text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
      />
      <button className="flex items-center justify-center rounded-full bg-[#0171E3] p-2.5 text-gray-300 transition-colors hover:bg-blue-600 disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700">
        <ArrowRight size={24} />
      </button>
    </div>
  );
}
