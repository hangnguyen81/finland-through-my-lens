// import {images} from 'images.js'

let images = [
    {
        title:'Little daisy',
        url: 'images/flowers/01.jpg',
        type: 'flowers',
        alt:'daisy',
        des:'Bright, cheerful, and easy to grow'
    },
    {
        title:'Photo in photo',
        url: 'images/flowers/02.jpg',
        type: 'flowers',
        alt:'daisy and phone',
        des:'Taking photo in photo of daisy'
    },
    {
        title:'Yellow cute flowers',
        url: 'images/flowers/03.jpg',
        type: 'flowers',
        alt:'yellow cute flower',
        des:'Brighten your day'
    },
    {
        title:'Rose under the sun light',
        url: 'images/flowers/04.JPG',
        type: 'flowers',
        alt:'Rose under the sun',
        des:'Rose under the sun'
    },
    {
        title:'Wild flowers',
        url: 'images/flowers/05.JPG',
        type: 'flowers',
        alt:'Garden of flowers',
        des:'Garden of flowers'
    },
    {
        title:'Pulla and tea',
        url: 'images/food/01.jpg',
        type: 'food',
        alt:'Pulla and tea',
        des:'Finnish traditional treat in tea break'
    },
    {
        title:'Baked Egg Pie',
        url: 'images/food/02.jpg',
        type: 'food',
        alt:'Baked Egg Pie',
        des:'Homemade breakfast'
    },
    {
        title:'The making of summer rolls',
        url: 'images/food/03.jpg',
        type: 'food',
        alt:'The making of summer rolls',
        des:'Healthy summer rolls for freshness'
    },
    {
        title:'Summer rolls',
        url: 'images/food/04.jpg',
        type: 'food',
        alt:'Summer rolls',
        des:'Healthy summer rolls is ready to eat'
    },
    {
        title:'Chicken salad',
        url: 'images/food/05.jpg',
        type: 'food',
        alt:'Chicken salad',
        des:'Healthy chicken salad'
    },
    {
        title:'A closer look at Chicken Salad',
        url: 'images/food/06.jpg',
        type: 'food',
        alt:'Chicken salad',
        des:'Yummy closer look of salad'
    },
    {
        title:'Cheese cake',
        url: 'images/food/07.jpg',
        type: 'food',
        alt:'Cheese cake',
        des:'Happy birthday cheese cake'
    },
    {
        title:'Sunset in Autumn',
        url: 'images/nature/01.JPG',
        type: 'nature',
        alt:'Sunset near the lake in Autumn',
        des:'Sunset near the lake in Autumn'
    },
    // {
    //     title:'White winter',
    //     url: 'images/nature/03.jpg',
    //     type: 'nature',
    //     alt:'White winter',
    //     des:'White snow in winter'
    // },
    {
        title:'Amazing winter',
        url: 'images/nature/04.jpg',
        type: 'nature',
        alt:'Amazing winter',
        des:'Stunning view in a sunny winter day'
    },
    {
        title:'Sunshine summer',
        url: 'images/nature/05.JPG',
        type: 'nature',
        alt:'Sunshine summer',
        des:'Blue sky in summer day'
    }
]
const myBtnContainer = document.getElementById('myBtnContainer')
const imagesGrid = document.getElementById('images-grid')
const showAll = document.getElementById('show-all')
const flowers = document.getElementById('flowers')
const food = document.getElementById('food')
const nature = document.getElementById('nature')

function renderImages(type=''){   
    let imgHtml = ''
    let allImagesHtml = '' 
    for (let image of images){
        if (image.type === type){
            imgHtml +=`        
                <div class="content">
                    <img src=${image.url} alt=${image.alt} style="width:100%">
                    <h4>${image.title}</h4>
                    <p>${image.des}</p>
                </div>`
        }
        allImagesHtml +=`
            <div class="content">
                    <img src=${image.url} alt=${image.alt} style="width:100%">
                    <h4>${image.title}</h4>
                    <p>${image.des}</p>
                </div>`
        
    }
    if (type !='')
        return imgHtml
    else
        return allImagesHtml
}

showAll.addEventListener('click', function(){
    removeActiveClass()
    showAll.classList.add('active')
    imagesGrid.innerHTML  = renderImages()
})

flowers.addEventListener('click', function(){
    removeActiveClass()
    flowers.classList.add('active')
    imagesGrid.innerHTML  = renderImages('flowers')
})

food.addEventListener('click', function(){
    removeActiveClass()
    food.classList.add('active')
    imagesGrid.innerHTML  = renderImages('food')
})

nature.addEventListener('click', function(){
    removeActiveClass()
    nature.classList.add('active')
    imagesGrid.innerHTML  = renderImages('nature')
})

function removeActiveClass(){
    // clear all active class (if has) in every child of myBtnContainer
    for (let child of myBtnContainer.children){
        child.classList.remove('active')
    }

}

imagesGrid.innerHTML  = renderImages()
