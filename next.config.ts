import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // React の厳密モードを有効化
  reactStrictMode: true,

  // SWC (Rust ベースのコンパイラ) を用いたコード圧縮を有効化
  swcMinify: true,

  // 静的ファイルをエクスポートする場合に必要な設定
  output: 'standalone', // 必要に応じて 'export' を指定

  // 画像ホスティング設定
  images: {
    domains: ['example.com'], // 外部画像を許可するドメインを指定
    formats: ['image/avif', 'image/webp'], // 次世代画像フォーマット
  },

  // 環境変数を追加 (任意)
  env: {
    API_URL: process.env.API_URL || 'https://api.example.com',
  },
};

export default nextConfig;
