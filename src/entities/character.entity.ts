import {EpisodeEntity} from './episode.entity';

export interface CharacterEntity {
  id: number;
  name: string;
  image: string;
  gender?: string;
  species?: string;
  episode?: EpisodeEntity[];
}

export interface CharacterFilter {
  name?: string;
  status?: 'dead' | 'alive' | 'unknown';
  species?: string;
  type?: string;
  gender?: 'female' | 'male' | 'genderless' | 'unknown';
}
