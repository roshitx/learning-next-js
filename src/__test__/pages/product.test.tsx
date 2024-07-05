import ProductPage from '@/pages/product';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        route: '/product',
        pathname: '',
        query: '',
        asPath: '',
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn(),
        },
        beforePopState: jest.fn(),
        prefetch: jest.fn(),
        isReady: true,
      };
    },
  };
});

describe('Product Page', () => {
  it('should render correctly', () => {
    const page = render(<ProductPage />);
    expect(page).toMatchSnapshot();
  });
});
