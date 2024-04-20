import { useEffect, useState } from "react";
import ProfileSearchForm from "./ProfileSearchForm";
import axios from "axios";
const URL = "https://api.github.com/users";

export default function ProfileViewerWithSearch() {
  const [username, setUsername] = useState("koichi");
  const [profile, setProfile] = useState({ data: null, isLoading: true });

  useEffect(
    function fetchUserOnUsernameChange() {
      async function fetchUser() {
        const userResult = await axios.get(`${URL}/${username}`);
        setProfile({ data: userResult.data, isLoading: false });
      }
      fetchUser();
    },
    [username]
  );

  const search = (username) => {
    setProfile({ data: null, isLoading: true });
    setUsername(username);
  };

  if (profile.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <ProfileSearchForm search={search} />
      <b>{profile.data.name}</b>
      <img src={profile.data.avatar_url} alt="" />
    </div>
  );
}
