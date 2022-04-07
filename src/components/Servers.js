import { Fragment } from 'react';
import Server from './Server';

export const Servers = ({ servers, isEditing, setServers }) => {
  return (
    <Fragment>
      {servers.map(server => (
        <Server
          key={server.id}
          server={server}
          isEditing={isEditing}
          setServers={setServers}
        />
      ))}
    </Fragment>
  );
};

export default Servers;
