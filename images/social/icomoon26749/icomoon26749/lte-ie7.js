/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-facebook' : '&#xe000;',
			'icon-google-plus' : '&#xe001;',
			'icon-twitter' : '&#xe002;',
			'icon-mail' : '&#xe003;',
			'icon-mail-2' : '&#xe004;',
			'icon-mail-3' : '&#xe005;',
			'icon-mail-4' : '&#xe006;',
			'icon-google' : '&#xe007;',
			'icon-google-plus-2' : '&#xe008;',
			'icon-google-plus-3' : '&#xe009;',
			'icon-google-plus-4' : '&#xe00a;',
			'icon-facebook-2' : '&#xe00b;',
			'icon-facebook-3' : '&#xe00c;',
			'icon-google-drive' : '&#xe00d;',
			'icon-twitter-2' : '&#xe00e;',
			'icon-twitter-3' : '&#xe00f;',
			'icon-feed' : '&#xe010;',
			'icon-feed-2' : '&#xe011;',
			'icon-feed-3' : '&#xe012;',
			'icon-picassa' : '&#xe013;',
			'icon-picassa-2' : '&#xe014;',
			'icon-dribbble' : '&#xe015;',
			'icon-dribbble-2' : '&#xe016;',
			'icon-dribbble-3' : '&#xe017;',
			'icon-github' : '&#xe018;',
			'icon-github-2' : '&#xe019;',
			'icon-github-3' : '&#xe01a;',
			'icon-github-4' : '&#xe01b;',
			'icon-github-5' : '&#xe01c;',
			'icon-wordpress' : '&#xe01d;',
			'icon-wordpress-2' : '&#xe01e;',
			'icon-pinterest' : '&#xe01f;',
			'icon-pinterest-2' : '&#xe020;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};