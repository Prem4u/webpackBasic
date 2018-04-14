# Webpack Basic details

## Plugins used and their purposes:

1. clean-webpack-plugin => clean the output after each build
2. html-webpack-plugin  => generating dynamic html by webpack

## Loaders :
### Always get executed in reverse order.

1. style-loader => for style tag
2. css-loader   => for loading css file
3. csv-loader   => for loading csv data
4. xml-loader   => for loading xml data
5. file-loader  => for loading jpg|png|svg files/images

## npm command to install dev dependency 

npm install --save-dev csv-loader xml-loader file-loader style-loader css-loader

npm install --save-dev html-webpack-plugin clean-webpack-plugin 

npm install --save lodash