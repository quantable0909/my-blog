import {
  type RouteConfig,
  index,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  // 홈페이지 인덱스 경로 수정
  index('index.tsx'),
  route('/about', 'pages/about.tsx'),
  ...prefix('post', [route('/:id', 'pages/post.tsx')]),
  route('/all-post', 'pages/all-post.tsx'),
  route('/travel', 'pages/travel.tsx'),
  route('/lifestyle', 'pages/lifestyle.tsx'),
  route('/destination', 'pages/destination.tsx'),
] satisfies RouteConfig;
