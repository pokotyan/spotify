import React from 'react';
import { Button } from 'semantic-ui-react';

const SpotifyLogin = () => {
  return (
    <a href="http://localhost:9000/api/spotify/auth">
      <Button inverted color="green">
        spotify ログイン
      </Button>
    </a>
  );
};

export default SpotifyLogin;
