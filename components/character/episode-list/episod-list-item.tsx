import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EpisodeEntity} from '../../../entities/episode.entity';

export interface EpisodeListItemProps {
  episode: EpisodeEntity;
}
const EpisodeListItem = ({episode}: EpisodeListItemProps) => {
  const {name, air_date} = episode;
  return (
    <View style={styles.container}>
      <Text style={styles.episodeName}>{name}</Text>
      <Text style={styles.airDateText}>{air_date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // height: 60,
  },
  episodeName: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  airDateText: {
    paddingBottom: 10,
  },
});

export default EpisodeListItem;
