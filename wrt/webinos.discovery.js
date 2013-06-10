/*******************************************************************************
*  Code contributed to the webinos project
* 
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*  
*     http://www.apache.org/licenses/LICENSE-2.0
*  
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* 
* Copyright 2012 Ziran Sun Samsung Electronics(UK) Ltd
*
******************************************************************************/
(function () {

	/**
	 * Webinos Bluetooth Discovery service constructor (client side).
	 * @constructor
	 * @param obj Object containing displayName, api, etc.
	 */
	DiscoveryModule = function (obj) {
		this.base = WebinosService;
		this.base(obj);
	};
	
	DiscoveryModule.prototype = new WebinosService();
	
	/**
	 * To find devices that support the specific service. This applies to both Android and Linux
	 * @param data Service type.
	 * @param success Success callback.
	 */
	DiscoveryModule.prototype.BTfindservice = function (data, success) {
		console.log("BT findservice");
		var rpc = webinos.rpcHandler.createRPC(this, "BTfindservice", arguments);
		webinos.rpcHandler.executeRPC(rpc, function(params) {
			success(params);
		});
	};
	
	
	/**
	 * To find devices using DNS . This applies to Android
	 * @param data Service type.
	 * @param success Success callback.
	 */
	DiscoveryModule.prototype.DNSfindservice = function(data, success){
		console.log("DNS findservice");
		var rpc = webinos.rpcHandler.createRPC(this, "DNSfindservice", arguments);
		webinos.rpcHandler.executeRPC(rpc, function(params) {
			success(params);
		});
	};
	
	/**
	 * To find Heart Rate Monitor device, only support Android OS.
	 * @param data Service type.
	 * @param success Success callback.
	 */

	DiscoveryModule.prototype.findHRM = function(data, success){
		console.log("HRM find HRM");
  		var rpc = webinos.rpcHandler.createRPC(this, "findHRM",data);
	  	webinos.rpcHandler.executeRPC(rpc, function(params) {
	  		success(params);
	  	});
	};

}());
