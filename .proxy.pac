function regExpMatch(url, pattern) {
	try { return new RegExp(pattern).test(url); } catch(ex) { return false; }
}

function FindProxyForURL(url, host) {
	if (regExpMatch(url, 'youtube.com|ytimg.com|blogger.com|facebook.com|twitter.com|foxmarks.com|wordpress.com|blogspot.com|python.org|fbcdn.net|groups.google.com|developer.android.com|mail-archive.com|picasaweb.google.com|imageshack|flickr.com|radikal.ru|com.py|q=cache:|tumblr.com|imagevenue.com|skneo2.com|dailymotion.com|wikipedia.org|wikimedia.org|feedburner.com|newsgator.com|feedproxy.google.com|linuxconsulting.ro|www.android-x86.org|docs.google.com|google.com/appsstatus|sites.google.com')) return 'SOCKS5 localhost:8080';
	return 'DIRECT';
}