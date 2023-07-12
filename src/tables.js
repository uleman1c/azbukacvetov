import pic121_1 from '@/assets/pics/a61fbf4e-f53e-4d74-9160-8da62140dc8a.jpg'
import pic121_2 from '@/assets/pics/cb8cd5e9-457b-436b-928a-ab67953afe91.jpg'
import pic121_3 from '@/assets/pics/d4ab6b0c-c368-4ad2-95e9-0430ad413d40.jpg'
import pic121_4 from '@/assets/pics/d10c658c-3f34-46ec-84ea-f3418a594f49.jpg'

import pic109_1 from '@/assets/pics/68936ac8-7fe9-4740-b8fe-b2b323abf224.jpg'

import pic84_1 from '@/assets/pics/eacb5001-b624-4b32-a136-87e26bc29833.jpg'
import pic84_2 from '@/assets/pics/4dc2635c-2cda-434c-8916-e9c5f938d864.jpg'

import pic42_1 from '@/assets/pics/368b4c11-4974-4dad-b04a-6a3a21901d2e.jpg'
import pic42_2 from '@/assets/pics/525734eb-2024-4dad-b0d8-d76d380876a3.jpg'

import pic104_1 from '@/assets/pics/3b7ec2f8-1046-45c6-89bd-43b3aff7f8b5.jpg'

import pic48_1 from '@/assets/pics/6eaafb91-f250-4a42-a6fc-8dbce1cae850.jpg'
import pic48_2 from '@/assets/pics/aaf53aba-c1ae-4167-97c4-5243973c403d.jpg'

import pic51_1 from '@/assets/pics/968faf48-e086-4bca-8662-291e480c5071.jpg'
import pic51_2 from '@/assets/pics/3ca72560-f1f9-42cf-aa45-232c559e3035.jpg'

import pic27_1 from '@/assets/pics/68e43820-7b84-4e58-ba11-0c5f3cd66aeb.jpg'

import pic38_1 from '@/assets/pics/1683949a-a61f-486e-b010-2a2767acdb01.jpg'

import pic118_1 from '@/assets/pics/cee4f585-c51e-4df6-9279-c526354bf0d1.jpg'

import pic92_1 from '@/assets/pics/c70f8084-3750-40a2-a92a-13ab920ad588.jpg'
import pic91_1 from '@/assets/pics/ba965a06-2f7f-4aa3-b67b-42c5b43ede92.jpg'
import pic91_2 from '@/assets/pics/7b018205-d68d-4626-a809-760ffb4267c4.jpg'

const items = [
    { name: 'Комнатные растения', type: 'header', style: 'text-align: center; background-color: #ccc0da; font-weight: bold;' },
    { id: 0, name: 'Азалия комнатная', price: 450, diameter: 13, height: 25 },
    { id: 1, name: 'Антуриум', price: 950, diameter: 14, height: 35 },
    { id: 2, name: 'Антуриум', price: 1450, diameter: 17, height: 65 },
    { id: 3, name: 'Гардения', price: 600, diameter: 13, height: 25 },
    { id: 4, name: 'Гузмания', price: 345, diameter: 9, height: 20 },
    { id: 5, name: 'Дендробиум', price: 1450, diameter: 12, height: 65 },
    { id: 6, name: 'Ж асмин', price: 760, diameter: 12, height: 35 },
    { id: 7, name: 'Замиакулькас', price: 620, diameter: 12, height: 35 },
    { id: 8, name: 'Замиокулькас', price: 7400, diameter: 30, height: 100 },
    { id: 9, name: 'Кактус Cem', price: 80, diameter: 5, height: 10 },
    { id: 10, name: 'Кактус Cem', price: 260, diameter: 8, height: 15 },
    { id: 11, name: 'Кактус', price: 620, diameter: 15, height: 20 },
    { id: 12, name: 'Кактус', price: 4200, diameter: 23, height: 25 },
    { id: 13, name: 'Кактус Succ', price: 145, diameter: 5, height: 10 },
    { id: 14, name: 'Каланхое', price: 320, diameter: 12, height: 20 },
    { id: 15, name: 'Лавр спираль', price: 10000, diameter: 20, height: 100 },
    { id: 16, name: 'Лимон', price: 33500, diameter: 35, height: 230 },
    { id: 17, name: 'Нефролепис', price: 1250, diameter: 19, height: 30 },
    { id: 18, name: 'Осока', price: 1700, diameter: 19, height: 45 },
    { id: 19, name: 'Спатифиллум', price: 2100, diameter: 19, height: 75 },
    { id: 20, name: 'Спатифилум', price: 480, diameter: 13, height: 35 },
    { id: 21, name: 'Фаленопсис 2 ст', price: 1400, diameter: 12, height: 70 },
    { id: 22, name: 'Фаленопсис', price: 980, diameter: 9, height: 25 },
    { id: 23, name: 'Фиалка', price: 420, diameter: 12, height: 15 },
    { id: 24, name: 'Фикус Бенжамина ( коса)', price: 7500, diameter: 24, height: 110 },
    { id: 25, name: 'Фикус Бенжамина ( плетенный )', price: 13000, diameter: 31, height: 120 },
    { id: 26, name: 'Фикус Бенжамина', price: 7000, diameter: 27, height: 140 },
    { id: 27, name: 'Хедера', price: 490, diameter: 13, height: 35, pics: [ pic27_1 ] },
    { id: 28, name: 'Хедера', price: 2800, diameter: 24, height: 110, pics: [ pic27_1 ] },
    { id: 29, name: 'Хойя', price: 1200, diameter: 19, height: 35 },
    { id: 30, name: 'Цыссус', price: 2600, diameter: 17, height: 35 },

    { name: 'Прочее', type: 'header', style: 'text-align: center; background-color: #ccc0da; font-weight: bold;' },
    { id: 31, name: 'Грунт 10 л. цветочный', price: 150 }, 
    { id: 32, name: 'Грунт 150 л.', price: 750 },
    { id: 33, name: 'Грунт 25 л. уневерсальный', price: 320 },
    { id: 34, name: 'Грунт 25 л. Хвойные-голуб-горт', price: 290 },
    { id: 35, name: 'Грунт 50 л. уневерсальный', price: 520 },
    { id: 36, name: 'Грунт 50 л. Хвойные-голуб-горт', price: 470 },        

    { name: 'Рассада', type: 'header', style: 'text-align: center; background-color: #ccc0da; font-weight: bold;' },
    { id: 37, name: 'Каллизия кошпо', price: 650, diameter: 14 },

    { name: 'Уличные растения', type: 'header', style: 'text-align: center; background-color: #ccc0da; font-weight: bold;' },
    { id: 38, name: 'Астра', price: 350, diameter: 12, height: 30, pics: [ pic38_1 ] },
    { id: 39, name: 'Бересклет Арлекин', price: 680, diameter: 13, height: 45 },
    { id: 40, name: 'Бересклет Европейский Рэд Каскад', price: 6000, diameter: 30, height: 15 },
    { id: 41, name: 'Бересклет Крылатый', price: 7900, diameter: 30, height: 80 },
    { id: 42, name: 'Вероника', price: 500, diameter: 13, height: 40, pics: [ pic42_1, pic42_2 ] },
    { id: 43, name: 'Вероника', price: 650, diameter: 14, height: 35, pics: [ pic42_1, pic42_2 ] },
    { id: 44, name: 'Гвоздика', price: 450, diameter: 13, height: 25 },
    { id: 45, name: 'Гвоздика Барбадос', price: 510, diameter: 13, height: 25 },
    { id: 46, name: 'Гвоздика Оскар', price: 310, diameter: 10, height: 25 },
    { id: 47, name: 'Гвоздика Оскар', price: 480, diameter: 12, height: 25 },
    { id: 48, name: 'Гвоздика Пинк Киссес', price: 490, diameter: 12, height: 25, pics: [ pic48_1, pic48_2 ] },
    { id: 49, name: 'Гипсофила', price: 370, diameter: 12, height: 25 },
    { id: 50, name: 'Гипсофила микс', price: 570, diameter: 12, height: 25 },
    { id: 51, name: 'Гортензия Сбежавшая невеста решетка', price: 5000, diameter: 20, height: 35, pics: [ pic51_1, pic51_2 ] },
    { id: 52, name: 'Гортензия Макрофила', price: 2500, diameter: 23, height: 45 },
    { id: 53, name: 'Гортензия Макрофила', price: 5500, diameter: 32, height: 70 },
    { id: 54, name: 'Гортензия Макрофила', price: 12000, diameter: 40, height: 70 },
    { id: 55, name: 'Гортензия метельчатая', price: 4750, diameter: 29, height: 80 },
    { id: 56, name: 'Гортензия Сбежавшая невеста', price: 4000, diameter: 20, height: 35 },
    { id: 57, name: 'Гортензия Черешковая', price: 750, diameter: 9, height: 25 },
    { id: 121, name: 'Гортензия Мэджикал Революшн', price: 7500, diameter: 40, height: 70, pics: [ pic121_1, pic121_2, pic121_3, pic121_4 ] },
    { id: 58, name: 'Граб пендула', price: 15000, diameter: 20, height: 250 },
    { id: 59, name: 'Ель Нигра', price: 3500, diameter: 23, height: 45 },
    { id: 60, name: 'Ель Нидеформис', price: 3800, diameter: 23, height: 45 },
    { id: 61, name: 'Ива пендула ( плакучая)', price: 4000, diameter: 29, height: 250 },
    { id: 62, name: 'Императа', price: 2700, diameter: 23, height: 45 },
    { id: 63, name: 'Калибрахоа', price: 490, diameter: 12, height: 25 },
    { id: 64, name: 'Каллуна (вереск)', price: 410, diameter: 12, height: 27 },
    { id: 65, name: 'Каллуна (вереск) трикси', price: 1430, diameter: 23, height: 30 },
    { id: 66, name: 'Каллуна (вереск) трикси', price: 620, diameter: 12, height: 28 },
    { id: 67, name: 'Калоцефалус', price: 280, diameter: 10, height: 15 },
    { id: 68, name: 'Клематис микс', price: 970, diameter: 15, height: 45 },
    { id: 69, name: 'Котовник', price: 890, diameter: 15, height: 20 },
    { id: 70, name: 'Котовник', price: 1500, diameter: 19, height: 30 },
    { id: 71, name: 'Лаванда', price: 2500, diameter: 32, height: 15 },
    { id: 72, name: 'Леукантемум', price: 650, diameter: 14, height: 35 },
    { id: 73, name: 'Леукантемум', price: 650, diameter: 17, height: 45 },
    { id: 74, name: 'Лещина ( крученая)', price: 6000, diameter: 23, height: 200 },
    { id: 75, name: 'Лобелия многолетняя', price: 710, diameter: 14, height: 35 },
    { id: 76, name: 'Магнолия', price: 5500, diameter: 23, height: 65 },
    { id: 77, name: 'Можжевельник Blue Star', price: 950, diameter: 17, height: 35 },
    { id: 78, name: 'Можжевельник', price: 1900, diameter: 23, height: 25 },
    { id: 79, name: 'Можжевельник', price: 3600, diameter: 29, height: 45 },
    { id: 80, name: 'Осока', price: 910, diameter: 17, height: 35 },
    { id: 81, name: 'Остеоспермум', price: 390, diameter: 10, height: 25 },
    { id: 82, name: 'Пеларгония', price: 350, diameter: 10, height: 35 },
    { id: 83, name: 'Пихта Корейская', price: 2500, diameter: 23, height: 40 },
    { id: 84, name: 'Роза "Леонардо да Винчи"', price: 2100, diameter: 19, height: 45, pics: [ pic84_1, pic84_2 ] },
    { id: 85, name: 'Роза горшок', price: 2250, diameter: 23, height: 145 },
    { id: 86, name: 'Роза Кордана', price: 440, diameter: 10, height: 20 },
    { id: 87, name: 'Роза Кордана', price: 580, diameter: 12 },
    { id: 88, name: 'Роза патио ', price:620, diameter: 13, height: 50 },
    { id: 89, name: 'Роза штамбовая', price: 5500, diameter: 24, height: 110 },
    { id: 90, name: 'Розмарин', price: 650, diameter: 14, height: 30 },
    { id: 91, name: 'Самшит', price: 3500, diameter: 29, height: 40, pics: [ pic91_1, pic91_2 ] },
    { id: 92, name: 'Самшит', price: 13000, diameter: 40, pics: [ pic92_1 ] },
    { id: 93, name: 'Седум', price: 390, diameter: 10, height: 20 },
    { id: 94, name: 'Седум', price: 290, diameter: 12, height: 20 },
    { id: 95, name: 'Седум', price: 500, diameter: 13, height: 20 },
    { id: 96, name: 'Седум', price: 700, diameter: 15, height: 35 },
    { id: 97, name: 'Седум', price: 630, diameter: 17, height: 40 },
    { id: 98, name: 'Семпер', price: 250, diameter: 9, height: 30 },
    { id: 99, name: 'Сирень сортовая', price: 3100, diameter: 23, height: 60 },
    { id: 100, name: 'Туя Nana', price: 2250, diameter: 23, height: 45 },
    { id: 101, name: 'Туя Брабант', price: 1000, diameter: 21, height: 130 },
    { id: 102, name: 'Туя Даника', price: 1990, diameter: 23, height: 40 },
    { id: 103, name: 'Туя Даника', price: 13000, diameter: 38, height: 'шар45' },
    { id: 104, name: 'Туя Помпон', price: 23000, diameter: 38, height: 160, pics: [ pic104_1 ] },
    { id: 105, name: 'Туя Смарагд', price: 1750, diameter: 23 },
    { id: 106, name: 'Туя Смарагд ком', price: 3100, diameter: 160 },
    { id: 107, name: 'Туя Смарагд ком', price: 4800, diameter: 180 },
    { id: 108, name: 'Туя Смарагд ком', price: 6700, diameter: 190 },
    { id: 109, name: 'Туя спираль', price: 53000, diameter: 48, height: 190, pics: [ pic109_1 ] },
    { id: 110, name: 'Туя спираль', price: 41000, diameter: 48, height: 210, pics: [ pic109_1 ] },
    { id: 111, name: 'Туя Чемпион', price: 4500, diameter: 30, height: 140 },
    { id: 112, name: 'Фестука ( овсянница)', price: 350, diameter: 10, height: 25 },
    { id: 113, name: 'Фестука ( овсянница)', price: 900, diameter: 17, height: 40 },
    { id: 114, name: 'Хвойный микс', price: 200, diameter: 9, height: 25 },
    { id: 115, name: 'Хкебе', price: 710, diameter: 12, height: 30 },
    { id: 116, name: 'Хризантема', price: 590, diameter: 15, height: 35 },
    { id: 117, name: 'Хризантема трикси', price: 1500, diameter: 23, height: 'кашпо' },
    { id: 118, name: 'Шалфей', price: 390, diameter: 13, height: 30, pics: [ pic118_1 ] },
    { id: 119, name: 'Шалфей', price: 890, diameter: 17, height: 40, pics: [ pic118_1 ] },
    { id: 120, name: 'Эхиноцея микс', price: 1550, diameter: 19, height: 45 }

  ]


export default {

    items

}

