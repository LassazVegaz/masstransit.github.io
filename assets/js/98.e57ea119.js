(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{384:function(t,a,e){"use strict";e.r(a);var s=e(10),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_7-1-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-3"}},[t._v("#")]),t._v(" 7.1.3")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#request-client"}},[t._v("Request Client")])]),a("li",[a("a",{attrs:{href:"#broker-disconnects"}},[t._v("Broker Disconnects")])]),a("li",[a("a",{attrs:{href:"#message-data"}},[t._v("Message Data")])]),a("li",[a("a",{attrs:{href:"#automatonymous"}},[t._v("Automatonymous")])]),a("li",[a("a",{attrs:{href:"#kafka-topic-creation"}},[t._v("Kafka Topic Creation")])]),a("li",[a("a",{attrs:{href:"#rabbitmq-delay-exchange"}},[t._v("RabbitMQ Delay Exchange")])]),a("li",[a("a",{attrs:{href:"#fault-publish-configuration"}},[t._v("Fault Publish Configuration")])]),a("li",[a("a",{attrs:{href:"#managed-identity-in-azure-functions"}},[t._v("Managed Identity in Azure Functions")])])])]),a("p"),t._v(" "),a("p",[t._v("This release is mostly bug fixes and minor tweaks, but any notable items are listed below")]),t._v(" "),a("h2",{attrs:{id:"request-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-client"}},[t._v("#")]),t._v(" Request Client")]),t._v(" "),a("p",[t._v("There was a bug in the request client when using multiple response types where consumer faults were not causing the request to fault.")]),t._v(" "),a("h2",{attrs:{id:"broker-disconnects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker-disconnects"}},[t._v("#")]),t._v(" Broker Disconnects")]),t._v(" "),a("p",[t._v("There was a case where a broker disconnect could prevent a receive endpoint from restarting after reconnection. The receive transport has been restructured to eliminate the complexity and ensure reconnection until stopped. Riders were also updated to use the new receive transport.")]),t._v(" "),a("h2",{attrs:{id:"message-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-data"}},[t._v("#")]),t._v(" Message Data")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("MessageData<Stream>")]),t._v(" property is now supported, in addition to "),a("code",[t._v("string")]),t._v(" and "),a("code",[t._v("byte[]")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"automatonymous"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatonymous"}},[t._v("#")]),t._v(" Automatonymous")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Finalize()")]),t._v(" extension was not working properly in "),a("code",[t._v("Catch")]),t._v(" blocks.")]),t._v(" "),a("h2",{attrs:{id:"kafka-topic-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-topic-creation"}},[t._v("#")]),t._v(" Kafka Topic Creation")]),t._v(" "),a("p",[t._v("Kafka Topics can now be created. Within the topic endpoint configuration, you can specify:")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TopicEndpoint")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("KafkaMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"topic-name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"consumer-group-name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateIfMissing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NumPartitions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//number of partitions")]),t._v("\n        t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReplicationFactor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//number of replicas")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"rabbitmq-delay-exchange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-delay-exchange"}},[t._v("#")]),t._v(" RabbitMQ Delay Exchange")]),t._v(" "),a("p",[t._v("The delay exchange should no longer create/bind a queue of the same name.")]),t._v(" "),a("h2",{attrs:{id:"fault-publish-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fault-publish-configuration"}},[t._v("#")]),t._v(" Fault Publish Configuration")]),t._v(" "),a("p",[t._v("The publishing of faults can now be disable by setting "),a("code",[t._v("PublishFaults")]),t._v(" to false on a receive endpoint.")]),t._v(" "),a("h2",{attrs:{id:"managed-identity-in-azure-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#managed-identity-in-azure-functions"}},[t._v("#")]),t._v(" Managed Identity in Azure Functions")]),t._v(" "),a("p",[t._v("When configuring Azure functions, if no key is found in the connection string, the Managed Identity token provider is automatically configured.")])])}),[],!1,null,null,null);a.default=n.exports}}]);