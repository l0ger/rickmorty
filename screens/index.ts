import HomeScreen from './home-screen';
import CharacterDetailsScreen from './character-details-screen';
import EpisodeScreen from './episode-screen';

const Screens = [
  {
    name: 'Home',
    screen: HomeScreen,
    options: {title: 'RickMorty'},
  },
  {
    name: 'CharacterDetails',
    screen: CharacterDetailsScreen,
  },
  {
    name: 'Episode',
    screen: EpisodeScreen,
  },
];
export default Screens;
