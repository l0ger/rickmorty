import React, {FC, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Avatar,
  Loading,
  Separator,
  InfoRow,
  CollapseView,
} from '../../common/components';
import {ScreenProps} from '../../common/types/navigation.type';
import {useQuery} from '@apollo/client';
import CHARACTER_DETAILS_READ_QUERY from '../../queries/character/character-details-read.query';
import {CharacterEntity} from '../../entities/character.entity';
import EpisodeList from '../../components/character/episode-list/episode-list';

const CharacterDetailsScreen: FC<ScreenProps<'CharacterDetails'>> = ({
  route,
  navigation,
}) => {
  const {characterName} = route.params;
  const {data, loading, error} = useQuery(CHARACTER_DETAILS_READ_QUERY, {
    variables: {name: characterName},
  });
  useEffect(() => {
    navigation.setOptions({
      title: characterName,
    });
  }, [navigation, characterName]);

  if (loading) {
    return <Loading />;
  }

  const character: CharacterEntity = data?.characters?.results[0];

  return (
    <ScrollView>
      <View style={styles.container}>
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
      </View>
      <Separator />
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
