import {StyleSheet, View, useWindowDimensions} from 'react-native';
import React, {FC} from 'react';
import EpisodeListItem from './episod-list-item';
import {EpisodeEntity} from '../../../entities/episode.entity';
import {Separator} from '../../../common/components';

interface EpisodeListProps {
  episode: EpisodeEntity[];
}

const EpisodeList: FC<EpisodeListProps> = ({episode}) => {
  const window = useWindowDimensions();
  return (
    <View style={styles.main}>
      {episode.map(episodeItem => (
        <View key={episodeItem.id} style={{width: window.width}}>
          <Separator />
          <EpisodeListItem episode={episodeItem} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {marginBottom: 10, flex: 1},
});

export default EpisodeList;
