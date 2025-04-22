import { useAuth } from "../context/AuthContext";

export const Account = () => {
  const { user } = useAuth();

  console.log(user?.picture);
  return (
    <section>
      <section>
        <div>
          <img
            src={user?.picture}
            alt={user?.full_name}
            className="w-24 h-24 rounded-full"
          />
          <label>Nombre</label>
          <h4>{user?.full_name}</h4>
          <label>Email</label>
          <h5>{user?.email}</h5>
        </div>
      </section>
    </section>
  );
};
