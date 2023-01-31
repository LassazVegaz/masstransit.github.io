(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{358:function(t,s,e){"use strict";e.r(s);var a=e(10),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"moving-to-net-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#moving-to-net-5"}},[t._v("#")]),t._v(" Moving to .NET 5")]),t._v(" "),s("p",[t._v("Microsoft has "),s("a",{attrs:{href:"https://devblogs.microsoft.com/dotnet/announcing-net-5-0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("released"),s("OutboundLink")],1),t._v(" .NET 5, which can be "),s("a",{attrs:{href:"https://dotnet.microsoft.com/download/dotnet/5.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("downloaded"),s("OutboundLink")],1),t._v(" now. There are significant new features available while maintaining compatibility with previous versions (including the LTS 3.1 release, which will continue to be supported).")]),t._v(" "),s("p",[t._v("This release also includes "),s("a",{attrs:{href:"https://devblogs.microsoft.com/dotnet/c-9-0-on-the-record/",target:"_blank",rel:"noopener noreferrer"}},[t._v("C# 9"),s("OutboundLink")],1),t._v(", which has a bunch of new language features – one of the most important being "),s("em",[t._v("records")]),t._v(".")]),t._v(" "),s("p",[t._v("This article summarizes some of the new features and how they relate to MassTransit, along with some general thoughts. These are just what has been found so far, there are surely more useful applications of new runtime and language features.")]),t._v(" "),s("h2",{attrs:{id:"records"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#records"}},[t._v("#")]),t._v(" Records")]),t._v(" "),s("p",[t._v("One of the coolest new features in .NET 5, a record is a read-only (immutable) data structure. A record is a reference type, which makes it a great message type. For example, consider the following message contract.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("record")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderSubmitted")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" OrderId "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("DateTime")]),t._v(" OrderDate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("To publish the "),s("em",[t._v("OrderSubmitted")]),t._v(" event, a message initializer is used to create the event.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("bus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Publish")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OrderSubmitted"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" OrderId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OrderDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DateTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UtcNow "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This calls the "),s("em",[t._v("Publish")]),t._v(" overload with the following signature:")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Publish")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")])]),t._v(" values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CancellationToken")]),t._v(" cancellationToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Using the new record type, this contract could be rewritten as shown below.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("record")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderSubmitted")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" OrderId "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("DateTime")]),t._v(" OrderDate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The record type event could be published the same way, using a message initializer, as shown above. Another way would be to use the record initializer to send the actual message type created without using a message initializer.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("bus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Publish")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OrderSubmitted"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" OrderId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OrderDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DateTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UtcNow "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v('Did you spot the difference? It\'s subtle. C# 9 includes "target-typing", where the target type is known for the '),s("em",[t._v("new")]),t._v(" expression. This means that the type no longer needs to be specified when using "),s("em",[t._v("new")]),t._v(". The "),s("code",[t._v("()")]),t._v(" is the only difference, which creates a specific instance of the record type instead of an anonymous type (which is passed to the message initializer). This in turn calls a different "),s("em",[t._v("Publish")]),t._v(" overload.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Publish")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CancellationToken")]),t._v(" cancellationToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("When using record type initializers, message type initializers, along with type conversion and shortcut variables (via "),s("code",[t._v("InVar")]),t._v(") are not available.")])]),t._v(" "),s("p",[t._v("Since a record is a reference type, and under the covers a record has private setters for properties, they serialize as expected. If record constructors are used, it may be necessary to include a default constructor to support proper deserialization.")]),t._v(" "),s("h2",{attrs:{id:"module-initializers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-initializers"}},[t._v("#")]),t._v(" Module Initializers")]),t._v(" "),s("p",[t._v("I recently commented during one of the "),s("a",{attrs:{href:"https://www.youtube.com/playlist?list=PLx8uyNNs1ri1UA_Nerr7Ej3g9nT2PxbbH",target:"_blank",rel:"noopener noreferrer"}},[t._v("Season 2"),s("OutboundLink")],1),t._v(" episodes on YouTube that I wished C# had module initializers. Well, sure as s--t, they're now part of C# 9. And one of the other clever tricks is the ability to include a method in an interface, in this case, a static internal method, that is marked with the "),s("code",[t._v("[ModuleInitializer]")]),t._v(" attribute. In this method, MassTransit's global topology is being used to configure the "),s("code",[t._v("CorrelationId")]),t._v(" for the message contract.")]),t._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("record")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderSubmitted")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Guid")]),t._v(" OrderId "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("DateTime")]),t._v(" OrderDate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModuleInitializer")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("internal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        MessageCorrelation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseCorrelationId")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OrderSubmitted"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrderId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This method will be called automatically by the runtime, yet not be visible in the interface. This assumes that message contracts are in a separate assembly from consumers and producers.")])])}),[],!1,null,null,null);s.default=n.exports}}]);