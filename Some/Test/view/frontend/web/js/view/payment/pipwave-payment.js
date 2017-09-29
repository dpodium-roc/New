define(
	[
		'uiComponent',
		'Magento_Checkout/js/model/payment/render-list'
	],
	function (Component, renderList)
	{
		'use strict';
		rendererList.push(
			{
				type: "firstpayment",
				component: 'Some_Test/js/view/payment/method-renderer/firstpayment-method'
			}
			//type here if there is more method in method-renderer
			//refer to Some_Test/view/frontend/web/js/view/payment/methos-renderer
		);
		return Component.extend({});
	}
);