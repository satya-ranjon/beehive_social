export const formattedFriends = async (user) => {
  const friends = await Promise.all(
    user.friends.map((id) => User.findById(id))
  );
  const formattedFriends = friends.map(
    ({ _id, firstName, lastName, occupation, location, picturePath }) => {
      _id, firstName, lastName, occupation, location, picturePath;
    }
  );
  return formattedFriends;
};
