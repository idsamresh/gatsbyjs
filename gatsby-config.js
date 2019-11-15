module.exports = {
  // Repo name
  pathPrefix: `/gatsbyjs`,
  siteMetadata: {
    title: `IDS Logic`,
    description: `This is the website description.`,
    author: `@idslogic`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        // baseUrl: process.env.API_URL,
        baseUrl: `digitalwordpress.lnx-local.com`,
        // The protocol. This can be http or https.
        // protocol: process.env.API_PROTOCOL,
        protocol: `http`,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on WordPress.com
        useACF: true,
        // auth: {
        //   wpcom_app_clientSecret: process.env.WORDPRESS_SECRET,
        //   wpcom_app_clientId: process.env.WORDPRESS_CLIENTID,
        //   wpcom_user: process.env.WORDPRESS_USERNAME,
        //   wpcom_pass: process.env.WORDPRESS_PASSWORD,
        // },
        // includedRoutes: [
        //   "**/categories",
        //   "**/posts",
        //   "**/pages",
        //   "**/media",
        //   "**/tags",
        //   "**/taxonomies",
        //   "**/users",
        // ],
        verboseOutput: true
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-plugin-sass",
    //   options: {
    //     useResolveUrlLoader: {
    //       options: {
    //         sourceMap: true, //default is false
    //       },
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
