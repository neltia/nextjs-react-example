import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AxiosPostViewer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}