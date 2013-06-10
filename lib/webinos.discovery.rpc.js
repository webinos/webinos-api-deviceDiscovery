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

(function() {

  "use strict";

  var os   = require("os");
  var discoverymodule = '';
  var RPCWebinosService = require('webinos-jsonrpc2').RPCWebinosService;
	
  if (process.platform == 'android') {	
          discoverymodule = require('./webinos.discovery.general.js');
          var hrmmodule = require('./webinos.discovery.hrm.js');
          var dnsmodule = require('./webinos.discovery.dns.js');
  }
	
  /**
   * Webinos Discovery service constructor (server side).
   * @constructor
   * @param rpcHandler A handler for functions that use RPC to deliver their result.  
   */
  var DiscoveryModule = function (rpcHandler) {
    this.base = RPCWebinosService;
    this.base({
      api:'http://webinos.org/api/discovery',
      displayName:'Discovery manager',
      description:'Discovery manager that supports Bluetooth and WiFi discovery in Android'
    });
  }
    
  DiscoveryModule.prototype = new RPCWebinosService;

  /**
   * To find devices that support the specific service. Android WiFi MDNS.
   * @param data Service type.
   * @param successCallback Success callback.
   */
  if (process.platform == 'android')
  {
    DiscoveryModule.prototype.DNSfindservice = function(data, successCallback){
      dnsmodule.DNSfindservice(data, successCallback);   
    }
  }
	
  /**
   * To find Bluetooth Heart Rate Monitor device. For Android OS only.
   * @param data Service type.
   * @param successCallback Success callback.
   */
  if (process.platform == 'android')
  {
    DiscoveryModule.prototype.findHRM = function(data, successCallback){
      hrmmodule.HRMfindservice(data, successCallback); 
    }
  }
	
  exports.Service = DiscoveryModule;
	
})();
