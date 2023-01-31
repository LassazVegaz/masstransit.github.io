(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{347:function(t,e,s){"use strict";s.r(e);var a=s(10),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"transactional-outbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transactional-outbox"}},[t._v("#")]),t._v(" Transactional Outbox")]),t._v(" "),e("p",[t._v("It is common that a service may need to combine database writes with publishing events and/or sending commands. And in this scenario, it is usually desirable to do this atomically in a transaction. However, message brokers typically do not participate in transactions. Even if a message broker did support transactions, it would require two-phase commit (2PC) which should be avoided whenever possible.")]),t._v(" "),e("blockquote",[e("p",[t._v("While MassTransit has long provided an "),e("a",{attrs:{href:"/articles/outbox"}},[t._v("in-memory outbox")]),t._v(", there has often been criticism that it isn't a "),e("em",[t._v("real")]),t._v(" outbox. And while I have proven that it works, is reliable, and is extremely fast (broker message delivery speed), it does require care to ensure operations are idempotent and when an idempotent operation is detected events are republished. The in-memory outbox also does not function as an "),e("em",[t._v("inbox")]),t._v(", so exactly-once message delivery is not supported.")])]),t._v(" "),e("p",[t._v("The Transactional Outbox has two main components:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("The "),e("strong",[t._v("Bus Outbox")]),t._v(" works within a container scope (such as the scope created for an ASP.NET Controller) and adds published and sent messages to the specified "),e("code",[t._v("DbContext")]),t._v(". Once the changes are saved, the messages are available to the delivery service which delivers them to the broker.")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("strong",[t._v("Consumer Outbox")]),t._v(" is a combination of an "),e("em",[t._v("inbox")]),t._v(" and an "),e("em",[t._v("outbox")]),t._v(". The "),e("em",[t._v("inbox")]),t._v(" is used to keep track of received messages to guarantee  exactly-once consumer behavior. The "),e("em",[t._v("outbox")]),t._v(" is used to store published and sent messages until the consumer completes successfully. Once completed, the stored messages are delivered to the broker after which the received message is acknowledged. The Consumer Outbox works with all consumer types, including Consumers, Sagas, and Courier Actvities.")])])]),t._v(" "),e("p",[t._v("Either of these components can be used independently or both at the same time.")]),t._v(" "),e("h3",{attrs:{id:"bus-outbox-behavior"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bus-outbox-behavior"}},[t._v("#")]),t._v(" Bus Outbox Behavior")]),t._v(" "),e("p",[t._v("Normally when messages are published or sent they are delivered directly to the message broker:")]),t._v(" "),e("p",[e("img",{attrs:{src:"/write-to-broker.png",alt:"Delivery to Broker",title:"Delivery to Broker"}})]),t._v(" "),e("p",[t._v("When the bus outbox is configured, the scoped interfaces are replaced with versions that write to the outbox. Since "),e("code",[t._v("ISendEndpointProvider")]),t._v(" and "),e("code",[t._v("IPublishEndpoint")]),t._v(" are registered as scoped in the container, they are able to share the same scope as the "),e("code",[t._v("DbContext")]),t._v(" used by the application.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/write-to-outbox.png",alt:"Delivery to Outbox",title:"Delivery to Outbox"}})]),t._v(" "),e("p",[t._v("Once the changes are saved in the "),e("code",[t._v("DbContext")]),t._v(" (typically by the application calling "),e("code",[t._v("SaveChangesAsync")]),t._v("), the messages will be written to the database as part of the transaction and will be available to the delivery service.")]),t._v(" "),e("p",[t._v("The delivery service queries the "),e("code",[t._v("OutboxMessage")]),t._v(" table for messages published or sent via the Bus Outbox, and attempts to deliver any messages found to the message broker.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/outbox-to-broker.png",alt:"Delivery to Broker",title:"Delivery to Broker"}})]),t._v(" "),e("p",[t._v("The delivery service uses the "),e("em",[t._v("OutboxState")]),t._v(" table to ensure that messages are delivered to the broker in the order they were published/sent. The "),e("em",[t._v("OutboxState")]),t._v(" table is also used to lock messages so that multiple instances of the delivery service can coexist without conflict.")]),t._v(" "),e("h3",{attrs:{id:"consumer-outbox-behavior"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consumer-outbox-behavior"}},[t._v("#")]),t._v(" Consumer Outbox Behavior")]),t._v(" "),e("p",[t._v("Normally, when messages are published or sent by a consumer or one of its dependencies they are delivered directly to the message broker:")]),t._v(" "),e("p",[e("img",{attrs:{src:"/consumer-regular.png",alt:"Regular Consumer Behavior",title:"Regular Consumer Behavior"}})]),t._v(" "),e("p",[t._v("When the outbox is configured, the behavior changes. As a message is received, the "),e("em",[t._v("inbox")]),t._v(" is used to lock the message by "),e("code",[t._v("MessageId")]),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:"/consumer-inbox.png",alt:"Consumer Inbox",title:"Consumer Inbox"}})]),t._v(" "),e("p",[t._v("When the consumer publishes or sends a message, instead of being delivered to the broker it is stored in the "),e("em",[t._v("OutboxMessage")]),t._v(" table.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/inbox-outbox.png",alt:"Inbox to Outbox",title:"Inbox to Outbox"}})]),t._v(" "),e("p",[t._v("Once the consumer completes and the messages are saved to the outbox, those messages are delivered to the message broker in the order they were produced.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/inbox-outbox-broker.png",alt:"Deliver Outbox to Broker",title:"Deliver Outbox to Broker"}})]),t._v(" "),e("p",[t._v("If there are issues delivering the messages to the broker, message retry will continue to attempt message delivery.")]),t._v(" "),e("h3",{attrs:{id:"entity-framework-outbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entity-framework-outbox"}},[t._v("#")]),t._v(" Entity Framework Outbox")]),t._v(" "),e("p",[t._v("The Transactional Outbox for Entity Framework Core uses three tables in the "),e("code",[t._v("DbContext")]),t._v(" to store messages that are subsequently delivered to the message broker.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Table")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("InboxState")]),t._v(" "),e("td",[t._v("Tracks received messages by "),e("code",[t._v("MessageId")]),t._v(" for each endpoint")])]),t._v(" "),e("tr",[e("td",[t._v("OutboxMessage")]),t._v(" "),e("td",[t._v("Stores messages published or sent using "),e("code",[t._v("ConsumeContext")]),t._v(", "),e("code",[t._v("IPublishEndpoint")]),t._v(", and "),e("code",[t._v("ISendEndpointProvider")])])]),t._v(" "),e("tr",[e("td",[t._v("OutboxState")]),t._v(" "),e("td",[t._v("Tracks delivery of outbox messages by the delivery service (similar to "),e("em",[t._v("InboxState")]),t._v(" but for message sent outside of a consumer via the bus outbox)")])])])]),t._v(" "),e("h3",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("blockquote",[e("p",[t._v("The code below is based upon the "),e("a",{attrs:{href:"https://github.com/MassTransit/Sample-Outbox",target:"_blank",rel:"noopener noreferrer"}},[t._v("sample application"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("The outbox components are included in the "),e("code",[t._v("MassTransit.EntityFrameworkCore")]),t._v(" NuGet packages. The code below configures both the bus outbox and the consumer outbox using the default settings. In this case, PostgreSQL is the database engine.")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[t._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddEntityFrameworkOutbox")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RegistrationDbContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// configure which database lock provider to use (Postgres, SqlServer, or MySql)")]),t._v("\n\to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UsePostgres")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// enable the bus outbox")]),t._v("\n    o"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseBusOutbox")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("To configure the "),e("em",[t._v("DbContext")]),t._v(" with the appropriate tables, use the extension methods shown below:")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegistrationDbContext")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DbContext")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegistrationDbContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DbContextOptions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RegistrationDbContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("base")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnModelCreating")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelBuilder")]),t._v(" modelBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("base")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnModelCreating")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modelBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        modelBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddInboxStateEntity")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        modelBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddOutboxMessageEntity")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        modelBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddOutboxStateEntity")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("To configure the outbox on a receive endpoint, configure the receive endpoint as shown below. The configuration below uses a "),e("code",[t._v("SagaDefinition")]),t._v(" to configure the receive endpoint, which is added to MassTransit along with the saga state machine.")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegistrationStateDefinition")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SagaDefinition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RegistrationState"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IServiceProvider")]),t._v(" _provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegistrationStateDefinition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IServiceProvider")]),t._v(" provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _provider "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureSaga")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IReceiveEndpointConfigurator")]),t._v(" endpointConfigurator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISagaConfigurator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RegistrationState"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" consumerConfigurator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        endpointConfigurator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseMessageRetry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" r"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Intervals")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        endpointConfigurator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseEntityFrameworkOutbox")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RegistrationDbContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The definition is added with the saga state machine:")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[t._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSagaStateMachine")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RegistrationStateMachine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RegistrationState"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RegistrationStateDefinition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("EntityFrameworkRepository")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        r"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExistingDbContext")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RegistrationDbContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        r"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UsePostgres")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("The Entity Framework outbox adds a hosted service which removes delivered "),e("em",[t._v("InboxState")]),t._v(" entries after the "),e("em",[t._v("DuplicateDetectionWindow")]),t._v(" has elapsed. The Bus Outbox includes an additional hosted service that delivers the outbox messages to the broker.")]),t._v(" "),e("h3",{attrs:{id:"configuration-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration Options")]),t._v(" "),e("p",[t._v("The available outbox settings are listed below.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Setting")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("DuplicateDetectionWindow")]),t._v(" "),e("td",[t._v("The amount of time a message remains in the inbox for duplicate detection (based on MessageId)")])]),t._v(" "),e("tr",[e("td",[t._v("IsolationLevel")]),t._v(" "),e("td",[t._v("The transaction isolation level to use (Serializable by default)")])]),t._v(" "),e("tr",[e("td",[t._v("LockStatementProvider")]),t._v(" "),e("td",[t._v("The lock statement provider, needed to execute pessimistic locks. Is set via "),e("code",[t._v("UsePostgres")]),t._v(", "),e("code",[t._v("UseSqlServer")]),t._v(" (the default), or "),e("code",[t._v("UseMySql")])])]),t._v(" "),e("tr",[e("td",[t._v("QueryDelay")]),t._v(" "),e("td",[t._v("The delay between queries once messages are no longer available. When a query returns messages, subsequent queries are performed until no messages are returned after which the QueryDelay is used.")])]),t._v(" "),e("tr",[e("td",[t._v("QueryMessageLimit")]),t._v(" "),e("td",[t._v("The maximum number of messages to query from the database at a time")])]),t._v(" "),e("tr",[e("td",[t._v("QueryTimeout")]),t._v(" "),e("td",[t._v("The database query timeout")])])])]),t._v(" "),e("p",[t._v("The bus outbox includes some additional settings:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Setting")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("MessageDeliveryLimit")]),t._v(" "),e("td",[t._v("The number of messages to deliver at a time from the outbox to the broker")])]),t._v(" "),e("tr",[e("td",[t._v("MessageDeliveryTimeout")]),t._v(" "),e("td",[t._v("Transport Send timeout when delivering messages to the transport")])]),t._v(" "),e("tr",[e("td",[t._v("DisableDeliveryService()")]),t._v(" "),e("td",[t._v("Disable the outbox message delivery service, removing the hosted service from the service collection")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);