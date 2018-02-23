Vue.component('speed', {
		  template: '<div class="speed" v-show="main" style="display: none;">' +
		      '<i class="ion-ios-arrow-thin-up"></i>&nbsp;<b>{{speed.up/1000}}</b>&nbsp;kB/sec&nbsp;' + 
		      '<i class="ion-ios-arrow-thin-down"></i>&nbsp;<b>{{speed.down/1000}}</b>&nbsp;kB/sec&nbsp;' +
		      '</div>',
		  props: ['main', 'speed'],
	      })