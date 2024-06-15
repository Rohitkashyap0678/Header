import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const Assigne = () => {
  const avatars = [
    {
      alt: "Remy Sharp",
      src: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      alt: "Travis Howard",
      src: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    },
    {
      alt: "Cindy Baker",
      src: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
    },
    {
      alt: "Agnes Walker",
      src: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
    },
    {
      alt: "Trevor Henderson",
      src: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
    },
  ];

  return (
    <>
      <AvatarGroup max={4} className="flex justify-end">
        {avatars.map((avatar, index) => (
          <Avatar key={index} alt={avatar.alt} src={avatar.src} />
        ))}
      </AvatarGroup>
    </>
  );
};

export default Assigne;
