let nivelHeroina = "";
let experiencia = 11000;



if (experiencia <= 1000){
  nivelHeroina = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000){
 nivelHeroina = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000){
 nivelHeroina = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000){
 nivelHeroina = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000){
 nivelHeroina = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000){
 nivelHeroina = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000){
 nivelHeroina = "Imortal";
} else {
 nivelHeroina = "o RADIANTE!";
}

  console.log(`O Rank do herói é ${nivelHeroina} e sua experiência está estimada na base de: ${experiencia} de XP`);
