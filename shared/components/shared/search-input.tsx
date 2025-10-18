'use client';

import * as React from 'react';
import { useClickAway, useDebounce } from 'react-use';
import { Product } from '@prisma/client';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/shared/components';
import { cn } from '@/shared/lib';
import { Api } from '@/shared/services/api-client';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);

  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    },
    250,
    [searchQuery]
  );

  const onClickItem = () => {
    setSearchQuery('');
    setProducts([]);
    setFocused(false);
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 right-0 bottom-0 left-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 bg-black/50 z-30" />
      )}
      <div
        ref={ref}
        className={cn(
          'flex flex-1 rounded-xl justify-between relative h-9 z-30',
          className
        )}
      >
        <InputGroup className="bg-gray-100 border-gray-100 relative z-31 has-[[data-slot=input-group-control]:focus-visible]:border-input has-[[data-slot=input-group-control]:focus-visible]:ring-ring/0 has-[[data-slot=input-group-control]:focus-visible]:ring-0">
          <InputGroupInput
            placeholder="Найти пиццу..."
            name="Search"
            type="text"
            onFocus={() => setFocused(true)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        {products.length > 0 && (
          <div
            className={cn(
              'absolute left-[-8px] right-[-8px] bg-white rounded-xl py-4 pt-13 top-0 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-[-8px]'
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                href={`/product/${product.id}`}
                onClick={onClickItem}
                scroll={false}
              >
                <Image
                  className="rounded-sm"
                  src={product.imageUrl}
                  width={32}
                  height={32}
                  alt={product.name}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
