window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () {}
    nodes.html = function () {}
    return nodes
}


window.jQuery.ajax = function ({url, method, body, successFn, failFn, headers}) {

    // let url = options.url
    // let method = options.method
    // let body = options.body
    // let successFn = options.successFn
    // let failFn = options.failFn
    // let headers = options.headers

    // es6 解构赋值
    // 下面这一行等价于上面六行
    // let {url, method, body, successFn, failFn, headers} = options
    
    return new Promise (function(resolve, reject) {
        let request = new XMLHttpRequest()
        request.open(method, url) // 配置request
        for (let key in headers) {
            let value = headers[key]
            request.setRequestHeader(key, value)
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
    
}

window.$ = window.jQuery

function f1(responseText) {}
function f2(responseText) {}

myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/xxx',
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'frank': '18'
        }
    }).then(
        (text) => {console.log(text)},
        (request) => {console.log(request)}
    )
})