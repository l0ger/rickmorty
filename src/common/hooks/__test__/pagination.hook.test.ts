import expect from 'expect';
import {renderHook, act} from '@testing-library/react-hooks';
import usePagination from '../pagination.hook';
import characterListMock from '../../../../__mock__/character-list.mock';
import {CharacterEntity} from '../../../entities/character.entity';

describe('Pagination hooks', () => {
  it('should return paginated data', () => {
    const data = characterListMock[0].result.data.characters.results;
    const filter = {};
    const {result} = renderHook(() => {
      // @ts-ignore
      return usePagination<CharacterEntity>(data, 20, filter);
    });

    expect(result.current.nextPage).toBeDefined();
    expect(typeof result.current.nextPage).toBe('function');
    act(() => result.current.nextPage(2));
    expect(result.current.currentPage).toBe(2);
    act(() => {
      result.current.nextPage(3);
    });
    expect(result.current.currentPage).toBe(3);
  });
});
