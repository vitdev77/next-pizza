'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import qs from 'qs';
import { Filters } from './use-filters';

export const useQueryFilters = (filters: Filters) => {
  const isMounted = React.useRef(false);
  const router = useRouter();

  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        ...filters.prices,
        pizzaTypes: Array.from(filters.pizzaTypes),
        sizes: Array.from(filters.sizes),
        ingredients: Array.from(filters.selectedIngredients),
      };

      const query = qs.stringify(params, {
        arrayFormat: 'comma',
      });

      router.push(`?${query}`, { scroll: false });
    }

    isMounted.current = true;
  }, [
    filters.pizzaTypes,
    filters.prices,
    filters.selectedIngredients,
    filters.sizes,
  ]);
};

// import * as React from 'react';
// import { useRouter } from 'next/navigation';
// import qs from 'qs';

// import { Filters } from './use-filters';

// export const useQueryFilters = (filters: Filters) => {
//   const router = useRouter();
//   const prevFiltersRef = React.useRef<string | null>(null);

//   React.useEffect(() => {
//     const params = {
//       ...filters.prices,
//       pizzaTypes: Array.from(filters.pizzaTypes),
//       sizes: Array.from(filters.sizes),
//       ingredients: Array.from(filters.selectedIngredients),
//     };

//     const query = qs.stringify(params, { arrayFormat: 'comma' });

//     if (prevFiltersRef.current !== query) {
//       prevFiltersRef.current = query;
//       router.push(`?${query}`, { scroll: false });
//     }
//   }, [
//     filters.pizzaTypes,
//     filters.prices,
//     filters.selectedIngredients,
//     filters.sizes,
//     router,
//   ]);
// };
