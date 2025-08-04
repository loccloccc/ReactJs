function greeWithWeather(name,weather){
    if(weather === "sunny"){
        console.log(`Chao ${name}! Hom nay troi nang tuyet voi!`);
    }else if(weather === " rainy"){
        console.log(`chao ${name}! Hom nay troi mua hay mang theo o!`);
    }else{
        console.log(`chao ${name}!Hom nay thoi tiet khong xac dinh!`);
    }
}
greeWithWeather("Nguyen An","sunny")
greeWithWeather("Le Nam","rainy")
greeWithWeather("Tran Tam")