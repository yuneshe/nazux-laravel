

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-800 to-indigo-900">
            <div className="flex flex-col items-center justify-center">

        
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-slate-900 dark:bg-gray-800 shadow-lg rounded-lg">
                {children}
            </div>
        </div>
    );
}
