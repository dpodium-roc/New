define(
	[
		'uiComponent',
		'Magento_Checkout/js/Model/paymment/renderer-list'
	],
	function(Component, rendererList)
	{
		'use strict';
		rendererList.push(
			{
				type: 'custompayment',
				component: 'Zamen_CustomPayment/js/view/payment/method-renderer/custompayment'
			}
		);
		return Component.extend({});
	}
);