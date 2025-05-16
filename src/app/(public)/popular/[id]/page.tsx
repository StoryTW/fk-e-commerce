import { GamePage } from '@/pageComponents/GamePage/GamePage';
import { GamesServerService } from '@/services/games/games.service';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface IGameParams {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IGameParams): Promise<Metadata> {
  const id = (await params).id;

  const { data } = await GamesServerService.popularGameById(
    {
      id: id,
    },
    3600,
  );

  return {
    title: data?.game?.title,
    description: data?.game?.description,
  };
}

export default async function PopularGame({ params }: IGameParams) {
  const id = (await params).id;

  const { data } = await GamesServerService.popularGameById(
    {
      id: id,
    },
    3600,
  );

  if (!data) {
    notFound();
  }

  return <GamePage serverData={data.game} />;
}
