(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{443:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"azure-service-bus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-service-bus"}},[s._v("#")]),s._v(" Azure Service Bus")]),s._v(" "),t("p",[s._v("Azure Service Bus provides a feature called "),t("em",[s._v("message sessions")]),s._v(", to process multiple messages at once and to store some state on a temporary basis, which can be retrieved by some key.")]),s._v(" "),t("p",[s._v("The latter give us an ability to use this feature as saga state storage. Using message sessions as saga persistence, you can only use Azure Service Bus for both messaging and saga persistence purposes, without needing any additional infrastructure. You have to explicitly enable message sessions when configuring the endpoint, and use parameterless constructor to instantiate the saga repository.")]),s._v(" "),t("p",[s._v("When using message sessions, concurrency is managed by Azure Service Bus.")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("Message sessions can only be correlated using the CorrelationId, which is copied to the message SessionId. Correlation expressions are not supported when using message sessions.")])]),s._v(" "),t("p",[s._v("Here is the basic sample of how to use the Azure Service Bus message session as saga repository:")]),s._v(" "),t("div",{staticClass:"language-cs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OrderState")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token type-list"}},[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SagaStateMachineInstance")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Guid")]),s._v(" CorrelationId "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" CurrentState "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("DateTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")])]),s._v(" OrderDate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"container-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#container-integration"}},[s._v("#")]),s._v(" Container Integration")]),s._v(" "),t("p",[s._v("To configure a message session as the saga repository for a saga, use the code shown below using the "),t("em",[s._v("AddMassTransit")]),s._v(" container extension.")]),s._v(" "),t("div",{staticClass:"language-cs extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-cs"}},[t("code",[s._v("container"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("AddMassTransit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cfg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    cfg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token generic-method"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("AddSagaStateMachine")]),t("span",{pre:!0,attrs:{class:"token generic class-name"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("OrderStateMachine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" OrderState"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MessageSessionRepository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("Then, configure the endpoint to require a message session.")]),s._v(" "),t("div",{staticClass:"language-cs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cs"}},[t("code",[s._v("sbc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ReceiveEndpoint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order-state"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ep "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RequiresSession "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token generic-method"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ConfigureSaga")]),t("span",{pre:!0,attrs:{class:"token generic class-name"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("OrderState"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("provider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("To configure the receive endpoint without a container, the state machine and instance type can be specified explicitly.")]),s._v(" "),t("div",{staticClass:"language-cs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" sagaStateMachine "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("OrderStateMachine")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// This gives an Obsolete-warning ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// var repository = new MessageSessionSagaRepository<OrderState>(); ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// This is suggested instead")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" repository "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MessageSessionSagaRepository"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token generic-method"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Create")]),t("span",{pre:!0,attrs:{class:"token generic class-name"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("OrderState"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncfg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ReceiveEndpoint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order-state"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ep "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RequiresSession "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("StateMachineSaga")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sagaStateMachine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" repository"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);