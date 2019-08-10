import styled from "styled-components"
import { createGlobalStyle } from "styled-components";
import global from "@/core/global"
import Theater from "../../ju";
let r = global.r;
export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    touch-action: pan-y;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
    cursor: pointer;
}
`
// 城市按钮
export const ButtonCity = styled.div`
    margin:0 auto;
    height:${r(30)};
    width:${r(60)};
    line-height:${r(30)};
    background:#000;
    color:#fff;
    text-align:center;
    opacity:0.5;
    border-radius:${r(20)}
`
/* 城市选择部分 */
export const CityWrap = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#e3e3e3;
    z-index:1000;
    display:flex;
    font-size: 20px;
    .left{
        width:200px;
        overflow:scroll;
        flex:7;
        color: #232323; 
        .upercity{
            height:${r(40)}; 
            line-height:${r(40)};
            padding-left:${r(10)};
            box-sizing:border-box;
        }
        ol{
            background:#fff;         
            padding-left:${r(20)};
            padding-right:${r(20)};
            box-sizing:border-box;
            li+li{
                border-top:${r(1)} solid #999;
            }
        }
        .citys{
            height:${r(40)};
            line-height:${r(40)};          
        }
    }
    .right{
        flex:1;
        height:100%;
        color:#999;
        text-align:center;
        padding-top:${r(100)};
        box-sizing:border-box;
    }
`
/* 轮播部分 */
export const BannerBox = styled.div`
    width:${r(375)};
    margin:0 auto;
    height:${r(200)};
    .am-wingblank{
        margin:0 ! important;
        .am-carousel-wrap-dot > span{
            display:inline ! important;
        }
        .slider-slide{
            a{
                height:${r(198)} !important;
                img{
                    height:${r(198)} !important;
                    width:100% !important;
                }
            }
        }
    }
`
/* 演唱形式分类 */
export const Operaclass = styled.div`
    width:${r(375)};
    margin:0 auto;
    height:${r(110)};
    display:flex;
    background:#fff;
    justify-content: space-between;
    align-items:center;
    a{
        display:block;
        height:${r(80)};
        width:${r(60)};
        color:#333;
        div{
            height:${r(51)};
            width:${r(51)};
            text-align:center;
            img{
                width:100%;
            } 
        }
        p{
            text-align:center;
        }
    }
`
/* 热门剧场展示部分 */
export const HotTheaterBox = styled.div`
    width:${r(375)};
    margin:0 auto;
    padding:${r(10)};
    h1{
        font-weight:700;
    }
    .swiper-slide{  
        .total{
            padding:${r(15)};
            width:${r(263)} ;
            height:${r(300)};
            border:1px solid #e3e3e3;
            .top{
            display:flex;
            width:${r(226)};
            height:${r(50)};
            .toppic{
                width:${r(50)};
                height:${r(50)};
                img{
                    width:100%;
                    height:100%;
                }
            }
            .topRight{
                padding-left:${r(20)};
               h3{
                   font-size:${r(16)};
                   padding:${r(10)} 0;
               }
                p{
                    font-size:${r(12)};
                    color:#666;
                }
            }
        }
        .bottom{
            float:left;
            .time{
                height:${r(50)};
                line-height:${r(50)};
                border-bottom:1px solid #e3e3e3;
            }
            .pics{
                padding-right:${r(10)};
                width:${r(106)};
                height:${r(145)};
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
     }
    }     
`
/* 剧院展示部分的样式 */
export const ShowData = styled.div`
    width:${r(375)};
    margin:0 auto;
    margin-bottom:${r(15)};
    .show{
        display:flex;
        padding:${r(12)} ${r(18)};
        .pic{
            height:${r(145)};
            width:${r(106)};
        img{
            width:auto;
            height:100%;
        }
        }    
    }
    .decribe{
        color:#fff;
        padding:${r(15)} 0;
        padding-left:${r(25)};
       p{
           padding-bottom:${r(12)};       
       }
       p:nth-child(1){
           font-size:${r(18)};
           span{
                font-size:${r(12)};
           }
       }
       p:nth-child(2){
           font-size:${r(18)};
           font-weight:700;
       }
    }
`
/* 下拉为你推荐的样式 */
export const PullShowData = styled(ShowData)`
    background:#fff;
    h1{
        padding:0 ${r(10)};
        font-weight:700;
    }
    .pic{
            margin-top:${r(20)};
        }
    .decribe{
        color:#333;
       
        .place{
            color:#666;
        }
        .price{
            color:#f24f26;
            span{
                color:#999;
            }
        }
    }
`
/* 首页顶部导航 */
export const TopNav = styled.div`
    width:${r(375)};
    height:${r(50)};
    margin:0 auto;
    position:fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index:1000;
    display:flex;
    align-items:center; 
    justify-content:space-between;
    padding: 0 ${r(20)};
    input{
        height:${r(30)};
        width:${r(240)};
        background:#000;
        opacity:0.2;
        border: 1px solid #000;
        border-radius:${r(15)};
        text-indent:${r(20)};
    }
    .pic{
        height:${r(30)};
        width:${r(30)};
        img{
            width:100%;
            height:auto;
        }
    }
`
/* 底部导航的样式 */
export const FootNative = styled.div`
    width:${r(375)};
    height:${r(80)};
    margin:0 auto;
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    z-index:1000;
    background:#fff;
    justify-content:space-around;
    align-items:center;
    text-align:center;
    .nav{
        display:flex;
        flex-direction:column;
        align-items:center;
        height:${r(50)};
        width:${r(50)};
        div{
            height:${r(40)};
            width:${r(40)};
            img{
                width:100%;
            }
        }
    }
`
/* 剧院顶部的样式 */
export const TopTheart = styled.div`
    width:${r(375)};
    margin:0 auto;
    height:${r(60)};
   div{
    z-index:1000;
    margin:0 auto;
    width:${r(375)};
    height:${r(60)};
    text-align:center;
    line-height:${r(60)};
    font-size:${r(20)};
    border-bottom: 1px solid #999;
    background:#fff;
    position:fixed;
    left:0;
    top:0;
    right:0;
   }
`

/* 剧场的样式 */
export const TheaterList = styled.div`
    width:${r(375)};
    margin:0 auto;
    height:${r(500)};
    .total{
            margin:${r(20)} ${r(20)};
            padding:${r(15)};
            width:${r(320)} ;
            overflow:hidden;
            border:1px solid #e3e3e3;
            .sc-gZMcBi{
                margin-top:${r(20)};
            }
            .top{
            display:flex;
            width:${r(226)};
            height:${r(50)};
            .toppic{
                width:${r(50)};
                height:${r(50)};
                img{
                    width:100%;
                    height:100%;
                }
            }
            .topRight{
                padding-left:${r(20)};
               h3{
                   font-size:${r(16)};
                   padding:${r(10)} 0;
               }
                p{
                    font-size:${r(12)};
                    color:#666;
                }
            }        
       }
    }
`
/* 剧院轮播的样式 */
export const TheaterPlay = styled.div`
    width:${r(375)};
    margin:0 auto;
    .time{
        height:${r(30)};
        line-height:${r(30)};
        text-align:center;
        border-bottom:1px solid #999;
        position:relative;
        span{
            display:inline-block;
            height:${r(9)};
            width:${r(9)};
            background:#999;
            border-radius:50%;
            position:absolute;
            left:45%;
            top:${r(24)};
        }
    }
    .pic{
        width:${r(106)};
        height:${r(145)};
        margin-top:${r(10)};
        img{
            width:100%;
            height:100%;
        }
    }
`
/* 票的组件固定在顶部 */
export const Tabfixed = styled.div`
    width:${r(375)};
    margin:0 auto;
    height:${r(40)};
    display:flex;
    position:fixed;
    top: 60px;  
    .tabs{
        flex:5;
        z-index:3000;
        overflow:hidden;
        .am-tabs-default-bar-top .am-tabs-default-bar-content, .am-tabs-default-bar-bottom .am-tabs-default-bar-content{
        background: #fff;
        position:fixed;
        top: 60px;  
        z-index: 2000;
        #m-tabs-1-7{
            margin-right:${r(100)};
        }
    }
    .am-tabs-default-bar-top .am-tabs-default-bar-tab{
            background: #fff;
        }
    }
    .city{
        background:#fff;
        z-index:9000;
        flex:1;
        text-align:center;
        height: 30px;
        padding: 15px 0;
    }  
`
/* 票夹中使用城市的组件 */
export const CityContend = styled.div`
    width:${r(375)};
    height:100%;
    margin:0 auto;
    position:fixed;
    top:${r(60)};
    bottom:0;
    left:0;
    right:0;
    z-index:4000;
    background-color: rgba(0,0,0,.6);
    .left{
        width: 2.16rem;
        height: 100%;
        float: left;
    }
    .right{ 
        width: 7.84rem;
        height: 100%;
        background-color: #fefefe;
        float: right;
        padding: .4rem .4rem 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        overflow:scroll;
        z-index:4001;
        h1{
            font-size: .4rem;
            color: #666;
            height: .53333rem;
            line-height: .53333rem
        }
        ul::after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
            content: "";
            display: block;
            clear:both;
        }
        ul{
            li{
                float: left;
                text-align: center;
                width: 2.18rem;
                height: .85333rem;
                line-height: .85333rem;
                border-radius: .05333rem;
                background-color: #f5f5f5;
                color: #232323;
                font-size: .32rem;
                margin-right: .16rem;
                margin-bottom: .16rem;
            }
            li:nth-child(1){
                background-color: #fff1e9;
                color: #ff6743;
            }
        }
        .empty{
            height:${r(180)}
        }
        .showNot{
            display:flex;
            position:fixed;
            bottom:0;
            left:2.16rem;
            right:0;
            height:${r(60)}; 
            font-size:${r(14)};
            span{
                flex:1;
                display:inline-block;
                line-height:${r(60)};
                text-align:center;
                z-index:5000;
                background:#fff;
            }
            span:nth-child(2){
                color: #fff;
                background-color: #ff6743;
            }
        }

    }
`