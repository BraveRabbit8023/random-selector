/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  basePath: '/random-selector', // 假设你的仓库名为 random-selector
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 