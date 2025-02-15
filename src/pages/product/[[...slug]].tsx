import { fetcher } from '@/lib/swr/fetcher';
import ProductView from '@/views/Product';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const DetailProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const [products, setProducts] = useState([]);

  const { push } = useRouter();
  const { query } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push('/auth/login');
    }
  }, [isLogin, push]);

  const { data, error, isLoading } = useSWR('/api/product', fetcher);

  // useEffect(() => {
  //   fetch('/api/product')
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : data?.data} />
    </div>
  );
};
export default DetailProductPage;
