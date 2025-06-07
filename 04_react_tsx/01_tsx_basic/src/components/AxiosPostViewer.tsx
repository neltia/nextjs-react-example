import axios from 'axios';
import { useEffect, useState } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function AxiosPostViewer() {
  const [data, setData] = useState<Post | null>(null);

  useEffect(() => {
    axios.get<Post>('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}