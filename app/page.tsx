import { getServerSession } from "next-auth";
import { Root } from "../components/Root";
import { handler } from "./api/auth/[...nextauth]/route";

const Home: React.FC = async () => {
  const session = await getServerSession(handler);
  return (<Root session={session} />)
}

export default Home;
