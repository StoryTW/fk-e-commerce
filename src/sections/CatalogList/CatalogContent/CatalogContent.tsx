'use client';
import React, { RefObject, useEffect } from 'react';
import styles from './CatalogContent.module.scss';
import { GameCard } from '../GameCard/GameCard';
import { useInfinityGameList } from '@/hooks/query/games/useInfinityGameList';
import { useElementOnScreen } from '@/hooks/common/useElementOnScreen';
import { Spinner } from '@/components/ui/Spinner/Spinner';
import { useGenresStore } from '@/store/useGenresStore';
import { CatalogSkeleton } from './CatalogSkeleton/CatalogSkeleton';

interface ICatalogContent {
  serverData: any;
}

export const CatalogContent = ({ serverData }: ICatalogContent) => {
  const activeGenre = useGenresStore((state) => state.activeGenre);

  const {
    data: clientData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
  } = useInfinityGameList(
    {
      perPage: '12',
      genre_id: activeGenre?.id ? String(activeGenre?.id) : undefined,
    },
    {
      initialData: activeGenre?.id
        ? undefined
        : {
            pages: [serverData],
            pageParams: [1],
          },
      staleTime: 1000 * 60 * 10, //10 min
    },
  );

  const [autoscrollRef, isActiveAutoScroll] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  const formattedData = clientData?.pages?.flatMap((page) => page?.games);

  useEffect(() => {
    if (isActiveAutoScroll && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [isActiveAutoScroll]);

  if (isLoading) {
    return <CatalogSkeleton />;
  }

  return (
    <>
      <div className={styles.content}>
        {formattedData?.map((card, index) => {
          return <GameCard key={index} data={card} />;
        })}

        <div ref={autoscrollRef as RefObject<HTMLDivElement>} />
      </div>
      {hasNextPage && isFetchingNextPage && (
        <div className={styles.spinWrapper}>
          <Spinner />
        </div>
      )}
    </>
  );
};
