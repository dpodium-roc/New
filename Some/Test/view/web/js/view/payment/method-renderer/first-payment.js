define(
	[
		'Magento_Checkout/js/view/payment/default'
	],
	function (Component)
	{
		'use strict';
		return Component.extend(
			defaults: {
				//refer to Some_Test/view/frontend/web/template
				template: 'Some_Test/payment/firstpayment'
			}
		);
	}
);