import React from "react";
import { useContext } from "react";
import { UserContext} from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      {user ? (
        <div className="space-y-2">
          <p>
            <strong>Name:</strong> {user?.name || "Not provided"}
          </p>
          <p>
            <strong>Email:</strong> {user?.email || "Not provided"}
          </p>
          <p>
            <strong>Phone:</strong> {user?.phone || "Not provided"}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">No user profile available.</p>
      )}
    </div>
  );
};

export default Profile;


