import { useQuery } from '@tanstack/react-query';
import { machines, Machine } from '@/data';

// Simulate API delay
const fetchMachines = async (): Promise<Machine[]> => {
  await new Promise((resolve) => setTimeout(resolve, 800)); // 800ms delay
  return machines;
};

export const useMachines = () => {
  return useQuery({
    queryKey: ['machines'],
    queryFn: fetchMachines,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
