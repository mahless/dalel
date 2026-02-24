import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom';
import { Machine } from '@/data';

interface MachineModalProps {
  machine: Machine | null;
  onClose: () => void;
}

export const MachineModal = ({ machine, onClose }: MachineModalProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const onUpdate = ({ x, y, scale }: { x: number; y: number; scale: number }) => {
    const { current: img } = imgRef;
    if (img) {
      const value = make3dTransformValue({ x, y, scale });
      img.style.setProperty("transform", value);
    }
  };

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {machine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            layoutId={`card-${machine.id}`}
            className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Area with Pinch Zoom */}
            <div className="relative flex-1 bg-gray-900 overflow-hidden min-h-[40vh]">
               <div className="absolute top-4 left-4 z-20 pointer-events-none">
                 <div className="flex items-center gap-2 px-3 py-1.5 bg-black/30 backdrop-blur-md rounded-full text-white/80 text-xs font-medium">
                   <ZoomIn className="w-3 h-3" />
                   Pinch to zoom
                 </div>
               </div>
               
               <QuickPinchZoom onUpdate={onUpdate} containerProps={{ style: { width: '100%', height: '100%' } }}>
                <motion.img
                  layoutId={`image-${machine.id}`}
                  ref={imgRef}
                  src={machine.image}
                  alt={machine.nameEn}
                  className="w-full h-full object-contain"
                />
              </QuickPinchZoom>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 bg-white overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">{machine.nameEn}</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {machine.descEn}
                  </p>
                </div>
                
                <div className="space-y-4 text-right" dir="rtl">
                  <h2 className="text-2xl font-bold text-indigo-700 font-arabic">{machine.nameAr}</h2>
                  <p className="text-gray-600 leading-relaxed text-lg font-arabic">
                    {machine.descAr}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
