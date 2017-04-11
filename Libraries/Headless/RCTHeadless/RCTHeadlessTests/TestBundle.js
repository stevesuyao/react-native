/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

import {AppRegistry} from 'react-native';

AppRegistry.registerHeadlessTask('TestTask', () => async (taskData) => {
   console.log("Task executed with data: " + taskData);
});