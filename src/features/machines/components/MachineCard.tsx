import { FC } from 'react';
import { motion } from 'framer-motion';
import { Machine } from '@/data';
import { Maximize2 } from 'lucide-react';

interface MachineCardProps {
  machine: Machine;
  onClick: (machine: Machine) => void;
}

export const MachineCard: FC<MachineCardProps> = ({ machine, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${machine.id}`}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
      onClick={() => onClick(machine)}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <motion.img
          layoutId={`image-${machine.id}`}
          src={machine.image}
          alt={machine.nameEn}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <span className="text-white text-sm font-medium flex items-center gap-2">
            <Maximize2 className="w-4 h-4" />
            View Details
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg text-gray-900 leading-tight">
            {machine.nameEn}
          </h3>
          <h3 className="font-medium text-lg text-indigo-600 font-arabic leading-tight" dir="rtl">
            {machine.nameAr}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export const MachineCardSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
    <div className="aspect-[4/3] bg-gray-200" />
    <div className="p-5 space-y-3">
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="h-6 bg-gray-200 rounded w-1/2" />
    </div>
  </div>
);
