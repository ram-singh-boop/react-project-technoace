var div_count=0;var count=0;(function($){$(function(){$('[data-toggle="push"]').each(function(){var $this=$(this);var $target=$($this.data('target')||$this.attr('href')||'#navbar');var direction=$this.data('direction')||'left';$target.addClass('navbar-push').addClass('navbar-push-'+direction);var $canvas=$($this.data('canvas')||'body');$canvas.addClass('push-canvas');$this.on('click',function(e){$this.toggleClass('active');if($this.is('.fa-bars')){$this.toggleClass('fa-rotate-90');}$canvas.toggleClass('pushed-'+direction);$target.toggleClass('in');if($this.hasClass("active")){div_count=1;}else{div_count=0;count=0;}});});$("body .close-button").click(function(evt){var data=$('[data-toggle="push"]');if(evt.target.id=="navbar")return;if($(evt.target).closest('#navbar').length)return;if(data.hasClass("active")&&parseInt(div_count)>0){if(count>0){var $this=data;var $target=$($this.data('target')||$this.attr('href')||'#navbar');var direction=$this.data('direction')||'left';$target.addClass('navbar-push').addClass('navbar-push-'+direction);var $canvas=$($this.data('canvas')||'body');$canvas.addClass('push-canvas');$this.toggleClass('active');if($this.is('.fa-bars')){$this.toggleClass('fa-rotate-90');}$canvas.toggleClass('pushed-'+direction);$target.toggleClass('in');$(".navbar-toggle").toggleClass("new-toggle");count=0;}else{count++;}}});$("#mobile_close_button").click(function(){var data=$('[data-toggle="push"]');if(data.hasClass("active")&&parseInt(div_count)>0){var $this=data;var $target=$($this.data('target')||$this.attr('href')||'#navbar');var direction=$this.data('direction')||'left';var $canvas=$($this.data('canvas')||'.close-button');$this.toggleClass('active');if($this.is('.fa-bars')){$this.toggleClass('fa-rotate-90');}$(".push-canvas").removeClass('pushed-left');$target.toggleClass('in');$(".navbar-toggle").toggleClass("new-toggle");count=0;}});});})(jQuery);