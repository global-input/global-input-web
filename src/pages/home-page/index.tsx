import React, { useState, useCallback } from 'react'
import EditConnectionSettings from '../../connection-settings';
import AppPairing from '../../app-pairing';
import HomePage from './HomePage';


enum PAGES {
  HOME,
  EDIT_CONNECTION_SETTINGS,
  PAIRING
};

const Main = () => {
  const [page, setPage] = useState(PAGES.HOME);
  const home = useCallback(() => setPage(PAGES.HOME), []);
  const editConnectionSettings = useCallback(() => setPage(PAGES.EDIT_CONNECTION_SETTINGS), []);
  const pairing = useCallback(() => setPage(PAGES.PAIRING), []);

  switch (page) {
    case PAGES.EDIT_CONNECTION_SETTINGS:
      return (<EditConnectionSettings back={home} pairing={pairing} />);
    case PAGES.PAIRING:
      return (<AppPairing back={home} />)
    case PAGES.HOME:
      return (<HomePage editConnectionSettings={editConnectionSettings} />)
    default:

  }
}

export default Main;
