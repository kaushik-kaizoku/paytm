import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Me = () => {
    const navigate = useNavigate();

    axios.post(
        "http://localhost:3000/api/vi/me",
        {}, // Empty body, since you didn't specify any data to send
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
        .then((res) => {
          if (res.status === 200) {
            navigate("/dashboard");
          } else {
            navigate("/signup");
          }
        })
        .catch((error) => {
          console.error("Error occurred:", error);
          navigate("/signup"); // Optional, navigate to signup or another page in case of error
        });

    return <div></div>
}
