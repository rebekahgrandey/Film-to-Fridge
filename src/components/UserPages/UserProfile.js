import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const UserProfile = () => {
const [user, updateUser] = useState({})
const { userId } = useParams();

      useEffect(() => {
        fetch(
          `http://localhost:8088/users/${userId}`
        )
          .then((response) => response.json())
          .then((data) => {
            const singleUser = data[0];
            updateUser(singleUser);
          });
      }, [userId]);

}