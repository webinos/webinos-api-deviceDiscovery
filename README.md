# webinos device discovery API #

**Service Type**: http://webinos.org/api/discovery

webinos device discovery api provides the javascript interfaces for device discovery using zeroconf and bluetooth.

## Installation ##

To install the device discovery API you will need to npm the node module inside the webinos pzp.

For end users, you can simply open a command prompt in the root of your webinos-pzp and do: 

	npm install https://github.com/webinos/webinos-api-deviceDiscovery.git

For developers that want to tweak the API, you should fork this repository and clone your fork inside the node_module of your pzp.

	cd node_modules
	git clone https://github.com/<your GitHub account>/webinos-api-deviceDiscovery.git
	cd webinos-api-deviceDiscovery
	npm install


## Getting a reference to the service ##

To discover the service you will have to search for the "http://webinos.org/api/discovery" type. Example:

	var serviceType = "http://webinos.org/api/discovery";
	webinos.discovery.findServices( new ServiceType(serviceType), 
		{ 
			onFound: serviceFoundFn, 
			onError: handleErrorFn
		}
	);
	function serviceFoundFn(service){
		// Do something with the service
	};
	function handleErrorFn(error){
		// Notify user
		console.log(error.message);
	}

Alternatively you can use the webinos dashboard to allow the user choose the device discovery API to use. Example:
 	
	webinos.dashboard.open({
         module:'explorer',
	     data:{
         	service:[
            	'http://webinos.org/api/discovery'
         	],
            select:"services"
         }
     }).onAction(function successFn(data){
		  if (data.result.length > 0){
			// User selected some services
		  }
	 });

## Methods ##

Once you have a reference to an instance of a service you can use the following methods:

### BTfindservice (data, success) 

To find devices that support the specific service. This applies to both Android and Linux

### DNSfindservice (data, success) 

To find devices using DNS . This applies to Android

### findHRM (data, success)

To find Heart Rate Monitor device, only support Android OS.


## Links ##

- [Examples](https://github.com/webinos/webinos-api-deviceDiscovery/wiki/Examples)





