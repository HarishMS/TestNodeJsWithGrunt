"use strict";
function index(req, res) {
    res.render('index', { title: 'Express', year: new Date().getUTCSeconds() });
}
exports.index = index;
;
function about(req, res) {
    res.render('about', { title: 'About', year: new Date().getUTCSeconds(), message: 'Your application description page' });
}
exports.about = about;
;
function contact(req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getUTCSeconds(), message: 'Your contact page' });
}
exports.contact = contact;
;
