const ProfileCard = ({name , age , greeting , children }) => {
    // const {name , age , greeting , children } = props;
  return (
    <div>
      <p>name : {name}</p>
      <p> {name}s age : {age}</p>
      <> {greeting}</>
      <div>{children}</div>
    </div>
  );
};

export default ProfileCard;
