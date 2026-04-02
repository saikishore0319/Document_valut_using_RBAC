// src/components/FileCard.jsx
export default function FileCard({ file, onDownload, onDelete }) {
  const formattedDate = file.upload_timestamp 
    ? new Date(file.upload_timestamp).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    : "Date Unknown";

  // Determine file extension for the UI badge
  const extension = file.filename?.split('.').pop().toUpperCase() || "DOC";

  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col gap-4">
      
      {/* File Info Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xs shadow-inner">
            {extension}
          </div>
          <div className="overflow-hidden">
            <h3 className="font-bold text-gray-900 truncate w-40" title={file.filename}>
              {file.filename}
            </h3>
            <span className="inline-block bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-tight">
              {file.document_type}
            </span>
          </div>
        </div>
      </div>

      {/* Metadata Section */}
      <div className="flex flex-col gap-1 border-y border-gray-50 py-3">
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">Owner</span>
          <span className="text-gray-700 font-medium truncate max-w-[120px]">
            {file.employee_email || "N/A"}
          </span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">Uploaded</span>
          <span className="text-gray-700 font-medium">{formattedDate}</span>
        </div>
      </div>

      {/* Action Row */}
      <div className="flex gap-2 mt-auto">
        <button
          onClick={() => onDownload(file.document_id)}
          className="flex-1 bg-gray-900 hover:bg-black text-white text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </button>
        
        <button
          onClick={() => onDelete(file.document_id)}
          className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
          title="Delete Document"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}