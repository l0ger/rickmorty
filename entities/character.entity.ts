import {EpisodeEntity} from './episode.entity';

export interface CharacterEntity {
  id: number;
  name: string;
  image: string;
  gender?: string;
  species?: string;
  episode?: EpisodeEntity;
}
