import { useQuery } from '@tanstack/react-query';
import { fetchProcessingResult } from './processing-results';

export const useFetchTextProcessingResult = (url: string) => {
  return useQuery({
    queryKey: ['text-processing-result', url],
    queryFn: () => fetchProcessingResult(url),
    enabled: !!url,
  });
};
