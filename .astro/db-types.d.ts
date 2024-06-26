// This file is generated by Astro DB
declare module 'astro:db' {
	export const Task: import("@astrojs/db/runtime").Table<
		"Task",
		{"name":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"name","collection":"Task","primaryKey":false,"optional":false}},"id":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Task","primaryKey":true}},"dueDate":{"type":"date","schema":{"optional":true,"unique":false,"deprecated":false,"name":"dueDate","collection":"Task"}},"priority":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"priority","collection":"Task","primaryKey":false,"optional":true}},"completed":{"type":"boolean","schema":{"optional":false,"unique":false,"deprecated":false,"name":"completed","collection":"Task","default":false}},"notes":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"notes","collection":"Task","primaryKey":false,"optional":true}}}
	>;
}
