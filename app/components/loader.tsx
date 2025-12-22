export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
            <div
                className="w-40 h-40 sm:w-60 sm:h-60 bg-no-repeat bg-center bg-contain animate-pulse"
                style={{ backgroundImage: "url('/Video/loading.gif')" }}
            />
        </div>
    )
}
