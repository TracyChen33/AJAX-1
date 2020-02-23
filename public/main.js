console.log('I am main.js 3')
let n =1;
getPAGE.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            });
            n+=1;
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', './5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            console.log(object)
            myName.textContent = object.name
        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', './4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        } else {
            alert('failed XML')
        }
    }
    request.send();
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log('failed HTML')
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js')
    request.onload = () => {
        //创建script 标签
        const script = document.createElement('script')
        //填写script内容
        script.innerHTML = request.response
        //插到body里
        document.body.appendChild(script)

    };
    request.onerror = () => {
        console.log('failed JS')
    };
    request.send()
};

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', "./style.css");   //readystate =1
    request.onreadystatechange = () => {
        //下载完成，但不知道是成功2xx，还是失败 4xx，5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建 style 标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //插到html的头里面
                document.head.appendChild(style)
            } else {
                alert('Failed to load CSS')
            }

        }
    }
    request.send(); //readyState =2

};