
var position
var rotation
var count = 0
var positionCount = 1
var rowCount = 1
var inputCount = 0
const stratagems = [
   eagle = [ Eagle500Kg = [1, 2, 3, 3, 3], EagleClusterBomb = [1, 2, 3, 3, 2], EagleAirstrike = [1, 2, 3, 2], EagleStrafingRun = [1, 2, 2], order5 = [1, 1, 4, 1, 2], order6 = [1, 2, 3, 1], order7 = [1, 2, 1, 3], order8 = [1, 2, 1, 4] ],
   orbital = [ order1 = [2, 2, 1], order2 = [2, 2, 2], order3 = [2, 2, 3, 4, 2, 3], order4 = [2, 3, 1, 1, 4, 3, 3], order5 = [2, 3, 2, 3, 2, 3], order6 = [2, 3, 1, 2, 3], order7 = [2, 1, 3, 3, 2], order8 = [2, 2, 3, 2], order9 = [2, 2, 3, 1], order10 = [2, 3, 4, 1, 1] ],
   support = [ order1 = [1, 3, 2, 4, 1], order2 = [1, 3, 4, 2], order3 = [3, 3, 1, 2], order4 = [2, 1, 1, 3], order5 = [3, 1, 4, 3, 1, 2, 3, 1], order6 = [3, 3, 3, 1, 1], order7= [4, 2, 1, 1, 1], order8 = [1, 1, 4, 2, 3, 3], order9 = [3, 3, 4, 2, 3, 3], order10 = [3, 1, 3, 1], order11 = [2, 2, 4, 4] ],
   backpack = [ order1 = [3, 1, 4, 1, 2, 2], order2 = [3, 1, 4, 1, 2, 3], order3 = [3, 1, 1, 3, 1], order4 = [3, 1, 3, 3, 1], order5 = [3, 1, 4, 2, 4, 2], order6 = [3, 4, 3, 3, 1, 4] ],
   weapon = [ order1 = [3, 4, 3, 1, 1, 2], order2 = [3, 3, 4, 1, 2], order3 = [3, 4, 3, 2, 4], order4 = [3, 4, 3, 1, 4], order5 = [3, 4, 3, 1, 1, 4], order6 = [3, 4, 3, 1, 2], order7= [3, 2, 3, 1, 4, 4], order8 = [3, 4, 1, 4, 3], order9 = [3, 4, 2, 1, 3], order10 = [3, 2, 3, 1, 4, 2], order11 = [3, 4, 2, 2, 4], order12 = [3, 3, 1, 3, 3], order13 = [3, 3, 1, 4, 2], order14 = [3, 4, 1, 3, 3] ],
   sentry = [ order1 = [3, 1, 4, 2, 2, 4], order2 = [3, 3, 4, 2, 4, 2], order3 = [3, 1, 2, 1, 4, 2], order4 = [3, 4, 3, 2], order5 = [3, 4, 4, 3], order6 = [3, 1, 2, 2, 1], order7= [3, 1, 2, 4], order8 = [3, 1, 2, 2, 3], order9 = [3, 1, 2, 1, 4, 1], order10 = [3, 1, 2, 2, 4], order11 = [3, 1, 2, 3, 2 ] ],
   vehicle = [ PatriotExosuit = [4, 3, 2, 1, 4, 3, 3] ]
]
var orderselect, setSelect
var canvas
let arrow, arrowFrame
var arrowEmpty_img
var arrowFilled_img
var arrowFrame_img
var arrowGroup
var arrowFrameGroup
var input
var drawing = true 
var correctValue = 0
var score
var inputs = []



function preload(){
    arrowEmpty_img = loadAnimation("Arrow_empty.png","Arrow_filled.png")
    arrowFrame_img = loadAnimation("Arrow_cover_eagle.png","Arrow_cover_orbital.png","Arrow_cover_support.png","Arrow_cover_backpack.png","Arrow_cover_weapon.png","Arrow_cover_sentry.png","Arrow_cover_vehicle.png")
}

function setup(){
   canvas = createCanvas(window.width = window.innerWidth, window.height = window.innerHeight)
   console.log("Window.width: ", window.width,"window.height: ", window.height)
   frameRate(80) 
    background(rgb(69, 69, 69))
    arrowGroup=new Group()
    arrowFrameGroup=new Group()
    comboSelect()

}

function updateCanvas(){
   canvas.clear()
   window.width = window.innerWidth
   window.height = window.innerHeight
   canvas = createCanvas(window.width, window.height)
   console.log("Window.width: ", window.width,"window.height: ", window.height)
   background(rgb(69, 69, 69))
   softReset()

}


function comboSelect(){
   setSelect = Math.floor(Math.random() * stratagems.length);
   orderselect = Math.floor(Math.random() * stratagems[setSelect].length);
   for(var i = 0; i < stratagems[setSelect][orderselect].length; i++){
      inputs.push(0)
    }
    drawing = true
}

function arrows(){
    console.log("arrows called")
    console.log("Made arrow: ", count)
    arrow = createSprite(positionCount * 100, rowCount * 100)
    arrowFrame = createSprite(positionCount * 100, rowCount * 100)
    arrowFrame.depth = arrow.depth += 1

    arrow.x = positionCount * 100
    arrowFrame.x = positionCount * 100

    //arrow.debug = false

    arrow.addAnimation("arrowAnim", arrowEmpty_img)
    arrow.pause()

    arrowFrame.addAnimation("arrowFrameAnim", arrowFrame_img)
    arrowFrame.pause()

    arrow.visible = false
    arrow.scale = 0.12

    arrowFrame.visible = false
    arrowFrame.scale = 0.12
    rectMode(CENTER)



    var arrowRotation = stratagems[setSelect][orderselect][count]
    //var arrowFrameColour = setSelect

    switch(arrowRotation){
        case 1:
        arrow.rotation = 0
        arrowFrame.rotation = 0
        break

        case 2:
        arrow.rotation = 90
        arrowFrame.rotation = 90
        break

        case 3:
        arrow.rotation = 180
        arrowFrame.rotation = 180
        break

        case 4:
        arrow.rotation = 270
        arrowFrame.rotation = 270
        break

        case 5:
        arrow.visible = false
        arrowFrame.visible = false

        default:
            break
    }

      
      console.log("Before move for arrow:" , count)
      console.log("Arrow.x = ",arrow.x)
      console.log("Arrow.y = ",arrow.y)
      console.log("ArrowFrame.x = ",arrowFrame.x)
      console.log("ArrowFrame.y = ",arrowFrame.y)
      

    if(arrow.x >= window.width - 100 || arrowFrame.x >= window.width - 100){
      rowCount ++
      arrow.y =  rowCount * 100
      arrowFrame.y = rowCount * 100
      positionCount = 1
      arrow.x = positionCount * 100
      arrowFrame.x = positionCount * 100
    }

    if(arrow.y >= window.height - 100 || arrowFrame.y >= window.height - 100){
      rescale()
      updateCanvas()
    }

      
      console.log("After move for arrow:" , count)
      console.log("Arrow.x = ",arrow.x)
      console.log("Arrow.y = ",arrow.y)
      console.log("ArrowFrame.x = ",arrowFrame.x)
      console.log("ArrowFrame.y = ",arrowFrame.y)
      
      arrowFrame.setFrame(setSelect)

      console.log(inputs)

      if(inputs[count] == 1){
         arrow.setFrame(1)
         console.log("setFrame 1")
      } else if (inputs[count] != 1){
         arrow.setFrame(0)
         console.log("setFrame 0")
      }
      


    arrowGroup.add(arrow)
    arrowFrameGroup.add(arrowFrame)
}

function rescale(){
      arrowGroup.setScaleEach(0.08)
      arrowFrameGroup.setScaleEach(0.08)
}

function arrowCheck(){
   if(input == stratagems[setSelect][orderselect][inputCount] & count >= stratagems[setSelect][orderselect].length){
      inputs[inputCount] = 1
      if (inputs[inputCount] == 1){
         arrowGroup.get(inputCount).setFrame(1)
      }
      
      inputCount ++
      correctValue ++

   } else if(input != stratagems[setSelect][orderselect][inputCount]){
      console.log("Incorrect inputs");
      reset();
      inputs.length = 0
   }

}
 
function reset() {
   console.log("reset called")
   canvas.clear()
   arrowGroup.destroyEach(), arrowFrameGroup.destroyEach()
   arrowGroup.clear(), arrowFrameGroup.clear()
   arrowGroup.remove(arrow), arrowFrameGroup.remove(arrowFrame)
   canvas = createCanvas(window.width = window.innerWidth, window.height = window.innerHeight)
   console.log(window.width, window.height) 
   background(rgb(69, 69, 69))
   count = 0
   rowCount = 1
   positionCount = 1
   inputCount = 0
   drawing = true
   correctValue = 0

   inputs = []
   console.log("inputs: ", inputs)
}

function softReset() {
   console.log("softReset called")
   arrowGroup.destroyEach(), arrowFrameGroup.destroyEach()
   arrowGroup.clear(), arrowFrameGroup.clear()
   arrowGroup.remove(arrow), arrowFrameGroup.remove(arrowFrame)
   count = 0
   rowCount = 1
   positionCount = 1
   drawing = true
}

function draw(){

   /*if(frameCount%40==0  &  window.height != window.innerHeight || window.width != window.innerWidth){
      updateCanvas()
      softReset()
      
   }*/

   if(window.height > window.innerHeight + 10 || window.height < window.innerHeight - 10 || window.width > window.innerWidth + 10 || window.width < window.innerWidth - 10){
      updateCanvas()
      softReset()
      
   }

   

   if(count != stratagems[setSelect][orderselect].length & drawing == true){
        arrows()
        count ++
        positionCount ++
   }

   if(count == stratagems[setSelect][orderselect].length){
      drawing = false
      arrowGroup.setVisibleEach(true)
      arrowFrameGroup.setVisibleEach(true)
   }

   console.log("drawing is: ", drawing)

   if(keyWentDown(87) || keyWentDown(38)){
        input = 1
        console.log("up")
        arrowCheck()
   }

   if(keyWentDown(83) || keyWentDown(40)){
        input = 3
        console.log("down")
        arrowCheck()
   }

   if(keyWentDown(65) || keyWentDown(37)){
        input = 4
        console.log("left")
        arrowCheck()
   }

   if(keyWentDown(68) || keyWentDown(39)){
        input = 2  
        console.log("right")
        arrowCheck()
   }

   if(correctValue == stratagems[setSelect][orderselect].length ||  stratagems[setSelect][orderselect][inputCount] ==5 ){
      console.log("Correct inputs")
      score += stratagems[setSelect][orderselect].length * 10
      reset()
      comboSelect()

   }

   drawSprites()
}

   





