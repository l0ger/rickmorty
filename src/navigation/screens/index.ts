import HomeScreen from './home-screen';
import CharacterDetailsScreen from './character-details-screen';
import SearchCharacterScreen from './search-character-screen';
import HomeScreenHeader from '../home-screen-header';
import SearchCharacterScreenHeader from '../search-character-header-title';

const Screens = [
  {
    name: 'Home',
    screen: HomeScreen,
    options: {header: HomeScreenHeader},
  },
  {
    name: 'CharacterDetails',
    screen: CharacterDetailsScreen,
  },
  {
    name: 'SearchCharacter',
    screen: SearchCharacterScreen,
    options: {
      headerTitle: SearchCharacterScreenHeader,
    },
  },
];
export default Screens;
