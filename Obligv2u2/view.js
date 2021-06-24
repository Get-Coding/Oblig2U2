function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) 
      {svgInnerHtml += createBar(numbers [i], i + 1);} 
           
         contentDiv.innerHTML = /*html*/ `
          <svg id="chart" width="590" viewBox="0 1 70 62 "> ${svgInnerHtml}
           </svg><br/>
            Valgt stolpe: <i>${chosenBar != null ? chosenBar : 'ingen'}</i>
             <div id="errormsg" style="color: red; font-size: 18px">${errormsg}</div><br/>  
            Verdi: <input type="number" min="1" max="10" 
            oninput="inputValue = parseInt(this.value)" />
            <button onclick="addBar()">Legg til stolpe</button>
            <button ${chosenBar != null ? "" : "disabled"} 
            onclick="changeBar()">Endre valgt stolpe</button>
            <br/>
            <button ${chosenBar != null ? "" : "disabled"} 
            onclick="removeBar()">Fjerne valgt stolpe</button> 
            `;
       }    
   function createBar(number, barNo) {
       const width = 7;
       const spacing = 2;
       let x = (barNo - 1) * (width + spacing);
       let height = number * 10;
       let y = 60 - height;
       let color = calcColor(1, 9, barNo);
       let stroke = chosenBar == barNo ? `stroke: black` : "";

       return `<rect width="${width}" height="${height}"
                  x="${x}" y="${y}" fill="${color}"
                   style="${stroke}" onclick="selectedBar(${barNo})"></rect>`;
       }
   function calcColor(min, max, val) {
       var minHue = - 195, maxHue = 70;
       var curPercent = (val - min) / (max - min);
       var colString = "hsl(" + 
         ((curPercent * (maxHue - minHue)) + minHue) + ",35%,20%)";
       return colString;
      }
