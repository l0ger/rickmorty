import React, {FC, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  Avatar,
  Separator,
  InfoRow,
  CollapseView,
  ProView,
} from '../../common/components';
import {ScreenProps} from '../../common/types/navigation.type';
import {useQuery} from '@apollo/client';
import CHARACTER_DETAILS_READ_QUERY from '../../queries/character/character-details-read.query';
import {CharacterEntity} from '../../entities/character.entity';
import EpisodeList from '../../components/character/episode-list/episode-list';
import {getApolloErrorMessage} from '../../common/utils/error-handler';

const CharacterDetailsScreen: FC<ScreenProps<'CharacterDetails'>> = ({
  route,
  navigation,
}) => {
  const {characterId, characterName} = route.params;
  const {data, loading, error} = useQuery(CHARACTER_DETAILS_READ_QUERY, {
    variables: {id: characterId},
  });
  const character: CharacterEntity = data?.character || {};

  useEffect(() => {
    navigation.setOptions({
      title: characterName,
    });
  }, [navigation, characterName]);

  return (
    <ScrollView>
      <ProView
        containerStyle={styles.container}
        loading={loading}
        error={getApolloErrorMessage(error)}>
        <Avatar uri={character.image} />
        <Separator />
        <InfoRow value={character.name} label={'Name'} />
        <Separator />
        <InfoRow value={character.species} label={'Species'} />
        <Separator />
        <InfoRow value={character.gender} label={'Gender'} />
        <Separator />
        <CollapseView text={'Episode'}>
          <EpisodeList episode={character.episode || []} />
        </CollapseView>
        <Separator />
      </ProView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default CharacterDetailsScreen;
