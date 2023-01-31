(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{446:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"activemq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activemq"}},[t._v("#")]),t._v(" ActiveMQ")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://nuget.org/packages/MassTransit.ActiveMQ/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MassTransit.ActiveMQ"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"topology"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#topology"}},[t._v("#")]),t._v(" Topology")]),t._v(" "),s("p",[t._v("tbd")]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h3",{attrs:{id:"minimal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minimal"}},[t._v("#")]),t._v(" Minimal")]),t._v(" "),s("p",[t._v("In the example below, the ActiveMQ settings are configured.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ActiveMqConsoleListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Threading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("MassTransit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Extensions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hosting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Program")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateDefaultBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureServices")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("services "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddMassTransit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UsingActiveMq")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseSsl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                            h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                            h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RunAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The configuration includes:")]),t._v(" "),s("ul",[s("li",[t._v("The ActiveMQ host\n"),s("ul",[s("li",[t._v("Host name: "),s("code",[t._v("localhost")])]),t._v(" "),s("li",[t._v("User name and password used to connect to the host")])])])]),t._v(" "),s("p",[t._v("The port can also be specified as an additional parameter on the "),s("em",[t._v("Host")]),t._v(" method. If port 61617 is specified, SSL is automatically enabled.")]),t._v(" "),s("p",[t._v("MassTransit includes several receive endpoint level configuration options that control receive endpoint behavior.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("PrefetchCount")]),t._v(" "),s("td",[t._v("ushort")]),t._v(" "),s("td",[t._v("The number of unacknowledged messages that can be processed concurrently (default based on CPU count)")])]),t._v(" "),s("tr",[s("td",[t._v("AutoDelete")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("If true, the queue will be automatically deleted when the bus is stopped (default: false)")])]),t._v(" "),s("tr",[s("td",[t._v("Durable")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("If true, messages are persisted to disk before being acknowledged (default: true)")])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("When using ActiveMQ, receive endpoint queue names must "),s("em",[t._v("not")]),t._v(" include any "),s("code",[t._v(".")]),t._v(" characters. Using a "),s("em",[t._v("dotted")]),t._v(" queue name will break pub/sub message routing. If using a dotted queue name is required, such as when interacting with an existing queue, disable topic binding.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("endpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConfigureConsumeTopology "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("When the consume topology is not configured, the virtual consumer queues are not created.")])]),t._v(" "),s("h2",{attrs:{id:"amazon-mq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amazon-mq"}},[t._v("#")]),t._v(" Amazon MQ")]),t._v(" "),s("p",[t._v("Amazon MQ uses ActiveMQ, so the same transport is used. Amazon MQ requires SSL, so if MassTransit detects the host name ends with "),s("code",[t._v("amazonaws.com")]),t._v(", SSL is automatically configured.")]),t._v(" "),s("h2",{attrs:{id:"artemis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#artemis"}},[t._v("#")]),t._v(" Artemis")]),t._v(" "),s("p",[t._v("Artemis also supports the openwire protocol. However some differences exists that cause the Masstransit ActiveMQ transport provider not to function.\nOne of those causes is that Artemis works internally differentl with queues compared to ActiveMq. See "),s("a",{attrs:{href:"https://activemq.apache.org/components/artemis/migration",target:"_blank",rel:"noopener noreferrer"}},[t._v("Artemis:Virtual Topics"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The easiest way to get the ActiveMQ transport provider working with a Artemis broker:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" busControl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Bus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateUsingActiveMq")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cfg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tcfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("61618")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cfgHost "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\tcfgHost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\tcfgHost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\tcfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EnableArtemisCompatibility")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Calling "),s("code",[t._v("cfg.EnableArtemisCompatibility()")]),t._v(" will initialize the minimum necessary features so that the Masstransit ActiveMQ transport provider will work with the Artemis broker")]),t._v(" "),s("p",[t._v("Currently the only thing "),s("code",[t._v("cfg.EnableArtemisCompatibility()")]),t._v(" does is setting a predefined formatter "),s("code",[t._v("ArtemisConsumerEndpointQueueNameFormatter")]),t._v(" (which implements interface IActiveMqConsumerEndpointQueueNameFormatter) on the ConsumeTopology (accessible via cfg.ConsumeTopology )")]),t._v(" "),s("p",[t._v("Example of setting your own ConsumerEndpointQueueNameFormatter:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cfg.SetConsumerEndpointQueueNameFormatter(new MyCustomConsumerEndpointQueueNameFormatter());\n")])])]),s("p",[t._v("So it is still possible to create your own IActiveMqConsumerEndpointQueueNameFormatter if you want to tweak the queue name.")]),t._v(" "),s("p",[t._v("The responsibility of the formatter is to create the queuename for a given")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("- a given receive/consumer endpoint name \n- a given topic.\n")])])]),s("h2",{attrs:{id:"temporaryqueuenameformatter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#temporaryqueuenameformatter"}},[t._v("#")]),t._v(" TemporaryQueueNameFormatter")]),t._v(" "),s("p",[t._v("On the consume topology a TemporaryQueueNameFormatter can be configured. The responsibility of the formatter is to transform the 'system' generated name for a temporary queue.")]),t._v(" "),s("p",[t._v("This could be used to e.g. add a prefix to the generated temporary queuenames.\nThis helps to support namespaces in queuenames.\nArtemis can use this to enforce security policies")]),t._v(" "),s("p",[t._v("For adding a prefix, a handy helper is already provided.\nDuring the configure lambda:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetTemporaryQueueNamePrefix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mycustomnamespace."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Behind the scenes this does something like this:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetTemporaryQueueNameFormatter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("PrefixTemporaryQueueNameFormatter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mycustomnamespace."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);