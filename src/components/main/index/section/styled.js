import styled from "styled-components"
import { createGlobalStyle } from "styled-components";
import global from "@/core/global"
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
    border: 1px solid red;
    .am-wingblank{
        margin:0 ! important;
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
/* 剧院展示部分 */
export const HotTheaterBox = styled.div`
    width:${r(375)};
    margin:0 auto;
    padding:${r(10)};
    .swiper-slide{
        margin-left:${r(20)};
        width:${r(263)} !important;
        border:1px solid #e3e3e3;
        padding:${r(15)};
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
`
