module.exports = {
  "extends": "airbnb",
  rules: {
    "linebreak-style": 0, // Allow Windows CRLF
    "import/extensions": 0, // Allow .js and .jsx in imports
    "object-curly-spacing": 0, // Allow no spaces after/before { and }
    "react/prefer-stateless-function": 0, // Allow component classes
    "quotes": 0, // Allow double and single quotes
    "react/prop-types": 0, // Allow to not use react prop-types
    "no-mixed-operators": 0, // Allow operator precedence
  },
  "env":{
    "browser": true,
  },
};