/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * @flow strict
 * @format
 */
'use strict';

// eslint-disable-next-line fb-www/flow-readonly-object
export type CacheImplementation<T> = {
  +get: mixed => T | void,
  +set: (mixed, T) => CacheImplementation<T>,
  +delete: mixed => CacheImplementation<T>,
  ...
};

module.exports = ({}: {...});
