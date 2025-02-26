import ProfileCard from "./ProfileCard";

const Profile = () => {
  return (
    <div>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name="arun"
        age={67}
        greeting={
          <div>
            <strong>Hello arun , have a wonderful day ! </strong>
          </div>
        }
      >
        <p>Hobbies : Reading and sleeping</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
};

export default Profile;
