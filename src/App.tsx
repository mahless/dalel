import { useState, useMemo } from 'react';
import { useMachines } from '@/features/machines/hooks/useMachines';
import { MachineCard, MachineCardSkeleton } from '@/features/machines/components/MachineCard';
import { MachineModal } from '@/features/machines/components/MachineModal';
import { SearchBar } from '@/components/ui/SearchBar';
import { Machine } from '@/data';
import { motion } from 'motion/react';

export default function App() {
  const { data: machines, isLoading, error } = useMachines();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);

  const filteredMachines = useMemo(() => {
    if (!machines) return [];
    const query = searchQuery.toLowerCase();
    return machines.filter(
      (m) =>
        m.nameEn.toLowerCase().includes(query) ||
        m.nameAr.includes(query)
    );
  }, [machines, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-sky-400 to-blue-600 pb-24 pt-16 rounded-b-[3rem] shadow-xl overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight font-arabic drop-shadow-sm">
                دليل الفنيين
              </h1>
              <p className="text-sky-100 text-lg md:text-xl font-medium">
                Industrial Machinery Catalog / دليل الماكينات الصناعية
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SearchBar value={searchQuery} onChange={setSearchQuery} className="shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 max-w-7xl -mt-8">
        {/* Content Section */}
        <div>
          {error ? (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm">
              <p className="text-red-500 font-medium">Error loading data. Please try again.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {isLoading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <MachineCardSkeleton key={i} />
                  ))
                : filteredMachines.map((machine) => (
                    <MachineCard
                      key={machine.id}
                      machine={machine}
                      onClick={setSelectedMachine}
                    />
                  ))}
            </div>
          )}

          {!isLoading && filteredMachines.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No machines found matching your search.</p>
            </div>
          )}
        </div>
      </main>

      <MachineModal
        machine={selectedMachine}
        onClose={() => setSelectedMachine(null)}
      />
    </div>
  );
}
