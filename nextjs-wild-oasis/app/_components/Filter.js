'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { memo } from 'react';

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get('capacity') ?? 'all';

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-primary-800 flex">
      <FilterButton
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All Cabins
      </FilterButton>
      <FilterButton
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </FilterButton>
      <FilterButton
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </FilterButton>
      <FilterButton
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </FilterButton>
    </div>
  );
}

const FilterButton = memo(function FilterButton({
  filter,
  handleFilter,
  activeFilter,
  children,
}) {
  const isActive = activeFilter === filter;

  const handleClick = () => handleFilter(filter);

  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        isActive ? 'bg-primary-700' : ''
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
});

export default Filter;
