'use strict';
var specifications = require('base.specifications'),
    logger = require('base.logger')('components/user/datastore');
module.exports = specifications.components.UserProvider.extend(
    /**
     * @lends components/user-datastore.prototype
     */
    {
        /**
         * @classDesc user-datastore
         * @exports components/user-datastore
         * @extends components/UserProvider
         * @constructor
         * @abstract
         */
        init: function (settings, resolver) {
            logger.info('initializing...');
            return;
        },
        serialize: specifications.base.Class.abstract,
        deserialize: specifications.base.Class.abstract
    }
);
