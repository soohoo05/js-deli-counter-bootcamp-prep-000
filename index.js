var katzDeli=[]
var length=0;
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return 'Welcome, '+name+". You are number "+katzDeliLine.length+" in line."
}
function nowServing(katzDeliLine){
if(katzDeliLine.length===0){
  return 'There is nobody waiting to be served!'
}
else{
  var name=katzDeliLine.shift()
  return 'Currently serving '+name+'.'
}
  
}
function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return 'The line is currently empty.'
  }
  else{
    var line='The line is currently: 1. '+katzDeliLine[0]
  for (let i=1;i<katzDeliLine.length;i++){
    line+= ', '+(i+1)+'. '+katzDeliLine[i]
  }
  return line
  }
  
}

function takeANumber1(katzDeliLine,length){
   length++
  katzDeliLine.push(length)
  return 'Welcome, '+length+". You are number "+katzDeliLine.length+" in line."
}