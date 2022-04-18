import { Fragment } from 'react';
import Server from './Server';

export const Servers = ({ servers, isEditing, setServers, serversStatus }) => {
  return (
    <Fragment>
      {servers.map(server => (
        <Server
          key={server.id}
          server={server}
          isEditing={isEditing}
          setServers={setServers}
          serversStatus={serversStatus}
        />
      ))}
    </Fragment>
  );
};

export default Servers;
