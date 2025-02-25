import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getColorClass = (colorName: string, shade: string) => {
  const colorClasses: Record<string, Record<string, string>> = {
    red: { "50": "bg-red-50", "100": "bg-red-100", "700": "text-red-700" },
    orange: { "50": "bg-orange-50", "100": "bg-orange-100", "700": "text-orange-700", },
    amber: { "50": "bg-amber-50", "100": "bg-amber-100", "700": "text-amber-700", },
    yellow: { "50": "bg-yellow-50", "100": "bg-yellow-100", "700": "text-yellow-700", },
    lime: { "50": "bg-lime-50", "100": "bg-lime-100", "700": "text-lime-700", },
    green: { "50": "bg-green-50", "100": "bg-green-100", "700": "text-green-700", },
    emerald: { "50": "bg-emerald-50", "100": "bg-emerald-100", "700": "text-emerald-700", },
    teal: { "50": "bg-teal-50", "100": "bg-teal-100", "700": "text-teal-700", },
    cyan: { "50": "bg-cyan-50", "100": "bg-cyan-100", "700": "text-cyan-700", },
    sky: { "50": "bg-sky-50", "100": "bg-sky-100", "700": "text-sky-700", },
    blue: { "50": "bg-blue-50", "100": "bg-blue-100", "700": "text-blue-700", },
    indigo: { "50": "bg-indigo-50", "100": "bg-indigo-100", "700": "text-indigo-700", },
    violet: { "50": "bg-violet-50", "100": "bg-violet-100", "700": "text-violet-700", },
    purple: { "50": "bg-purple-50", "100": "bg-purple-100", "700": "text-purple-700", },
    fuchsia: { "50": "bg-fuchsia-50", "100": "bg-fuchsia-100", "700": "text-fuchsia-700", },
    pink: { "50": "bg-pink-50", "100": "bg-pink-100", "700": "text-pink-700", },
    rose: { "50": "bg-rose-50", "100": "bg-rose-100", "700": "text-rose-700", },
    slate: { "50": "bg-slate-50", "100": "bg-slate-100", "700": "text-slate-700", },
    gray: { "50": "bg-gray-50", "100": "bg-gray-100", "700": "text-gray-700", },
    zinc: { "50": "bg-zinc-50", "100": "bg-zinc-100", "700": "text-zinc-700", },
    neutral: { "50": "bg-neutral-50", "100": "bg-neutral-100", "700": "text-neutral-700", },
    stone: { "50": "bg-stone-50", "100": "bg-stone-100", "700": "text-stone-700", },
  }

  const baseColor = colorName


  return colorClasses[baseColor]?.[shade] || ""
}
