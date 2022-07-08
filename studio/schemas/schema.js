/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// import custom schema

import blog from './documents/blog';
import author from './documents/author';
import category from './documents/catagory';
import featured from './documents/featured';
// import custom objects

import customImage from './objects/customImage';
import bodyText from './objects/bodyText';
import excerptText from './objects/excerptText';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blog,
    author,
    category,
    featured,
    customImage,
    bodyText,
    excerptText,
  ]),
});
