import {useState, useEffect} from 'react';

function usePagination<T>(
  fetchedData: Array<T> | undefined,
  totalPage: number | undefined,
) {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<Array<T>>(
    fetchedData || [],
  );
  useEffect(() => {
    if (Array.isArray(fetchedData)) {
      setPaginatedData(prev => [...prev, ...fetchedData]);
    }
  }, [fetchedData]);
  const nextPage = (page = -1) => {
    if (page === 1) {
      setPaginatedData([]);
    }
    if (totalPage && currentPage < totalPage) {
      setCurrentPage(prevPage => (page >= 0 ? page : prevPage + 1));
    }
  };

  return {currentPage, nextPage, paginatedData};
}

export default usePagination;
