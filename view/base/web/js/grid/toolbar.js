/**
 *
 *          ..::..
 *     ..::::::::::::..
 *   ::'''''':''::'''''::
 *   ::..  ..:  :  ....::
 *   ::::  :::  :  :   ::
 *   ::::  :::  :  ''' ::
 *   ::::..:::..::.....::
 *     ''::::::::::::''
 *          ''::''
 *
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Creative Commons License.
 * It is available through the world-wide-web at this URL:
 * http://creativecommons.org/licenses/by-nc-nd/3.0/nl/deed.en_US
 * If you are unable to obtain it through the world-wide-web, please send an email
 * to servicedesk@tig.nl so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this module to newer
 * versions in the future. If you wish to customize this module for your
 * needs please contact servicedesk@tig.nl for more information.
 *
 * @copyright   Copyright (c) Total Internet Group B.V. https://tig.nl/copyright
 * @license     http://creativecommons.org/licenses/by-nc-nd/3.0/nl/deed.en_US
 */
define([
    'jquery',
    'ko',
    'Magento_Ui/js/grid/toolbar'
], function (
    $,
    ko,
    Toolbar
) {
    return Toolbar.extend({
        defaults : {
            currentSelected : ko.observable('change_parcel')
        },

        initObservable : function () {
            this._super().observe([
                'currentSelected'
            ]);

            this.currentSelected.subscribe(function (value) {
                // Selection is changed.
            });

            return this;
        },

        showPostNLToolbarActions : function () {
            return this.ns === 'sales_order_grid' || this.ns === 'sales_order_shipment_grid';
        },

        getPostNLActionsList : function () {
            return [
                {name: $.mage.__('Change parcel'), value: 'change_parcel'},
                {name: $.mage.__('Change product'), value: 'change_product'}
            ];
        }
    });
});
