// src/components/Navbar.jsx
export default function Navbar({ user, logout }) {
  // Get initials for a clean avatar fallback
  const initials = user?.email?.substring(0, 2).toUpperCase() || "??";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand/Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:rotate-3 transition-transform">
            <span className="text-sm text-white font-bold">HV</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900">
            HR<span className="text-blue-600">Vault</span>
          </span>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-6">
          
          {/* User Info Section */}
          <div className="hidden sm:flex items-center gap-3 pr-6 border-r border-gray-100">
            <div className="text-right">
              <p className="text-xs font-bold text-gray-900 truncate max-w-[150px]">
                {user?.email}
              </p>
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">
                Secure Session Active
              </p>
            </div>
            
            {/* Simple Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 flex items-center justify-center border border-gray-200 text-gray-600 text-xs font-bold shadow-sm">
              {initials}
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-red-500 transition-colors py-2 px-3 rounded-lg hover:bg-red-50"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Sign Out</span>
          </button>
        </div>

      </div>
    </nav>
  );
}