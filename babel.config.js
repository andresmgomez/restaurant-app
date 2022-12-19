module.exports = function (api) {
  api.cache(true);
  return {
    parser: "babel-eslint",
    presets: ["babel-preset-expo"],
  };
};
