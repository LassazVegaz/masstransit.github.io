(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{388:function(e,t,i){"use strict";i.r(t);var r=i(10),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_7-1-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-7"}},[e._v("#")]),e._v(" 7.1.7")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#fixes"}},[e._v("Fixes")])]),t("li",[t("a",{attrs:{href:"#container-scope"}},[e._v("Container Scope")])]),t("li",[t("a",{attrs:{href:"#activemq-virtual-topic-prefix"}},[e._v("ActiveMQ Virtual Topic Prefix")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"fixes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixes"}},[e._v("#")]),e._v(" Fixes")]),e._v(" "),t("ul",[t("li",[e._v("SignalR Hubs now properly configure the broker topology (broken in 7.1.6)")]),e._v(" "),t("li",[e._v("Job State Machine message order fix")]),e._v(" "),t("li",[e._v("Removed the ListJsonConverter from the message deserializer for JSON messages (used by XML conversion only now)")]),e._v(" "),t("li",[e._v("TransactionBus pending operation fix")]),e._v(" "),t("li",[e._v("Invalid Content-Type causing endless loop on receiver")]),e._v(" "),t("li",[e._v("Removed unintentional topology configuration delay for RabbitMQ")]),e._v(" "),t("li",[e._v("Amazon SQS prefetch count algorithm always read 10 messages at a time, now will read actual number if prefetch count is < 10")])]),e._v(" "),t("h2",{attrs:{id:"container-scope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#container-scope"}},[e._v("#")]),e._v(" Container Scope")]),e._v(" "),t("p",[e._v("In previous versions, the container scope was not properly registered when resolving the consumer, resulting in the "),t("code",[e._v("IPublishEndpoint")]),e._v(" and "),t("code",[e._v("ISendEndpointProvider")]),e._v(" interfaces on dependent objects being resolved from a different scope. A single scope is now properly used to resolve all consumer dependencies.")]),e._v(" "),t("h2",{attrs:{id:"activemq-virtual-topic-prefix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#activemq-virtual-topic-prefix"}},[e._v("#")]),e._v(" ActiveMQ Virtual Topic Prefix")]),e._v(" "),t("p",[e._v("The virtual topic prefix can now be specified for ActiveMQ publish/subscribe, which is useful if the default broker configuration is changed to use a different prefix (or no prefix at all).")])])}),[],!1,null,null,null);t.default=o.exports}}]);