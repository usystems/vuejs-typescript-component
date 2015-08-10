// demo data
var data = {
	name: 'My Tree',
	children: [
		{name: 'hello'},
		{name: 'wat'},
		{
			name: 'child folder',
			children: [
				{
					name: 'child folder',
					children: [
						{name: 'hello'},
						{name: 'wat'}
					]
				},
				{name: 'hello'},
				{name: 'wat'},
				{
					name: 'child folder',
					children: [
						{name: 'hello'},
						{name: 'wat'}
					]
				}
			]
		}
	]
}

// boot up the demo
var demo = new Vue({
	el: '#demo',
	data: {
		treeData: data
	}
})