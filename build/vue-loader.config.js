module.exports = (isDev) => {
    return {
        preserveWhitespce:true,
        extractCSS: !isDev,
        cssModules:{
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase:true
        },
        //hotReload:false,  //根据环境变量生成
        loaders:{
            
        },
        preLoader:{

        },
        postLoader:{

        }
    }
}