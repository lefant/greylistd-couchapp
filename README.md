Andreas Unterkircher and me came up with the idea of putting
greylisting data into couchdb.

Check [1] for an implementation of greylistd for exim that writes its
data to couchdb.

This project is just a small couchapp [2] to then visualize the
greylisting data in couchdb.

Official github repo is at [3].

It uses native erlang views for speed, so you need to enable that in
the couchdb configuration as explained here: [4].


[1]: http://oss.netshadow.at/projects/show/greylistdcouchdb
[2]: http://couchapp.org/
[3]: https://github.com/lefant/greylistd-couchapp
[4]: http://wiki.apache.org/couchdb/EnableErlangViews
