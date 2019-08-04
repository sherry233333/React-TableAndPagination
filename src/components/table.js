import React from "react";
import Button from "./button"
import "./css/table.css"

class table extends React.Component{
    constructor(props){
        super(props);
        this.state={
            //5个button的名称
            but:['首页','上一页','下一页','尾页','GO'],
            //页面上的列表的列名称
            th:['item1','item2','item3','item4'],
            //tr数据里面的item的名称，也就是数据库里的数据名称，跟列名可能不同
            itemname:['itemname1','itemname2','itemname3','itemname4'],
            //表格数据
            tr:[
                {itemname1:'123',itemname2:'123',itemname3:'123',itemname4:'123'},
                {itemname1:'123',itemname2:'123',itemname3:'123',itemname4:'123'},
                {itemname1:'123',itemname2:'123',itemname3:'123',itemname4:'123'}
            ],
            page:{
                //当前页数
                cur:1,
                //每页显示多少个
                everypage:10,
                //总页数
                totalpage:20,
                //总数据条数
                itemNum:198
            },
            jump:''
        }
        this.changePage=this.changePage.bind(this);
        this.changeEverypage=this.changeEverypage.bind(this);
        this.getData=this.getData.bind(this);
        this.pageInputChange=this.pageInputChange.bind(this);
        this.pageInputChangeGo=this.pageInputChangeGo.bind(this);
    }

    //点击‘首页’、‘上一页’、‘下一页’、‘尾页’按钮时
    changePage(e){
        let buttonName=e.target.innerHTML;
        if((buttonName==this.state.but[0]&&this.state.page.cur==1)||(buttonName==this.state.but[1]&&this.state.page.cur==1)||(buttonName==this.state.but[2]&&this.state.page.cur==this.state.page.totalpage)||(buttonName==this.state.but[3]&&this.state.page.cur==this.state.page.totalpage)){}else{
            let newpage=this.state.page;
            switch(buttonName){
                case this.state.but[0]:
                    newpage.cur=1;
                    this.setState({
                        page:newpage,
                        jump:''
                    })
                    break;
                case this.state.but[1]:
                    newpage.cur=newpage.cur-1;
                    this.setState({
                        page:newpage,
                        jump:''
                    })
                    break;
                case this.state.but[2]:
                    newpage.cur=newpage.cur+1;
                    this.setState({
                        page:newpage,
                        jump:''
                    })
                    break;
                case this.state.but[3]:
                    newpage.cur=newpage.totalpage;
                    this.setState({
                        page:newpage,
                        jump:''
                    })
                    break;
            }
            this.getData();
        }
        
    }

    //改变select每页显示条数
    changeEverypage(e){
        let neweverypage=e.target.value;
        let newpage=this.state.page;
        newpage.everypage=neweverypage;
        newpage.totalpage=Math.ceil(newpage.itemNum/neweverypage);
        newpage.cur=1;
        this.setState({
            page:newpage,
            jump:''
        })
        this.getData();
    }

    //跳转到某一页的input改变，必须输入纯数字
    pageInputChange(e){
        let newjump=e.target.value;
        var reg=/^\d{1,}$/
        var pattern=new RegExp(reg);
        if(pattern.test(newjump)){
            this.setState({
                jump:newjump
            })
        }       
    }

    //点击跳转到某一页的按钮go
    pageInputChangeGo(){
        let newpage=this.state.page;
        if(this.state.jump<=this.state.page.totalpage&&this.state.jump>=1){
            newpage.cur=this.state.jump;
            this.setState({
                page:newpage
            })
            this.getData();
        }
        this.setState({
            jump:''
        })
    }

    //从后台获取数据
    getData(){
        console.log('获取后台数据');
        console.log(`当前在第${this.state.page.cur}页，每页${this.state.page.everypage}条数据，`);
        //改变this.state.tr的值。如果数据数量改变，需要改变page中的数据总条数itemNum和总页数
        //如果发现现在的页数超过了总页数，弹出提示，修改cur页数
        
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        {this.state.th.map(item=><th>{item}</th>)}
                    </tr>
                    {this.state.tr.map(item=>
                        <tr>
                            {this.state.itemname.map(title=><td>{item[title]}</td>)}
                        </tr>
                    )}
                </table>

                <div className="pagination">
                    <Button name={this.state.but[0]} cname={this.state.page.cur==1?'buttonNoclick':'button'} click={this.changePage}/>
                    <Button name={this.state.but[1]} cname={this.state.page.cur==1?'buttonNoclick':'button'} click={this.changePage}/>
                    <span>{this.state.page.cur}</span>
                    <Button name={this.state.but[2]} cname={this.state.page.cur==this.state.page.totalpage?'buttonNoclick':'button'} click={this.changePage}/>
                    <Button name={this.state.but[3]} cname={this.state.page.cur==this.state.page.totalpage?'buttonNoclick':'button'} click={this.changePage}/>
                    <input className='pageInput' value={this.state.jump} onChange={this.pageInputChange}></input>
                    <Button name={this.state.but[4]} cname='button' click={this.pageInputChangeGo}/>
                    <select onChange={this.changeEverypage}>
                        <option>10</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <span>总页数：{this.state.page.totalpage}</span>
                </div>
            </div>
        )
    }

}

export default table;