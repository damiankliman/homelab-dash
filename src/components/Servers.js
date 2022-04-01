import { Fragment } from 'react';
import Server from './Server';

export const Servers = ({ servers, isEditing }) => {
  return (
    <Fragment>
      {servers.map(server => (
        <Server key={server.id} server={server} isEditing={isEditing} />
      ))}
    </Fragment>
  );
};

export default Servers;
