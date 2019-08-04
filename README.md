## 一个带分页的table

样式可以根据需要自行添加<br>

在table.js中的state里面的：<br>
but中填写5个按钮的名称，按照顺序对应“首页”、“上一页”、“下一页”、“尾页”和跳转去某一页的按钮的名称。<br>
th中填写网页上表格的标题。<br>
tr中是后台传过来显示的数据。<br>
page中是分页有关的数据，包括当前页数、每页显示多少条、总页数、总数据量。<br>
jump存放要跳转到某一页的input框中的输入。<br>

changePage函数处理“首页”、“上一页”、“下一页”、“尾页”按钮对state中page的内容的修改。<br>
changeEverypage函数处理修改每页显示条数后的state中page的内容。<br>
pageInputChange函数绑定跳转页面input的onChange事件，修改state中jump的值，这里会正则匹配是否输入的是纯数字。<br>
pageInputChangeGo函数处理点击GO跳转时的逻辑。<br>
getData函数根据当前state中page的内容向后台发送数据。在changePage、changeEverypage、pageInputChangeGo函数中都会调用这一函数。

