import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import CharacterListItem from './character-list-item';
import {Loading, Separator} from '../../../common/components';
import {
  CharacterEntity,
  CharacterFilter,
} from '../../../entities/character.entity';
import {NetworkStatus, useQuery} from '@apollo/client';
import CHARACTER_READ_QUERY from '../../../queries/character/character-list-read.query';
import {usePagination} from '../../../common/hooks';
import {COLORS} from '../../../constants/theme.constants';

interface CharacterListProps {
  filter?: CharacterFilter;
}

const CharacterList: FC<CharacterListProps> = ({filter}) => {
  const navigation = useNavigation();
  const {loading, data, error, refetch, networkStatus} = useQuery(
    CHARACTER_READ_QUERY,
    {
      variables: {
        currentPage: 1,
        filter: filter || {},
      },
      fetchPolicy: 'cache-and-network',
    },
  );
  const {results, info} = data?.characters || {
    results: undefined,
    info: undefined,
  };
  const {currentPage, nextPage, paginatedData} = usePagination<CharacterEntity>(
    results,
    info?.pages || 0,
    filter,
  );

  useEffect(() => {
    refetch({currentPage, filter});
  }, [refetch, currentPage]);

  const handleLoadMore = () => {
    nextPage();
  };
  const renderFooter = () => {
    return (
      (networkStatus === NetworkStatus.refetch && (
        <View style={styles.footer}>
          <ActivityIndicator animating size="large" color={COLORS.themMain} />
        </View>
      )) ||
      null
    );
  };

  const onItemPress = (name: string) => {
    navigation.navigate('CharacterDetails', {characterName: name});
    return true;
  };
  const renderItem: ListRenderItem<CharacterEntity> = ({item}) => {
    return <CharacterListItem character={item} onPress={onItemPress} />;
  };

  if (loading && currentPage === 1) {
    return <Loading />;
  }
  return (
    <View style={styles.main}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={paginatedData}
        extraData={loading}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        ItemSeparatorComponent={() => <Separator />}
        ListHeaderComponent={renderFooter}
        initialNumToRender={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {marginBottom: 10, flex: 1},
  flatListContainer: {
    flexDirection: 'column',
  },
  footer: {
    position: 'relative',
    width: '100%',
  },
  separator: {width: '100%', height: 1, backgroundColor: 'gray'},
});

export default CharacterList;
