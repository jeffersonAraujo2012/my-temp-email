const proxy = [
  {
    context: "/api",
    target:
      "https://dropmail.me/api/graphql/coodesh-mncoiwsfkmzcowemzxckweriofdsnm",
    pathRewrite: { "^/api": "" },
    secure: false,
    changeOrigin: true,
  },
];
module.exports = proxy;
