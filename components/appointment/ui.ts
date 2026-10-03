// Shared field styling. Brand tokens live here — swap these hexes for your
// existing DENTEX tokens / CSS variables in one place.
export const brand = {
  ink: "#0E2A2D",
  deep: "#0B4F55",
  teal: "#0B6B72",
  aqua: "#2BA6A6",
  mint: "#EAF4F2",
  error: "#B4413A",
};

export const fieldBase =
  "h-[54px] w-full rounded-lg border bg-white px-4 text-base sm:text-[15px] text-[#0E2A2D] " +
  "placeholder:text-[#0E2A2D]/40 outline-none transition-[border-color,box-shadow] duration-200 " +
  "focus:ring-4";

export const fieldState = (hasError: boolean) =>
  hasError
    ? "border-[#B4413A] focus:border-[#B4413A] focus:ring-[#B4413A]/10"
    : "border-[#0E2A2D]/[0.14] hover:border-[#0B4F55]/40 focus:border-[#0B4F55] focus:ring-[#2BA6A6]/[0.16]";
