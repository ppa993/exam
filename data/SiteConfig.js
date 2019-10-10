const config = {
  siteTitle: "An ST", // Site title.
  siteTitleShort: "An ST", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "An ST", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.anst.dev", // Domain of your website without pathPrefix.
  repo: 'https://github.com/ppa993/anst',
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A website of An ST.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  googleAnalyticsID: "UA-143218778-1", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  anstLinks: {
    github: {
      url: "https://github.com/ppa993",
      name: "ppa993"
    },
    facebook: {
      url: "https://facebook.com/ducknhi",
      name: "An ST"
    },
    linkedin: {
      url: "https://www.linkedin.com/in/ppa993",
      name: "ppa993"
    },
    email: {
      url: "mailto:contact@anst.dev",
      name: "contact@anst.dev"
    }
  },
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  copyright: "© 2019 AnST", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#ffffff", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  apiUrl: "/.netlify/functions/server"
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
