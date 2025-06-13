import { useParams } from "react-router-dom";

const ConnectError = () => {
  const { error_msg } = useParams();

  return (
    <div style={{ padding: "2rem", color: "red", fontSize: "1.2rem" }}>
      ❌ Oops! {decodeURIComponent(error_msg)}
    </div>
  );
};

export default ConnectError
