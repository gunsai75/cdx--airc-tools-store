import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// tailwin merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// color map
export const colorMap: Record<string, { bg50: string; hoverBg100: string; text700: string }> = {
    slate: { bg50: "bg-slate-50", hoverBg100: "hover:bg-slate-100", text700: "text-slate-700" },
    gray: { bg50: "bg-gray-50", hoverBg100: "hover:bg-gray-100", text700: "text-gray-700" },
    zinc: { bg50: "bg-zinc-50", hoverBg100: "hover:bg-zinc-100", text700: "text-zinc-700" },
    neutral: { bg50: "bg-neutral-50", hoverBg100: "hover:bg-neutral-100", text700: "text-neutral-700" },
    stone: { bg50: "bg-stone-50", hoverBg100: "hover:bg-stone-100", text700: "text-stone-700" },
    red: { bg50: "bg-red-50", hoverBg100: "hover:bg-red-100", text700: "text-red-700" },
    orange: { bg50: "bg-orange-50", hoverBg100: "hover:bg-orange-100", text700: "text-orange-700" },
    amber: { bg50: "bg-amber-50", hoverBg100: "hover:bg-amber-100", text700: "text-amber-700" },
    yellow: { bg50: "bg-yellow-50", hoverBg100: "hover:bg-yellow-100", text700: "text-yellow-700" },
    lime: { bg50: "bg-lime-50", hoverBg100: "hover:bg-lime-100", text700: "text-lime-700" },
    green: { bg50: "bg-green-50", hoverBg100: "hover:bg-green-100", text700: "text-green-700" },
    emerald: { bg50: "bg-emerald-50", hoverBg100: "hover:bg-emerald-100", text700: "text-emerald-700" },
    teal: { bg50: "bg-teal-50", hoverBg100: "hover:bg-teal-100", text700: "text-teal-700" },
    cyan: { bg50: "bg-cyan-50", hoverBg100: "hover:bg-cyan-100", text700: "text-cyan-700" },
    sky: { bg50: "bg-sky-50", hoverBg100: "hover:bg-sky-100", text700: "text-sky-700" },
    blue: { bg50: "bg-blue-50", hoverBg100: "hover:bg-blue-100", text700: "text-blue-700" },
    indigo: { bg50: "bg-indigo-50", hoverBg100: "hover:bg-indigo-100", text700: "text-indigo-700" },
    violet: { bg50: "bg-violet-50", hoverBg100: "hover:bg-violet-100", text700: "text-violet-700" },
    purple: { bg50: "bg-purple-50", hoverBg100: "hover:bg-purple-100", text700: "text-purple-700" },
    fuchsia: { bg50: "bg-fuchsia-50", hoverBg100: "hover:bg-fuchsia-100", text700: "text-fuchsia-700" },
    pink: { bg50: "bg-pink-50", hoverBg100: "hover:bg-pink-100", text700: "text-pink-700" },
    rose: { bg50: "bg-rose-50", hoverBg100: "hover:bg-rose-100", text700: "text-rose-700" },
};

// convert rupees to tokens
export const  convertAmountToTokens = (amount : number) => {
  console.log('Amount here')
  
  return amount * 100;
}



