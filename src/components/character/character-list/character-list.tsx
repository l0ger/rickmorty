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
import {Separator, ProView} from '../../../common/components';
import {
  CharacterEntity,
  CharacterFilter,
} from '../../../entities/character.entity';
import {NetworkStatus, useLazyQuery} from '@apollo/client';
import CHARACTER_READ_QUERY from '../../../queries/character/character-list-read.query';
import {usePagination} from '../../../common/hooks';
import {COLORS} from '../../../constants/theme.constants';
import {getApolloErrorMessage} from '../../../common/utils/error-handler';

interface CharacterListProps {
  filter?: CharacterFilter;
}

const CharacterList: FC<CharacterListProps> = ({filter}) => {
  const navigation = useNavigation();
  const [fetchCharacter, {loading, data, error, networkStatus}] =
    useLazyQuery(CHARACTER_READ_QUERY);
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
    fetchCharacter({variables: {currentPage, filter}});
  }, [filter, currentPage, fetchCharacter]);

  const handleLoadMore = () => {
    nextPage();
    fetchCharacter({variables: {currentPage, filter}});
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

  return (
    <ProView
      containerStyle={styles.main}
      error={getApolloErrorMessage(error)}
      loading={loading && currentPage === 1}>
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
    </ProView>
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
