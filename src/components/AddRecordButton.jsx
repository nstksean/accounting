export default function AddRecordButton({ onClick }) {
  return (
    <div className="flex overflow-hidden justify-center">
        <button
            className="flex flex-1 aspect-square cursor-pointer items-center justify-center h-14 bg-actionOrange px-2 gap-4"
            onClick={onClick}
        >
            <div className="text-slate-50" data-icon="Plus" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
            </svg>
            </div>
        </button>
    </div>
  );
}