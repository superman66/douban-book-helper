// ==UserScript==
// @name         豆瓣图书下载助手
// @namespace    https://github.com/superman66/douban-book-helper/
// @version      0.1
// @description  下载助手
// @author       superman
// @match        https://book.douban.com/subject/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
// Your code here...
var sites = [
  {
    name: '我的小书屋',
    url: 'http://mebook.cc/?s=',
  },
  {
    name: 'readfree',
    url: 'http://readfree.me/search/?q=',
  },
  {
    name: '周读',
    url: 'http://www.ireadweek.com/index.php/Index/bookList.html?keyword=',
  },
]

var downloadTool = {
  targetId: 'buyinfo',
  getTarget: function(id) {
    return document.querySelector(`#${id}`)
  },
  getBookname: function(){
   return document.querySelector('h1 > span').innerText;
  },
  addLink: function(site, bookname) {
    var link = document.createElement('a')
    link.href = site.url + bookname
    link.innerText = site.name
    link.target = '_blank'
    return link
  },
  addSites: function(sites) {
     var self = this;
    var target = this.getTarget(this.targetId)
    if (!target) return
    target.innerHTML = ''
    target.innerHTML = '<h2>电子书下载链接</h2>'
    sites.forEach(function(site) {
      var link = self.addLink(site, self.getBookname())
      var empty = document.createTextNode('  ')
      target.appendChild(link)
      target.appendChild(empty)
    })
  },
}

downloadTool.addSites(sites)

})();
