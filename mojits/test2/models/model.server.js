/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('test2Model', function(Y, NAME) {

/**
 * The test2Model module.
 *
 * @module test2
 */

    /**
     * Constructor for the test2Model class.
     *
     * @class test2Model
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {
            callback(null, { some: 'data' });
        }

    };

}, '0.0.1', {requires: []});
