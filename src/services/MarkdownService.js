export {
    utf8_to_b64,
    b64_to_utf8,
    generateTableOfContents,
}
function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}
function generateTableOfContents(str) {
    const regex = /## /g
    const regex1 = /\n/g
    const regex2 = /\¿|\?/g
    const arr = str.split(regex1)
    const lines = []
    arr.forEach((el) =>{
      const createSlug = (str) => str.split(' ').join('-')
      if(el.match(regex)){
        if(el.endsWith(' ')){
          lines.push({title: el.slice(0, -1).replace(regex, ''), slug: createSlug(el.slice(0,-1).toLowerCase().replace(regex, '').replace(regex2, '')) })
        }else{
          lines.push({title: el.replace(regex, ''), slug: createSlug(el.toLowerCase().replace(regex, '').replace(regex2, ''))})
        }
      }
    })
    lines.forEach((el) => {
      str = str.replace(el.title, `${el.title} <a id="${el.slug}"></a>`)
    })
    
     return ({post: `${str}`, lines})
}