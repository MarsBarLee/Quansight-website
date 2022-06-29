// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    domains: ['a.storyblok.com'],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://zapier.com/',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'POST',
          },
        ],
      },
    ];
  },
  async rewrites() {
    // The conventions of this return value are described in the Next.js docs:
    // https://nextjs.org/docs/api-reference/next.config.js/rewrites
    return {
      afterFiles: [
        // Proxying Plausible through Vercel
        // https://plausible.io/docs/proxy/guides/vercel
        {
          source: '/plausible/js/script.js',
          destination: 'https://plausible.io/js/script.js',
        },
        {
          source: '/plausible/api/event',
          destination: 'https://plausible.io/api/event',
        },
      ],
      fallback: [
        {
          source: '/:path*',
          destination: 'https://quansight-labs.netlify.app/:path*',
        },
      ],
    };
  },
};

module.exports = withNx(nextConfig);
