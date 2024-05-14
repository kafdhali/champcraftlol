import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="NotFound">
      <h2>404</h2>
      <img
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        src="https://lh3.googleusercontent.com/proxy/P1FqOGxNsct_EHnPAHBTnr8b4kGN9AGh6ELu1sTje38Tz3buwNmAUeou4PWb9jZb73tWaO_0ryIf4ucPmzQypft84CL-R0UQ3U5OQ4oIGfaRzGK4CKdlJNCtOC00YebT_k5WwmiJ4y__-_tBzG-lc08D5G7A"
        alt=""
      />
      <h1>Sorry, this page does not exist</h1>
    </div>
  );
}

export default NotFoundPage;
