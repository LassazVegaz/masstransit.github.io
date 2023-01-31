(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{444:function(a,t,s){"use strict";s.r(t);var e=s(10),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"templates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#templates"}},[a._v("#")]),a._v(" Templates")]),a._v(" "),t("p",[a._v("MassTransit includes several "),t("code",[a._v("dotnet new")]),a._v(" templates to create MassTransit project and components.")]),a._v(" "),t("p",[a._v("A video introducing the templates is available on "),t("a",{attrs:{href:"https://youtu.be/nYKq61-DFBQ",target:"_blank",rel:"noopener noreferrer"}},[a._v("YouTube"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("dotnet new "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" MassTransit.Templates\n")])])]),t("p",[a._v("One installed, typing "),t("code",[a._v("dotnet new")]),a._v(" will display the available templates:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Template Name                              Short Name      Language  Tags\n-----------------------------------------  --------------  --------  ---------------------------\nMassTransit Consumer Saga                  mtsaga          [C#]      MassTransit/Saga\nMassTransit Docker                         mtdocker        [C#]      MassTransit/Docker\nMassTransit Message Consumer               mtconsumer      [C#]      MassTransit/Consumer\nMassTransit Routing Slip Activity          mtactivity      [C#]      MassTransit/Activity\nMassTransit Routing Slip Execute Activity  mtexecactivity  [C#]      MassTransit/ExecuteActivity\nMassTransit State Machine Saga             mtstatemachine  [C#]      MassTransit/StateMachine\nMassTransit Worker                         mtworker        [C#]      MassTransit/Worker\n")])])]),t("h2",{attrs:{id:"projects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#projects"}},[a._v("#")]),a._v(" Projects")]),a._v(" "),t("h3",{attrs:{id:"masstransit-worker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#masstransit-worker"}},[a._v("#")]),a._v(" MassTransit Worker")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dotnet new mtworker -n <YOUR NAME>\n")])])]),t("p",[a._v("Creates a dotnet project that is configured as a MassTransit Worker. Includes project references and an example\n"),t("code",[a._v("Program.cs")])]),a._v(" "),t("h3",{attrs:{id:"masstransit-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#masstransit-docker"}},[a._v("#")]),a._v(" MassTransit Docker")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dotnet new mtdocker\n")])])]),t("p",[a._v("Creates a "),t("code",[a._v("Dockerfile")]),a._v(" and a "),t("code",[a._v("docker-compose.yml")]),a._v(" in the project, configured for RabbitMQ.")]),a._v(" "),t("h2",{attrs:{id:"items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#items"}},[a._v("#")]),a._v(" Items")]),a._v(" "),t("h3",{attrs:{id:"masstransit-consumer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#masstransit-consumer"}},[a._v("#")]),a._v(" MassTransit Consumer")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dotnet new mtconsumer\n")])])]),t("p",[a._v("Creates a Consumer and ConsumerDefinition in "),t("code",[a._v("~/Consumers")]),a._v(" and an example message in "),t("code",[a._v("~/Contracts")]),a._v(".")]),a._v(" "),t("h3",{attrs:{id:"masstransit-saga-state-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#masstransit-saga-state-machine"}},[a._v("#")]),a._v(" MassTransit Saga State Machine")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dotnet new mtstatemachine\n")])])]),t("p",[a._v("Creates a StateMachine Saga in "),t("code",[a._v("~/StateMachines")]),a._v(" and an example event in "),t("code",[a._v("~/Contracts")])]),a._v(" "),t("h3",{attrs:{id:"masstransit-consumer-saga"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#masstransit-consumer-saga"}},[a._v("#")]),a._v(" MassTransit Consumer Saga")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dotnet new mtsaga\n")])])]),t("p",[a._v("Creates a Saga and SagaDefinition in "),t("code",[a._v("~/Sagas")]),a._v(", along with a few messages in the "),t("code",[a._v("~/Contracts")]),a._v(" folder that will\nwork the saga.")]),a._v(" "),t("h3",{attrs:{id:"masstransit-routing-slip-activity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#masstransit-routing-slip-activity"}},[a._v("#")]),a._v(" MassTransit Routing Slip Activity")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dotnet new mtactivity\n")])])]),t("p",[a._v("Creates an Activity, ActivityArguments, and ActivityLog in "),t("code",[a._v("~/Activities")])]),a._v(" "),t("h3",{attrs:{id:"masstransit-routing-slip-execute-activity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#masstransit-routing-slip-execute-activity"}},[a._v("#")]),a._v(" MassTransit Routing Slip Execute Activity")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dotnet new mtexecactivity\n")])])]),t("p",[a._v("Creates an Activity, ActivityArguments in "),t("code",[a._v("~/Activities")])])])}),[],!1,null,null,null);t.default=r.exports}}]);