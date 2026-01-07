import React, { useEffect } from "react";

const PackageModal = ({ isOpen, onClose, children }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <section className=" h-[150vh] w-full bg-black " >
                <div
                    className="fixed inset-0 z-999 flex justify-center items-center"
                    onClick={onClose}
                >
                    {/* Background Blur */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>

                    {/* Modal Box */}
                    <div
                        className="relative bg-white w-[85%] h-[85vh] rounded-4xl z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 z-20 text-black text-4xl font-bold hover:scale-90 cursor-pointer transition-all"
                            onClick={onClose}
                        >
                            ✕
                        </button>

                        {/* Content */}
                        <div className="flex-1 h-full overflow-y-auto no-scrollbar p-16 space-y-24">
                            {children}
                        </div>

                    </div>
                </div>


            </section>

        </>
    );
};

export default PackageModal;
