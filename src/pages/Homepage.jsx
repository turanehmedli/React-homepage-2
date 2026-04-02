import { useEffect, useState } from "react";
import Card from "../components/homepage/Card";
import Loading from "../components/common/Loading";
import RefreshBtn from "../components/homepage/RefreshBtn";

const Homepage = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const getPhotos = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (res.ok) {
        const data = await res.json();
        setPost(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhotos();
  }, [refresh]);

  return (
    <div className="w-full min-h-screen h-fit  flex flex-col justify-center items-center select-none">
      {/* {!loading && <RefreshBtn setRefresh={setRefresh} />} */}

      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 w-full h-full lg:grid-cols-3 p-5 ">
        {!post.length && !loading && <p>No Item Found</p>}

        {loading ? (
          <Loading />
        ) : (
          post.map((post) => <Card key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default Homepage;
