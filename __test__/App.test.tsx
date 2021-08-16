/**
 * @format
 */

import 'react-native';
import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import characterListMock from '../__mock__/character-list.mock';
import renderer, {act} from 'react-test-renderer';
import {AppShell} from '../App';
import wait from 'waait';

it('renders correctly', async () => {
  let app;

  act(() => {
    app = renderer.create(
      <MockedProvider mocks={characterListMock} addTypename={true}>
        <AppShell />
      </MockedProvider>,
    );
  });
  await wait(1000);
  const appStr = JSON.stringify(app.toJSON());
  expect(appStr).toContain('RickMorty');
});
