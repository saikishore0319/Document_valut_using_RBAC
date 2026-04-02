// src/components/Loader.jsx
export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center p-12 space-y-4">
      {/* Outer Ring */}
      <div className="relative">
        {/* Decorative Static Ring */}
        <div className="w-12 h-12 rounded-full border-4 border-blue-50"></div>
        
        {/* Animated Spinning Ring */}
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
        
        {/* Inner Pulsing Core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      </div>

      {/* Loading Text */}
      <div className="flex flex-col items-center">
        <span className="text-sm font-bold text-gray-900 tracking-wide uppercase">
          Verifying Access
        </span>
        <span className="text-[10px] text-gray-400 font-medium animate-pulse">
          Securely fetching your documents...
        </span>
      </div>
    </div>
  );
}