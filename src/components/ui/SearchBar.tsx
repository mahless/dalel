import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const SearchBar = ({ value, onChange, className }: SearchBarProps) => {
  return (
    <div className={cn("relative w-full max-w-2xl mx-auto", className)}>
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
        <Search className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search machines / ابحث عن الماكينات..."
        className="w-full py-4 pl-12 pr-6 bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-full text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white transition-all duration-300"
      />
    </div>
  );
};
