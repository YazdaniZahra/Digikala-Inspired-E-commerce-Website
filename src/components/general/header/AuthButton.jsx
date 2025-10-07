import AuthIcon from "@/assets/icons/AuthIcon";
export default function AuthButton({ className = "" }) {
  return (
    <button
      className={` rounded-lg border border-grayMid  px-4 py-2 flex flex-row items-center ${className}`}
    >
      <div className="text-xs font-bold whitespace-nowrap flex flex-row items-center gap-2">
        <AuthIcon className="w-iconbase h-iconbase text-graydark" />
        <span> ورود | ثبت‌نام</span>
      </div>
    </button>
  );
}
