define(
	[
		'Magento_Checkout/js/view/payment/default'
	],
	function (Component)
	{
		'use strict';
		return Component.extend(
		{
			default: {
				template: 'Zamen_CustomPayment/payment/custompayment'
			}
		});
	}
);
