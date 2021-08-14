import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  ListRenderItem,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import CharacterListItem from './character-list-item';
import {Loading, Separator} from '../../../common/components';
import {CharacterEntity} from '../../../entities/character.entity';
import {useQuery} from '@apollo/client';
import CHARACTER_READ_QUERY from '../../../queries/character/character-list-read.query';

const CharacterList: FC = () => {
  const pageSize = 20;
  // const dispatch = useDispatch();
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  const [loadMore, setLoadMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const {loading, data, error} = useQuery(CHARACTER_READ_QUERY);
  // const [allLoadedUsers, setAllLoadedUsers] = useState<Array<User> | []>([]);
  // const {users, loading, total} = useSelector(
  //   (state: AppState) => state.userList,
  // );
  // useEffect(() => {
  //   dispatch(getUserRequestAction({page, limit: pageSize}));
  // }, [dispatch, page]);

  // useEffect(() => {
  //   setAllLoadedUsers(prevUsers => [...prevUsers, ...users]);
  // }, [users]);
  // const handleLoadMore = () => {
  //   if (allLoadedUsers.length === total && page) {
  //     setLoadMore(false);
  //     return;
  //   }
  //   setPage(prevPageNumber => prevPageNumber + 1);
  //   setLoadMore(true);
  //   dispatch(getUserRequestAction({page, limit: pageSize}));
  // };
  const handleLoadMore = () => {};
  const renderFooter = () => {
    return (
      (loadMore && (
        <View style={styles.footer}>
          <ActivityIndicator animating size="large" color="#0000ff" />
        </View>
      )) ||
      null
    );
  };

  const onItemPress = (name: string) => {
    // dispatch(getUserProfileRequestAction({id}));
    navigation.navigate('CharacterDetails', {characterName: name});
    return true;
  };
  const renderItem: ListRenderItem<CharacterEntity> = ({item}) => {
    return <CharacterListItem character={item} onPress={onItemPress} />;
  };
  const handleRefresh = () => {
    setRefreshing(true);
    // setPage(0);
    // dispatch(getUserRequestAction({page, limit: pageSize}));
  };
  if (loading && page === 0) {
    return <Loading />;
  }
  return (
    <View style={styles.main}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={data.characters.results}
        extraData={loading}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={renderFooter}
        initialNumToRender={20}
        refreshing={refreshing}
        onRefresh={handleRefresh}
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
    height: 150,
    paddingVertical: 20,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'blue',
  },
  separator: {width: '100%', height: 1, backgroundColor: 'gray'},
});

export default CharacterList;
