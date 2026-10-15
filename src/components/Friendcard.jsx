function FriendCard({ name, deleteFriend }) {
  return (
    <div className="friend-card">
      <h2>{name}</h2>
      
      <button onClick={() => deleteFriend(name)}>
        🗑️ Delete
      </button>
    </div>
  );
}

export default FriendCard;