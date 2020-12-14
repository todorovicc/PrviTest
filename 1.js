// 1.Задатак

// Написати функцију racun(cena,dan,penzioner)

// cena - Број већи од 0 - Проверити исправност (Функција враћа -1 ако је неисправно)
// dan - Број између 1 и 7 (означава дане у недељи) - Без провере
// penzioner - true / false (означава да ли је купац пензионер) - Без провере
// Функција враћа рачун на следећи начин:

// Ако је купац пензионер и недеља је: попуст од 25%
// Ако је купац пензионер и није недеља: попуст од 10%
// Ако купац није пензионер и среда је: попуст од 10%
// Ако купац није пензионер и није среда: нема попуста

{
    let cena = 150
    let dan = 1
    let penzioner = false
    let racun = 0



    let x = dan
    for (x = 1; x <= 7; x++); {
        if ((x == 7) || (penzioner = true)) {
            console.log('racun posle 25% popusta je:', racun = cena - (cena * 0.25))
        } else if ((x != 7) || (penzioner = true)) {
            console.log('racun posle 10% popusta je:', racun = cena - (cena * 0.10))
        } else if ((x == 3) || (penzioner = false)) {
            console.log('racun posle 10% popusta je:', racun = cena - (cena * 0.10))
        } else
            console.log('racun je:', cena)
    }
}