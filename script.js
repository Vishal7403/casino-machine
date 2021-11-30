$(()=>{
let value1=$('#value1')
let value2=$('#value2')
let value3=$('#value3')
let result=$('#result')
let inpspeed=document.getElementById('inpspeed')
let stop=$('#stop')
let start=$('#start')
let values=['😎','😂','🤣','😍','😒','😁','😆','😜',]
function getrandomvalue()
{

    return values[Math.floor(Math.random()*8)]
}
let animationid
const updateemoji=()=>{
    value1.html(getrandomvalue())
    value2.html(getrandomvalue())
    value3.html(getrandomvalue())
}
function updateanimation(newspeed) 
{    
    if(animationid) 
    {clearInterval(animationid)}
    animationid=setInterval(()=> {
        updateemoji()
    
    
},1000/newspeed)
}
updateanimation(5)
inpspeed.onchange=function(event)
{
    //document.documentElement => ":root" of css
    document.documentElement.style.setProperty('--speed',event.target.value)
    updateanimation(event.target.value)
}

stop.click(()=>{
    clearInterval(animationid)
    value1.removeClass('value')
    value2.removeClass('value')
    value3.removeClass('value')
    if(value1.html()===value2.html() && value2.html()===value3.html())
    {
        console.log('you won')
        result.html('<h2><strong>you won</strong></h2>')
    }
    else{
        console.log('lost')
        result.html('<h2><strong>you lost</strong></h2>')
    }
    stop.addClass('disabled')
    start.removeClass('disabled')
    
})
if(value1.hasClass('value'))
{
    start.addClass('disabled')
}
start.click(()=>{
    value1.toggleClass('value')
    value2.toggleClass('value')
    value3.toggleClass('value')
    updateanimation(5)
    result.html('')
    stop.removeClass('disabled')
    start.addClass('disabled')

})

})