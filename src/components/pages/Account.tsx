import { useAuth } from "../context/AuthContext";

export const Account = () => {
  const { user } = useAuth();
  return (
    <section>
      <section>
        <div>
          <img
            src={user?.user_metadata.avatar_url}
            alt={user?.user_metadata.full_name}
            className="rounded-full"
          />
          <label>Nombre</label>
          <h4>{user?.user_metadata.full_name}</h4>
          <label>Email</label>
          <h5>{user?.user_metadata.email}</h5>
        </div>
      </section>
    </section>
  );
};
