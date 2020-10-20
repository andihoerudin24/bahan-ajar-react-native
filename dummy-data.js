import Category from '../models/Categori';
import Favorite from '../models/Favorite';
import Recep from '../models/Recep';

export const CATEGORIES = [
  new Category('1', 'Pizaa', 'https://i.pinimg.com/originals/3d/72/a0/3d72a0b87b341f3e2f0f9b1d48f2ffce.jpg'),
  new Category('2', 'Snacks', 'https://i.pinimg.com/564x/71/64/39/71643950dc091724326d6f726ba41ac6.jpg'),
  new Category('3', 'Hamburgers', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/570px-RedDot_Burger.jpg'),
  new Category('4', 'Swist', 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg'),
  new Category('5', 'Spaghetti', 'https://www.budgetbytes.com/wp-content/uploads/2018/04/The-Best-Weeknight-Pasta-Sauce-V5.jpg'),
  new Category('6', 'Exotic', 'https://viewtraveling.com/wp-content/uploads/2017/09/frog-legs.jpg'),
  new Category('7', 'Breakfast', 'https://img.taste.com.au/_rbpFTzv/w720-h480-cfill-q80/taste/2016/11/brekkie-eggs-with-matts-instant-mayo-99867-1.jpeg'),
  new Category('8', 'Asian', 'https://i.ndtvimg.com/i/2015-07/asian-chicken-625_625x350_51436269921.jpg'),
  new Category('9', 'French', 'https://i2.wp.com/blog.britishcornershop.co.uk/wp-content/uploads/2016/07/cheese-fondue-2.jpg?w=570&ssl=1'),
  new Category('10', 'Summer', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/440-400-summer-egg-salad-with-basil-and-peas-ca76f87.jpg?quality=90&resize=500%2C454')
];

export const FAVORITE = [
  //userid & categori id
  new Favorite('1','3'),
  new Favorite('2','9'),
  new Favorite('3','5'),
];


export const RECEP =[
  new Recep(
    '1',
    '3',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
  ),
  new Recep(
    '1',
    '10',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    15,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
  )
]

