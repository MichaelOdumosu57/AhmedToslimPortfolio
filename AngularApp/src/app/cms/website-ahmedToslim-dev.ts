import { HttpErrorResponse } from "@angular/common/http";
import { pipe } from "rxjs";
import { environment as env } from "../../environments/environment";
import {objectCopy,zProtoComponent,zProtoChildren, zChildren, xContain, xPosition,latchUtilities} from '../customExports'


let website:any = {}

let homeDev:Array<zProtoComponent>  =[
    {
        title:"home",
        type_slug:"forms",
        metafields:[
            {
                key:"Body",
                type:"body",
                navigation:{
                    name:"home"
                },
				options:{
					extras:{
						appSection:{
							confirm:"true"
						},
						appVanillaTilt:{
							confirm:"true",
							type:"body",
							zSymbolNeeded:"true"
						},
					}
				}
            },
            {
                key:"title a_p_p_Title",
                type:"title",
                value:"AHMED TOSLIM",
                top:80,
                left:"480",
                latch:{
                    type:"display",
                    display:{
                        type:"target",
                        name:"home"
                    },
                    zChildren:[
                        {
                            bool:"div",
                            val:"overlay a_p_p_Overlay",
                            logic:{
                                desktop:{
                                    width:()=>{
                                        return 1000
                                    },
                                    height:()=>{
                                        return 500
                                    },
                                    top:-52,
                                    left:latchUtilities.centerX
                                },
                                mobile:{
                                    width:1.2,
                                    height:1.2,
                                    top:0,
                                    left:0
                                }
                            },
                            group:["home"]
                        },
                        {
                            bool:"img",
                            val:"img a_p_p_Image",
                            logic:{
                                desktop:{
                                    width:()=>{
                                        return 150
                                    },
                                    height:()=>{
                                        return 150
                                    },
                                    top:-30,
                                    left:latchUtilities.centerX,
                                    metadata:{
                                        left:{
                                            targetPos:3
                                        }
                                    }
                                },
                                mobile:{
                                    width:1.2,
                                    height:1.2,
                                    top:0,
                                    left:0
                                }
                            },
                            extras:{
                                extend:{
                                    src:mediaPrefix({media:'ahmed-main.jpg'})
                                }
                            },
                            group:["home"]
                        },
                        {
                            bool:"h2",
                            val:"subtitle a_p_p_Subtitle",
                            text:`Data Scientist`,
                            logic:{
                                desktop:{
                                    width:()=>{
                                        return 150
                                    },
                                    height:()=>{
                                        return 30
                                    },
                                    top:40,
                                    left:30,

                                },
                                mobile:{
                                    width:1.2,
                                    height:1.2,
                                    top:0,
                                    left:0
                                }
                            },
                            extras:{
                                extend:{
                                    src:mediaPrefix({media:'ahmed-main.jpg'})
                                }
                            },
                            group:["home"]
                        },
                        {
                            bool:"p",
                            val:"text a_p_p_Text",
                            text:`Research Interests: Health, Finance, and Business Process`,
                            logic:{
                                desktop:{
                                    width:()=>{
                                        return 500
                                    },
                                    height:()=>{
                                        return 30
                                    },
                                    top:150,
                                    left:-140,

                                },
                                mobile:{
                                    width:1.2,
                                    height:1.2,
                                    top:0,
                                    left:0
                                }
                            },
                            extras:{
                                extend:{
                                    src:mediaPrefix({media:'ahmed-main.jpg'})
                                }
                            },
                            group:["home"]
                        },
                        {
                            bool:"p",
                            val:"text a_p_p_Text",
                            text:`Expertise Statistical Machine Learning, Predictive Modeling, Design and Analysis of Experiments`,
                            logic:{
                                desktop:{
                                    width:()=>{
                                        return 700
                                    },
                                    height:()=>{
                                        return 30
                                    },
                                    top:190,
                                    left:-300,

                                },
                                mobile:{
                                    width:1.2,
                                    height:1.2,
                                    top:0,
                                    left:0
                                }
                            },
                            extras:{
                                extend:{
                                    src:mediaPrefix({media:'ahmed-main.jpg'})
                                }
                            },
                            group:["home"]
                        },
                        {
                            bool:"p",
                            val:"text a_p_p_Text",
                            text:`Areas Worked: Data Analytics, Strategy,  Results Measurements, Project Management,  Business and Market Development`,
                            logic:{
                                desktop:{
                                    width:()=>{
                                        return 900
                                    },
                                    height:()=>{
                                        return 30
                                    },
                                    top:230,
                                    left:-300,

                                },
                                mobile:{
                                    width:1.2,
                                    height:1.2,
                                    top:0,
                                    left:0
                                }
                            },
                            extras:{
                                extend:{
                                    src:mediaPrefix({media:'ahmed-main.jpg'})
                                }
                            },
                            group:["home"]
                        },
                        {
                            bool:"p",
                            val:"text a_p_p_Text",
                            text:`Sectors: Financial Infrastructure, Clean Energy`,
                            logic:{
                                desktop:{
                                    width:()=>{
                                        return 900
                                    },
                                    height:()=>{
                                        return 30
                                    },
                                    top:270,
                                    left:-300,

                                },
                                mobile:{
                                    width:1.2,
                                    height:1.2,
                                    top:0,
                                    left:0
                                }
                            },
                            extras:{
                                extend:{
                                    src:mediaPrefix({media:'ahmed-main.jpg'})
                                }
                            },
                            group:["home"]
                        },
                        {
                            bool:"p",
                            val:"text a_p_p_Text",
                            text:`Institiution: International Finance Corporation- the World Bank Group`,
                            logic:{
                                desktop:{
                                    width:()=>{
                                        return 900
                                    },
                                    height:()=>{
                                        return 30
                                    },
                                    top:310,
                                    left:-300,

                                },
                                mobile:{
                                    width:1.2,
                                    height:1.2,
                                    top:0,
                                    left:0
                                }
                            },
                            extras:{
                                extend:{
                                    src:mediaPrefix({media:'ahmed-main.jpg'})
                                }
                            },
                            group:["home"]
                        },
                        {
                            bool:"p",
                            val:"text a_p_p_Text",
                            text:`(Washingtion DC 2021-present Dhaka, Bangladesh 2016-2020)`,
                            logic:{
                                desktop:{
                                    width:()=>{
                                        return 900
                                    },
                                    height:()=>{
                                        return 30
                                    },
                                    top:330,
                                    left:-300,

                                },
                                mobile:{
                                    width:1.2,
                                    height:1.2,
                                    top:0,
                                    left:0
                                }
                            },
                            extras:{
                                extend:{
                                    src:mediaPrefix({media:'ahmed-main.jpg'})
                                }
                            },
                            group:["home"]
                        },
                        {
                            bool:"a",
                            val:"text a_p_p_Text",
                            text:``,
                            logic:{
                                desktop:{
                                    width:()=>{
                                        return 900
                                    },
                                    height:()=>{
                                        return 30
                                    },
                                    top:370,
                                    left:-300,

                                },
                                mobile:{
                                    width:1.2,
                                    height:1.2,
                                    top:0,
                                    left:0
                                }
                            },
                            extras:{
                                extend:{
                                    src:mediaPrefix({media:'ahmed-main.jpg'})
                                }
                            },
                            group:["home"]
                        }
                    ]
                }
            }
        ]
    }

]

website.convertCMS = homeDev
export default website



