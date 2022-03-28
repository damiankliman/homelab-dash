import Server from './Server';

export const Servers = ({ servers, isEditing }) => {
  return (
    <>
      {servers.map(server => (
        <Server key={server.id} server={server} isEditing={isEditing} />
      ))}
    </>
  );
};

export default Servers;
