This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


1. pages/: Thư mục này chứa tất cả các trang của ứng dụng. Mỗi file trong thư mục này tự động trở thành một route trong ứng dụng của bạn.

index.js: Trang chính của ứng dụng. Đây là trang sẽ hiển thị khi người dùng truy cập vào đường dẫn gốc của ứng dụng.

2. public/: Thư mục chứa các file tĩnh như hình ảnh, font chữ, và các tài nguyên khác mà bạn muốn có sẵn cho người dùng. Các file ở đây có thể được truy cập trực tiếp từ đường dẫn gốc

3. styles/: Thư mục chứa các file CSS hoặc SCSS để định dạng các thành phần của ứng dụng.

globals.css: File chứa các kiểu dáng toàn cục áp dụng cho toàn bộ ứng dụng.

4. components/: Thư mục dành cho các thành phần React mà bạn sử dụng trên nhiều trang hoặc trong nhiều phần của ứng dụng.

5. public/_app.js: Đây là file cấu hình cấp cao cho ứng dụng, cho phép bạn thêm các wrapper, provider, hoặc mã logic chung cho tất cả các trang.

6. 
