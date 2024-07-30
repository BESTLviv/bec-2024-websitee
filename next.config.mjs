import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
     webpack: (config) => {
    config.resolve.alias["slick-carousel"] = "slick-carousel/slick/slick.css";
    config.resolve.alias["slick-theme"] = "slick-carousel/slick/slick-theme.css";
    return config;
  },
};
 
export default withNextIntl(nextConfig);

