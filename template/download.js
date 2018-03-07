Vue.component('download', {
		  template: '<div class="block" style="right:0;">' +
		      '<div class="block-head">{{ $t("title.down") }}</div>' +
		      '<div class="block-body" >' +
		      '<div v-if="down.visible">' +
		      '<table>' +
		      '<tr><td class="td-name">{{ $t("text.file") }}</td><td>{{down.name}}</td></tr>' +
		      '<tr><td class="td-name">{{ $t("text.hash") }}</td><td>{{down.hash}}</td></tr>' +
		      '<tr><td class="td-name">{{ $t("text.size") }}</td><td>{{down.length}}MB</td></tr>' +
		      '</table>' +
		      '<p v-if="down.process.visible" class="process">In the process<br>{{ down.progress }}%</p>' +
		      '<p v-if="down.btns.visible"><a :href="down.url" :download="down.name">' +
		      '<label class="btn"><i class="ion-ios-copy-outline"></i>{{ $t("btn.file") }}</label>' +
		      '</a></p>' +
		      '</div>' +
		      '</div>' +
		      '</div>',
		  props: ['down'],
	      })