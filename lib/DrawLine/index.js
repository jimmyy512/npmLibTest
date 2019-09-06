function draw(tableCSSName, targetClass, lineWidth='1px' ,lineColor='black') {
    let table=document.querySelector(tableCSSName);
    let tableClient=table.getBoundingClientRect();
    table.style.position="relative";
    let allTargets=document.querySelectorAll(`${tableCSSName} ${targetClass}`);
    let canvas = document.createElement("canvas");
    canvas.setAttribute("width", tableClient.width);
    canvas.setAttribute("height", tableClient.height);
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    table.appendChild(canvas);
    let pen = canvas.getContext("2d");
    pen.beginPath();
    pen.strokeStyle = lineColor;
    pen.lineWidth = parseInt(lineWidth);
    for(let index=0;index<allTargets.length;index++)
    {
      if(allTargets.length-1==index)
         break;
      let curTarget=allTargets[index];
      let nextTarget=allTargets[index+1];
      let curTargetClient=curTarget.getBoundingClientRect();
      let nextTargetClient=nextTarget.getBoundingClientRect();
      let tdClient = curTarget.getBoundingClientRect();
      pen.moveTo(curTargetClient.left-tableClient.left+tdClient.width/2,
                 curTargetClient.top-(tableClient.top - tdClient.height / 2));
      pen.lineTo(nextTargetClient.left-tableClient.left+tdClient.width/2,
                 nextTargetClient.top-(tableClient.top - tdClient.height / 2));
    }
    pen.stroke();
  }

export default {draw};
