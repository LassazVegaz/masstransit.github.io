(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{349:function(e,a,t){"use strict";t.r(a);var s=t(10),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"green-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#green-cache"}},[e._v("#")]),e._v(" Green Cache")]),e._v(" "),a("p",[e._v("Caching has long been a requirement for building fast systems, including microprocessors, file systems, databases, the internet, and even developer applications. Typically, trading a little memory for increased performance is a good thing - applications respond more quickly which leads to happy users.")]),e._v(" "),a("p",[e._v("MassTransit has tried a few different ways to cache things like send endpoints, to reduce the load on the broker and minimize application latency when sending messages. They've all sort of worked, but I really wanted to come up with a way to avoid duplicate work and also avoid cascade failures by caching failures. I also wanted to make sure highly dynamic systems that heavily use temporary queues don't run out of channels by keeping too many send endpoints cached that are only used once.")]),e._v(" "),a("p",[e._v("To that end, I created "),a("em",[e._v("Green Cache")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"cache-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-architecture"}},[e._v("#")]),e._v(" Cache Architecture")]),e._v(" "),a("p",[e._v("Green Cache is an in-memory, asynchronous, least-recently-used (LRU) cache optimized for indexed access to cached values. When using Green Cache, an index is used to read from the cache, with values added via a "),a("em",[e._v("missing value factory")]),e._v(" which can be provided to the "),a("code",[e._v("Get")]),e._v(" operation. The cached values are held within the address of a single process, and are accessed directly by the code running in that process.")]),e._v(" "),a("blockquote",[a("p",[e._v("This type of cache is very fast, requires no serialization, and is well suited for creating connection pools, session pools, and for maintaining handles to resources.")])]),e._v(" "),a("p",[e._v("Green Cache is composed of a node tracker that keeps track of cached values which is then shared by the cache's indices. Each index has a key (that is strongly typed) which is a property on the cached value, that is the unique identity for the value.")]),e._v(" "),a("h2",{attrs:{id:"asynchronous-for-the-await-for-it-win"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-for-the-await-for-it-win"}},[e._v("#")]),e._v(" Asynchronous, for the, "),a("em",[e._v("await")]),e._v(" for it, win!")]),e._v(" "),a("p",[e._v("Cached values are read using an index, and that read operation is fully asynchronous. The "),a("code",[e._v("Get")]),e._v(" method shown below has two key aspects that make it a really powerful abstraction for this type of cache.")]),e._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e._v("Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("TValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TKey")]),e._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MissingValueFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("TKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" TValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("First the key, which should be obvious. If it were a "),a("code",[e._v("string")]),e._v(", a string would be provided to find the value using the index. The second argument is a factory method to create the value if it isn't found. This delegate is asynchronous as well, and is only called if the value is not found.")]),e._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("delegate")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e._v("Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("TValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("MissingValueFactory")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" TKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" TValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TKey")]),e._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("The compositional nature of the TPL makes this a really strong abstraction -- the "),a("code",[e._v("Task")]),e._v(" returned by the "),a("code",[e._v("Get")]),e._v(" method above is not the same task that is returned from the missing value factory. In order to make cache access quick, the "),a("code",[e._v("Task")]),e._v(" returned is a placeholder which is decoupled from the factory method. This placeholder reserves an index slot for the key specified, while the factory method is invoked asynchronously.")]),e._v(" "),a("p",[e._v("Adding the key to the index allows subsequent reads for the same key to receive the same placeholder as the first read -- preventing duplicate factory methods being executed. The factory methods for these reads aren't lost, however, and are stored by the placeholder in the order they were received. This approach makes it possible for dozens of tasks to wait on the creation of the value for the same key to be returned.")]),e._v(" "),a("p",[e._v("A subsequent reader for the same key may receive one of the following results:")]),e._v(" "),a("ul",[a("li",[e._v("The value created by the first reader, if the factory method ran to completion.")]),e._v(" "),a("li",[e._v("The value created by a subsequent reader that called "),a("code",[e._v("Get")]),e._v(" before this reader.")]),e._v(" "),a("li",[e._v("The value created by the factory method provided by this reader.\n"),a("ul",[a("li",[e._v("The value, if the factory method ran to completion")]),e._v(" "),a("li",[e._v("A faulted task, "),a("em",[e._v("only")]),e._v(" if the factory method provided by this reader throws an exception. This fault would only be visible to this reader, any subsequent readers would not see this exception.")])])])]),e._v(" "),a("p",[e._v("If a subsequent reader does not provide a missing value factory, the reader will receive one of the following results:")]),e._v(" "),a("ul",[a("li",[e._v("The value created by a previous reader, if any previous reader's factory method ran to completion.")]),e._v(" "),a("li",[e._v("A "),a("code",[e._v("KeyNotFoundException")]),e._v(" if no previous reader's factory method ran to completion (either canceled or faulted).")])]),e._v(" "),a("p",[e._v("Once the value has been created, the placeholder is replaced with a cached node by the node tracker. If the cache has multiple indices, the value is then propagated to the other indices, making it available to readers.")]),e._v(" "),a("blockquote",[a("p",[e._v("An index by itself is consistent, you can read cached values and they'll exist once created, but there is no guarantee that another index will have the value until after it has been created and propagated.")])]),e._v(" "),a("h2",{attrs:{id:"recycling-staying-green"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recycling-staying-green"}},[e._v("#")]),e._v(" Recycling (staying Green)")]),e._v(" "),a("blockquote",[a("p",[e._v("A cache without an eviction policy is a memory leak.")])]),e._v(" "),a("p",[e._v("Green Cache uses two methods for managing memory usage, a capacity limit combined with an age limit.")]),e._v(" "),a("p",[e._v("The capacity limit specifies how many values can be stored in the cache. The cache capacity is dynamic and doesn't represent a fixed limit how many values are in the cache at a point in time. Instead, capacity works in combination with the minimum age to make the cache useful for short-lived values, while keeping the size of the cache under control long term.")]),e._v(" "),a("p",[e._v("The age limits define the minimum and maximum age of a value. The minimum age is a fixed lower limit specifying how long a value is cached, and a value will never be removed until it is of legal age. The maximum age is the longest an untouched value will remain in the cache before being removed.")]),e._v(" "),a("blockquote",[a("p",[e._v("Yes, if you add one hundred million values per minute to a cache with a capacity of 1000, you will have one hundred "),a("em",[e._v("meeellllion")]),e._v(" values in your cache for a minute.")])]),e._v(" "),a("h3",{attrs:{id:"under-the-hood"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood"}},[e._v("#")]),e._v(" Under the hood")]),e._v(" "),a("p",[e._v("To manage values, a node tracker determines the overall potential lifespan of a value (basically the difference between the maximum and minimum age) and splits that time period into buckets. The buckets are arranged in order by time, and accesses the buckets using a ring (which sounds really cool, but it's just using the "),a("code",[e._v("%")]),e._v(" operator to avoid reusing a bucket index).")]),e._v(" "),a("p",[e._v("As time passes, the active range of buckets moves forward. Once the cache capacity has been reached, older buckets are emptied to make room for new values.")]),e._v(" "),a("p",[e._v("Values within a bucket can be touched, so that even if they are legally old enough to be removed from the cache they'll remain and be moved to the current bucket. This ensures that "),a("em",[e._v("lively")]),e._v(" values are kept in the cache longer than "),a("em",[e._v("cold fish")]),e._v(".")]),e._v(" "),a("p",[e._v("The node tracker also have a maximum lifetime before it essentially "),a("em",[e._v("drops everything")]),e._v(" and restarts. The reason for this is to avoid weird things that happen when a cache lives forever and to allow the process memory structure a "),a("em",[e._v("reboot")]),e._v(" to avoid long-term garbage collection issues. The reason for this is simple -- years of building services that run 24x7 and seeing weird things magically fix themselves after restarting the service.")]),e._v(" "),a("h2",{attrs:{id:"wrap-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap up")]),e._v(" "),a("p",[e._v("That's about it for now. For MassTransit developers, this doesn't change anything on the surface as it is completely internal. I just found it interesting enough to share, both to get feedback and to come to some mental conclusion after the time spent creating "),a("em",[e._v("Green Cache")]),e._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);