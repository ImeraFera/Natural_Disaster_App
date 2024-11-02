module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    '@typescript-eslint/no-unused-vars': 'off',
    'react-native/no-inline-styles': 'off',
    "@typescript-eslint/no-explicit-any": "off",  // "any" kullanımıyla ilgili hatayı kapatır
    "@typescript-eslint/explicit-module-boundary-types": "off"  // Fonksiyonlar için tip belirleme zorunluluğunu kapatır
  },
};
