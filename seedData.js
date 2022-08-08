const mockUsers = [
  {
    firstName: 'Gratia',
    lastName: 'Marjoribanks',
    password: 'fNLLtA8',
    address: '77252 Bluejay Crossing',
    email: 'gmarjoribanks0@dell.com',
    isAdmin: false,
  },
  {
    firstName: 'Alikee',
    lastName: 'Woollam',
    password: '5GxsYIMUvKW',
    address: '9158 Ridgeway Court',
    email: 'awoollam1@w3.org',
    isAdmin: false,
  },
  {
    firstName: 'Euphemia',
    lastName: 'Normavill',
    password: 'gKjvKdgFaet',
    address: '53235 Northwestern Plaza',
    email: 'enormavill2@symantec.com',
    isAdmin: false,
  },
  {
    firstName: 'Ruy',
    lastName: 'Milson',
    password: 'z6AaM8rAnrH',
    address: '3 Longview Point',
    email: 'rmilson3@cdbaby.com',
    isAdmin: true,
  },
  {
    firstName: 'Sanford',
    lastName: 'Giffon',
    password: 'QxACqumzgrd',
    address: '8601 Old Shore Way',
    email: 'sgiffon4@sciencedaily.com',
    isAdmin: false,
  },
  {
    firstName: 'Shara',
    lastName: 'Doyley',
    password: '9dxETn',
    address: '7 Milwaukee Avenue',
    email: 'sdoyley5@lulu.com',
    isAdmin: false,
  },
  {
    firstName: 'Padraic',
    lastName: 'Axston',
    password: 'xiVtvWnw4K',
    address: '48011 Shelley Hill',
    email: 'paxston6@goo.ne.jp',
    isAdmin: false,
  },
  {
    firstName: 'Lauralee',
    lastName: 'Cockrell',
    password: 'VCxatD',
    address: '4 Straubel Alley',
    email: 'lcockrell7@addtoany.com',
    isAdmin: false,
  },
  {
    firstName: 'Blake',
    lastName: 'Davenhall',
    password: '9k2AgbB',
    address: '89244 Bowman Alley',
    email: 'bdavenhall8@howstuffworks.com',
    isAdmin: false,
  },
  {
    firstName: 'Isaac',
    lastName: 'Winscomb',
    password: 'CUoOYu3E',
    address: '499 Ludington Point',
    email: 'iwinscomb9@youku.com',
    isAdmin: false,
  },
  {
    firstName: 'Glenn',
    lastName: 'Coultard',
    password: 'vYei2TCR',
    address: '550 Texas Junction',
    email: 'gcoultarda@imgur.com',
    isAdmin: false,
  },
  {
    firstName: 'Normie',
    lastName: 'Gouthier',
    password: 'wGTJds',
    address: '524 Summer Ridge Street',
    email: 'ngouthierb@mit.edu',
    isAdmin: false,
  },
  {
    firstName: 'Filberto',
    lastName: 'Livingstone',
    password: 'qMuRVMT6bWZ',
    address: '384 Welch Lane',
    email: 'flivingstonec@ftc.gov',
    isAdmin: false,
  },
  {
    firstName: 'Lira',
    lastName: 'Dagg',
    password: 'dBaFMP',
    address: '4615 Sommers Terrace',
    email: 'ldaggd@meetup.com',
    isAdmin: false,
  },
  {
    firstName: 'Julee',
    lastName: 'Cheales',
    password: 'yRjPiFtqx81W',
    address: '889 Dottie Hill',
    email: 'jchealese@fc2.com',
    isAdmin: false,
  },
  {
    firstName: 'Estrella',
    lastName: 'Benns',
    password: 'hufdp9f9DH9',
    address: '721 Mitchell Lane',
    email: 'ebennsf@nature.com',
    isAdmin: false,
  },
  {
    firstName: 'Quintina',
    lastName: 'Annets',
    password: 'wnydY0PkH',
    address: '821 Spohn Hill',
    email: 'qannetsg@time.com',
    isAdmin: true,
  },
  {
    firstName: 'Maressa',
    lastName: 'Venditto',
    password: 'l9nfVfHThSC',
    address: '4764 Lakewood Gardens Crossing',
    email: 'mvendittoh@gizmodo.com',
    isAdmin: false,
  },
  {
    firstName: 'Currey',
    lastName: 'Breming',
    password: 'lMXSTCRS32',
    address: '2897 Northridge Center',
    email: 'cbremingi@github.com',
    isAdmin: true,
  },
  {
    firstName: 'Cecil',
    lastName: 'Schoolfield',
    password: 'PllakzMmh3',
    address: '30 Vera Trail',
    email: 'cschoolfieldj@hao123.com',
    isAdmin: true,
  },
  {
    firstName: 'Othilie',
    lastName: 'Ciubutaro',
    password: 'TDXJjW',
    address: '4 Myrtle Parkway',
    email: 'ociubutarok@canalblog.com',
    isAdmin: false,
  },
  {
    firstName: 'Michail',
    lastName: 'Fernandes',
    password: 'Ah4ZJaJq',
    address: '90 Gulseth Point',
    email: 'mfernandesl@eepurl.com',
    isAdmin: false,
  },
  {
    firstName: 'Larisa',
    lastName: 'Woodcock',
    password: 'Hja6FxW',
    address: '306 Starling Pass',
    email: 'lwoodcockm@apple.com',
    isAdmin: true,
  },
  {
    firstName: 'Ertha',
    lastName: 'Winspur',
    password: '16isM0',
    address: '071 Gateway Alley',
    email: 'ewinspurn@photobucket.com',
    isAdmin: true,
  },
  {
    firstName: 'Huey',
    lastName: 'Lawrenceson',
    password: 'UAWJVV',
    address: '361 Becker Road',
    email: 'hlawrencesono@about.me',
    isAdmin: false,
  },
  {
    firstName: 'Bax',
    lastName: 'McKirdy',
    password: 'AmIyhPsnIxWF',
    address: '8673 Alpine Hill',
    email: 'bmckirdyp@army.mil',
    isAdmin: false,
  },
  {
    firstName: 'Quill',
    lastName: 'Byart',
    password: 'gMUs4yq',
    address: '2 Carberry Center',
    email: 'qbyartq@wiley.com',
    isAdmin: false,
  },
  {
    firstName: 'Rosanna',
    lastName: 'Fairpool',
    password: 'tG6WmKomp',
    address: '2 Forest Place',
    email: 'rfairpoolr@miibeian.gov.cn',
    isAdmin: true,
  },
  {
    firstName: 'Wendell',
    lastName: 'Houseley',
    password: 'GVmdXdpt77j',
    address: '0 Calypso Crossing',
    email: 'whouseleys@shutterfly.com',
    isAdmin: true,
  },
  {
    firstName: 'Duke',
    lastName: 'Jenkison',
    password: 'LajZ8U281vyE',
    address: '2 Meadow Vale Lane',
    email: 'djenkisont@latimes.com',
    isAdmin: false,
  },
  {
    firstName: 'Dale',
    lastName: 'Rosingdall',
    password: 'ax7yDHjH',
    address: '32704 Buhler Drive',
    email: 'drosingdallu@redcross.org',
    isAdmin: false,
  },
  {
    firstName: 'Antonin',
    lastName: 'Pitchers',
    password: 'O77IIFq',
    address: '962 Basil Street',
    email: 'apitchersv@t.co',
    isAdmin: false,
  },
  {
    firstName: 'Jacqui',
    lastName: 'Nutbrown',
    password: '9jdvVP8u',
    address: '00 Nelson Pass',
    email: 'jnutbrownw@studiopress.com',
    isAdmin: false,
  },
  {
    firstName: 'Loren',
    lastName: 'Lefeuvre',
    password: 'llKBd1gTA1',
    address: '8 Delladonna Pass',
    email: 'llefeuvrex@paypal.com',
    isAdmin: false,
  },
  {
    firstName: 'Fairleigh',
    lastName: 'Merington',
    password: 'XGKbnVXMB9FV',
    address: '13288 Melvin Plaza',
    email: 'fmeringtony@wikimedia.org',
    isAdmin: false,
  },
  {
    firstName: 'Brenn',
    lastName: 'Unwin',
    password: 'rf900Ly1JWu',
    address: '914 Glacier Hill Alley',
    email: 'bunwinz@umich.edu',
    isAdmin: false,
  },
  {
    firstName: 'Cybill',
    lastName: 'Kurton',
    password: 'Dhd7KpuC0T',
    address: '8 Iowa Park',
    email: 'ckurton10@sina.com.cn',
    isAdmin: false,
  },
  {
    firstName: 'Mariana',
    lastName: 'Mallon',
    password: '6bhK7vO',
    address: '70 Bunker Hill Avenue',
    email: 'mmallon11@cisco.com',
    isAdmin: false,
  },
  {
    firstName: 'Arleta',
    lastName: 'Bresnen',
    password: '94tPOMP8pit',
    address: '208 Esker Junction',
    email: 'abresnen12@buzzfeed.com',
    isAdmin: false,
  },
  {
    firstName: 'Antony',
    lastName: 'Hooban',
    password: 'Hv6AjhgFU9j',
    address: '731 Merry Hill',
    email: 'ahooban13@live.com',
    isAdmin: false,
  },
  {
    firstName: 'Olia',
    lastName: 'Behnke',
    password: '6Sw5DX',
    address: '885 Arkansas Court',
    email: 'obehnke14@intel.com',
    isAdmin: false,
  },
  {
    firstName: 'Margaux',
    lastName: 'Figure',
    password: '74DNEHk5MFU',
    address: '204 Linden Circle',
    email: 'mfigure15@vistaprint.com',
    isAdmin: false,
  },
  {
    firstName: 'Swen',
    lastName: 'Spellesy',
    password: 'JSMR3GCj',
    address: '4 Starling Parkway',
    email: 'sspellesy16@nydailynews.com',
    isAdmin: false,
  },
  {
    firstName: 'Wilmar',
    lastName: 'Markham',
    password: 'uoqVpu1q0VO',
    address: '272 Vernon Street',
    email: 'wmarkham17@businessinsider.com',
    isAdmin: false,
  },
  {
    firstName: 'Shandra',
    lastName: 'Conti',
    password: 'kNAnw0mWd',
    address: '73738 Russell Street',
    email: 'sconti18@biglobe.ne.jp',
    isAdmin: false,
  },
  {
    firstName: 'Sissy',
    lastName: 'Mulder',
    password: 'qykf8Q31yaNj',
    address: '74739 Rieder Center',
    email: 'smulder19@fotki.com',
    isAdmin: false,
  },
  {
    firstName: 'Justin',
    lastName: 'McPhillimey',
    password: 'Tzp0Ay2FtbLV',
    address: '47271 Rusk Center',
    email: 'jmcphillimey1a@cdbaby.com',
    isAdmin: false,
  },
  {
    firstName: 'Hermina',
    lastName: 'Dowe',
    password: '9kDOLTl8p',
    address: '86233 Pepper Wood Terrace',
    email: 'hdowe1b@oracle.com',
    isAdmin: false,
  },
  {
    firstName: 'Ethelbert',
    lastName: 'Franck',
    password: 'CyGeMO',
    address: '3496 Browning Circle',
    email: 'efranck1c@theatlantic.com',
    isAdmin: true,
  },
  {
    firstName: 'Maynard',
    lastName: 'Bortolazzi',
    password: 'ecPnfjxZn',
    address: '88851 1st Terrace',
    email: 'mbortolazzi1d@nhs.uk',
    isAdmin: false,
  },
];

const mockProducts = [
  {
    productName: 'Almond Nut',
    description:
      'diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non',
    quantity: 69,
    price: 1499,
    imageUrl:
      'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'bread',
  },
  {
    productName: 'Raspberry Crisps Cookies',
    description:
      'duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel',
    quantity: 64,
    price: 2710,
    imageUrl:
      'https://images.pexels.com/photos/12959868/pexels-photo-12959868.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Savory Cookie',
    description:
      'blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est',
    quantity: 56,
    price: 1586,
    imageUrl:
      'https://www.cookingclassy.com/wp-content/uploads/2012/08/red-velvet-cookies-8.jpg',
    category: 'cookies',
  },
  {
    productName: 'Cherry Muffin',
    description:
      'ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede',
    quantity: 46,
    price: 1774,
    imageUrl:
      'https://littlesunnykitchen.com/wp-content/uploads/2021/06/Cherry-Muffins-6.jpg',
    category: 'muffins',
  },
  {
    productName: 'Fresh Blueberry Muffin',
    description:
      'nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed',
    quantity: 0,
    price: 1616,
    imageUrl:
      'https://images.pexels.com/photos/131899/pexels-photo-131899.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'muffins',
  },
  {
    productName: 'Rum Raisin Pie',
    description:
      'rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa',
    quantity: 19,
    price: 600,
    imageUrl:
      'https://images.pexels.com/photos/2361503/pexels-photo-2361503.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pies',
  },
  {
    productName: 'Strawberry Cupcake',
    description:
      'nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt',
    quantity: 54,
    price: 1595,
    imageUrl:
      'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80',
    category: 'cupcakes',
  },
  {
    productName: 'Pear Loaf',
    description:
      'odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar',
    quantity: 51,
    price: 1240,
    imageUrl:
      'https://dinnerthendessert.com/wp-content/uploads/2020/12/Pear-Bread-Originals-17.jpg',
    category: 'pastries',
  },
  {
    productName: 'Colour Cupcake',
    description:
      'id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in',
    quantity: 64,
    price: 1836,
    imageUrl:
      'https://images.pexels.com/photos/6210740/pexels-photo-6210740.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cupcakes',
  },
  {
    productName: 'Pain Au Liat',
    description:
      'sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui',
    quantity: 86,
    price: 1964,
    imageUrl:
      'http://atcast.typepad.com/.a/6a00d8341c9adb53ef0154365bba6d970c-pi',
    category: 'bread',
  },
  {
    productName: 'Red Rose Pastry',
    description:
      'non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in',
    quantity: null,
    price: 1015,
    imageUrl:
      'https://thecafesucrefarine.com/wp-content/uploads/Glazed-Puff-Pastry-Apple-Roses-3.jpg',
    category: 'pastries',
  },
  {
    productName: 'Chocolate Chip',
    description:
      'maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras',
    quantity: 9,
    price: 1964,
    imageUrl:
      'https://images.pexels.com/photos/3856007/pexels-photo-3856007.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Italian - Wedding Cake',
    description:
      'id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in',
    quantity: 76,
    price: 90000,
    imageUrl:
      'https://i.postimg.cc/sfSzyty2/0-D10-E034-F0-DD-49-A6-9329-AF624-DEC66-F5.jpg',
    category: 'cakes',
  },
  {
    productName: 'Truffle Brioche',
    description:
      'orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat',
    quantity: null,
    price: 2674,
    imageUrl:
      'https://chezus.com/wp-content/uploads/2014/12/untitled-1-of-19.jpg',
    category: 'bread',
  },
  {
    productName: 'Potatoes Pastry',
    description:
      'suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes',
    quantity: 60,
    price: 1345,
    imageUrl:
      'https://images.pexels.com/photos/11880571/pexels-photo-11880571.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
  {
    productName: 'White Wine Pie',
    description:
      'vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam',
    quantity: 94,
    price: 823,
    imageUrl:
      'https://images.pexels.com/photos/5107180/pexels-photo-5107180.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pies',
  },
  {
    productName: 'Amaretto Bread',
    description:
      'eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
    quantity: 96,
    price: 2440,
    imageUrl:
      'https://images.pexels.com/photos/3730917/pexels-photo-3730917.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'bread',
  },
  {
    productName: 'Ostrich Cookie',
    description:
      'risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum',
    quantity: 52,
    price: 1497,
    imageUrl:
      'https://images.pexels.com/photos/6431587/pexels-photo-6431587.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Crab Pastry',
    description:
      'mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae',
    quantity: 3,
    price: 760,
    imageUrl:
      'https://www.willcookforsmiles.com/wp-content/uploads/2021/12/Crab-Puffs-1.jpg',
    category: 'pastries',
  },
  {
    productName: 'Cauliflower Bread',
    description:
      'vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit',
    quantity: 44,
    price: 1738,
    imageUrl:
      'https://www.wholesomeyum.com/wp-content/uploads/2017/07/www.wholesomeyum.com-cauliflower-bread-recipe-low-carb-garlic-bread-img-6081.jpg',
    category: 'bread',
  },
  {
    productName: 'Lobster Muffin',
    description:
      'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin',
    quantity: 74,
    price: 2912,
    imageUrl:
      'https://s23209.pcdn.co/wp-content/uploads/2014/01/IMG_4851edit.jpg',
    category: 'muffins',
  },
  {
    productName: 'Sakura Cupcake',
    description:
      'est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin',
    quantity: 0,
    price: 1623,
    imageUrl:
      'https://urvashiroe.com/wordpress/wp-content/uploads/2011/09/copyright-urvashi-roe_sakura-cupcake1-1.jpg',
    category: 'cupcakes',
  },
  {
    productName: 'Kidney Cookie',
    description:
      'augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna',
    quantity: 52,
    price: 2737,
    imageUrl:
      'https://images.pexels.com/photos/5634612/pexels-photo-5634612.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Red Velvet Cupcakes',
    description:
      'elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac',
    quantity: 7,
    price: 2086,
    imageUrl:
      'https://images.pexels.com/photos/10319189/pexels-photo-10319189.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cupcakes',
  },
  {
    productName: 'Blue Bread',
    description:
      'in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis',
    quantity: 67,
    price: 2153,
    imageUrl:
      'https://images.pexels.com/photos/7962412/pexels-photo-7962412.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'bread',
  },
  {
    productName: 'Hershey Cake',
    description:
      'at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis',
    quantity: 23,
    price: 1721,
    imageUrl:
      'https://omgchocolatedesserts.com/wp-content/uploads/2017/12/Hershey-Cheesecake-Chocolate-Cake-featured-new-copy.jpg',
    category: 'cakes',
  },
  {
    productName: 'Cheesecake Cupcake',
    description:
      'enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu',
    quantity: 41,
    price: 550,
    imageUrl:
      'https://images.pexels.com/photos/7474207/pexels-photo-7474207.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cupcakes',
  },
  {
    productName: 'Berry-delicious Cake',
    description:
      'quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio',
    quantity: 48,
    price: 2799,
    imageUrl:
      'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cakes',
  },
  {
    productName: 'Cherry Chocolate Cupcake',
    description:
      'feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium',
    quantity: 7,
    price: 650,
    imageUrl:
      'https://images.pexels.com/photos/7816718/pexels-photo-7816718.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cupcakes',
  },
  {
    productName: 'Berry Fun Pie',
    description:
      'mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea',
    quantity: 6,
    price: 1900,
    imageUrl:
      'https://images.pexels.com/photos/6163264/pexels-photo-6163264.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pies',
  },
  {
    productName: 'Pumpkin Pie',
    description:
      'magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent',
    quantity: 89,
    price: 1500,
    imageUrl:
      'https://tastesbetterfromscratch.com/wp-content/uploads/2015/10/Pumpkin-Pie-5.jpg',
    category: 'pies',
  },
  {
    productName: 'Apple Pie',
    description:
      'amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris',
    quantity: 14,
    price: 2200,
    imageUrl:
      'https://images.pexels.com/photos/5419095/pexels-photo-5419095.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pies',
  },
  {
    productName: 'Periguita',
    description:
      'enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue',
    quantity: 12,
    price: 700,
    imageUrl:
      'https://2.bp.blogspot.com/-IRNQvPqqW40/TYUajMO--7I/AAAAAAAAAcM/KXYJX4zOy2E/s1600/travesseiros2.jpg',
    category: 'pastries',
  },
  {
    productName: 'Black Tower Cookie',
    description:
      'nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi',
    quantity: 69,
    price: 450,
    imageUrl:
      'https://images.pexels.com/photos/7180590/pexels-photo-7180590.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Island Oasis Chocolate Muffin',
    description:
      'pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam',
    quantity: 14,
    price: 780,
    imageUrl:
      'https://images.pexels.com/photos/3776529/pexels-photo-3776529.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'muffins',
  },
  {
    productName: 'Banana Cupcakes',
    description:
      'amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper',
    quantity: 21,
    price: 1530,
    imageUrl:
      'https://images.pexels.com/photos/10718225/pexels-photo-10718225.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cupcakes',
  },
  {
    productName: 'Cranberry Orange Cupcakes',
    description:
      'platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante',
    quantity: null,
    price: 1177,
    imageUrl:
      'https://crumbsandcaramel.com/wp-content/uploads/2020/12/2-x-3-Cranberry-Cupcakes-Hero-2-Shot.jpg',
    category: 'cupcakes',
  },
  {
    productName: 'Chocolate Chip Walnut Muffin',
    description:
      'nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in',
    quantity: 5,
    price: 1045,
    imageUrl:
      'https://healthyhappylife.com/wp-content/uploads/2020/02/chocolate-chip-muffins-vegan-IMG_5606.jpg',
    category: 'muffins',
  },
  {
    productName: 'Rosemary Loaf',
    description:
      'primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec',
    quantity: 63,
    price: 1905,
    imageUrl:
      'https://images.pexels.com/photos/2661996/pexels-photo-2661996.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'bread',
  },
  {
    productName: 'Dragonfruit Cake',
    description:
      'a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante',
    quantity: 87,
    price: 3550,
    imageUrl:
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cakes',
  },
  {
    productName: 'Pistacio and Creme Tart',
    description:
      'velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta',
    quantity: 12,
    price: 1515,
    imageUrl:
      'https://pinabresciani.com/wp-content/uploads/2018/11/DSC04665.jpg',
    category: 'pastries',
  },
  {
    productName: 'White Chocolate and Vanilla Cake',
    description:
      'aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor',
    quantity: 36,
    price: 2800,
    imageUrl:
      'https://images.pexels.com/photos/1070852/pexels-photo-1070852.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cakes',
  },
  {
    productName: 'Almond Muffin',
    description:
      'dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent',
    quantity: 30,
    price: 805,
    imageUrl:
      'https://images.pexels.com/photos/4946407/pexels-photo-4946407.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'muffins',
  },
  {
    productName: 'Cream Fudge Cupcake',
    description:
      'massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in',
    quantity: 94,
    price: 955,
    imageUrl:
      'https://www.cookingclassy.com/wp-content/uploads/2014/03/ice-cream-sundae-cupcakes2+srgb..jpg',
    category: 'cupcakes',
  },
  {
    productName: 'Chocolate Sugar Cookie',
    description:
      'dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis',
    quantity: 0,
    price: 715,
    imageUrl:
      'https://images.pexels.com/photos/10300106/pexels-photo-10300106.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Biergarten Cookie',
    description:
      'amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus',
    quantity: 83,
    price: 1200,
    imageUrl:
      'https://images.pexels.com/photos/5900063/pexels-photo-5900063.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Harddough Bread',
    description:
      'orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi',
    quantity: 4,
    price: 2400,
    imageUrl:
      'https://images.pexels.com/photos/6608542/pexels-photo-6608542.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'bread',
  },
  {
    productName: 'Fruitylicious',
    description:
      'in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi',
    quantity: 75,
    price: 855,
    imageUrl:
      'https://images.pexels.com/photos/8250338/pexels-photo-8250338.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
  {
    productName: 'Blueberry Muffin',
    description:
      'aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci',
    quantity: 63,
    price: 845,
    imageUrl:
      'https://images.pexels.com/photos/4792391/pexels-photo-4792391.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'muffins',
  },
  {
    productName: 'Mini Fruit Tart',
    description:
      'sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus',
    quantity: null,
    price: 899,
    imageUrl:
      'https://images.pexels.com/photos/1157835/pexels-photo-1157835.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
  {
    productName: "Devil's Food Cake",
    description:
      'pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa',
    quantity: 50,
    price: 6500,
    imageUrl:
      'https://bakerbynature.com/wp-content/uploads/2021/02/devils-food-cake-123-1-of-1.jpg',
    category: 'cakes',
  },
  {
    productName: 'Coconut Milk Bread',
    description:
      'urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam',
    quantity: 66,
    price: 750,
    imageUrl:
      'https://images.pexels.com/photos/4881595/pexels-photo-4881595.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'bread',
  },
  {
    productName: 'Blue Devil Fruit Cake',
    description:
      'in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum',
    quantity: 38,
    price: 5500,
    imageUrl:
      'https://images.pexels.com/photos/4959709/pexels-photo-4959709.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cakes',
  },
  {
    productName: 'Cinnamon Bun',
    description:
      'et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet',
    quantity: 4,
    price: 800,
    imageUrl:
      'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
  {
    productName: 'Blood Orange Pie',
    description:
      'sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat',
    quantity: 12,
    price: 4000,
    imageUrl:
      'https://images.pexels.com/photos/5419095/pexels-photo-5419095.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pies',
  },
  {
    productName: 'Englishbay Wht Cookie',
    description:
      'iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat',
    quantity: 69,
    price: 655,
    imageUrl:
      'https://images.pexels.com/photos/5853924/pexels-photo-5853924.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: "Bailey's Irish Cream Cake",
    description:
      'ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede',
    quantity: null,
    price: 6500,
    imageUrl:
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cakes',
  },
  {
    productName: 'Chocolate Cookie Dough Cupcake',
    description:
      'libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed',
    quantity: 4,
    price: 1200,
    imageUrl:
      'https://images.pexels.com/photos/7525144/pexels-photo-7525144.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'cupcakes',
  },
  {
    productName: "Heather's Cupcake",
    description:
      'ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis',
    quantity: null,
    price: 650,
    imageUrl: 'http://farm3.staticflickr.com/2830/12197751413_92d63b9b3f_c.jpg',
    category: 'cupcakes',
  },
  {
    productName: 'Chocolate and White Macadamia Muffin',
    description:
      'rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo',
    quantity: null,
    price: 1000,
    imageUrl:
      'https://images.pexels.com/photos/4792396/pexels-photo-4792396.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'muffins',
  },
  {
    productName: 'Sliced Brazil Nut Muffin',
    description:
      'morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue',
    quantity: 20,
    price: 985,
    imageUrl:
      'https://images.pexels.com/photos/1657343/pexels-photo-1657343.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'muffins',
  },
  {
    productName: 'Gingergirl Cookies',
    description:
      'nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante',
    quantity: 56,
    price: 650,
    imageUrl:
      'https://images.pexels.com/photos/3309805/pexels-photo-3309805.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Pinot Noir Cookie',
    description:
      'in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus',
    quantity: 80,
    price: 1600,
    imageUrl:
      'https://images.pexels.com/photos/12959868/pexels-photo-12959868.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Chocolate Rum Buttercream Cake',
    description:
      'nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor',
    quantity: 89,
    price: 7500,
    imageUrl:
      'https://images.pexels.com/photos/6341572/pexels-photo-6341572.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cakes',
  },
  {
    productName: 'Mini Cherry Pie',
    description:
      'at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate',
    quantity: null,
    price: 1255,
    imageUrl:
      'https://images.pexels.com/photos/5419104/pexels-photo-5419104.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pies',
  },
  {
    productName: 'Strawberry Shortcake',
    description:
      'metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna',
    quantity: 11,
    price: 2500,
    imageUrl:
      'https://images.pexels.com/photos/1169790/pexels-photo-1169790.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
  {
    productName: 'Lemon Liqueur Almond Croissant',
    description:
      'tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc',
    quantity: 51,
    price: 900,
    imageUrl:
      'https://images.pexels.com/photos/11961854/pexels-photo-11961854.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
  {
    productName: 'Elderberry Muffins',
    description:
      'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui',
    quantity: 97,
    price: 1200,
    imageUrl:
      'https://images.pexels.com/photos/2418652/pexels-photo-2418652.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'muffins',
  },
  {
    productName: 'Mini Chocolate Chip and Olive Oil Muffins',
    description:
      'nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse',
    quantity: 82,
    price: 1105,
    imageUrl:
      'https://momsdinner.net/wp-content/uploads/2020/05/mini-chocolate-chip-muffin-recipe-2.jpg',
    category: 'muffins',
  },
  {
    productName: 'Golden Beet Bluebery Muffin',
    description:
      'aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam',
    quantity: 36,
    price: 1000,
    imageUrl:
      'https://images.pexels.com/photos/556829/pexels-photo-556829.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'muffins',
  },
  {
    productName: 'Spooky Boo Mega Cookie',
    description:
      'id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac',
    quantity: 72,
    price: 1500,
    imageUrl:
      'https://images.pexels.com/photos/5634612/pexels-photo-5634612.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Braided Poppy Seed Pie',
    description:
      'diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris',
    quantity: 75,
    price: 3000,
    imageUrl:
      'https://images.pexels.com/photos/5500480/pexels-photo-5500480.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pies',
  },
  {
    productName: 'Green Mischief Cupcake',
    description:
      'elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus',
    quantity: 75,
    price: 850,
    imageUrl:
      'https://images.pexels.com/photos/6210740/pexels-photo-6210740.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cupcakes',
  },
  {
    productName: 'Carnation Chocolate Cupcake',
    description:
      'elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing',
    quantity: 93,
    price: 1100,
    imageUrl:
      'https://images.pexels.com/photos/9295339/pexels-photo-9295339.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cupcakes',
  },
  {
    productName: 'Banana Flambe Tart',
    description:
      'orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh',
    quantity: 37,
    price: 1520,
    imageUrl:
      'https://images.pexels.com/photos/8250338/pexels-photo-8250338.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
  {
    productName: 'Everlasting Fruit Cake',
    description:
      'sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non',
    quantity: 39,
    price: 30000,
    imageUrl:
      'https://i.postimg.cc/sfSzyty2/0-D10-E034-F0-DD-49-A6-9329-AF624-DEC66-F5.jpg',
    category: 'cakes',
  },
  {
    productName: 'Sweet Tooth Caramel Muffin',
    description:
      'morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique',
    quantity: 30,
    price: 915,
    imageUrl:
      'https://images.pexels.com/photos/4792391/pexels-photo-4792391.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'muffins',
  },
  {
    productName: 'Lemon Meringue Torte',
    description:
      'fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris',
    quantity: 56,
    price: 1255,
    imageUrl:
      'https://images.pexels.com/photos/8250338/pexels-photo-8250338.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
  {
    productName: 'Spiked Heart Cookies (conatins alcohol)',
    description:
      'nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus',
    quantity: null,
    price: 1200,
    imageUrl:
      'https://images.pexels.com/photos/7180590/pexels-photo-7180590.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Mini Red Velvet Cupcakes',
    description:
      'etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut',
    quantity: 98,
    price: 700,
    imageUrl:
      'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80',
    category: 'cupcakes',
  },
  {
    productName: 'Strawberry Crazed Pie',
    description:
      'luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est',
    quantity: 48,
    price: 3015,
    imageUrl:
      'https://images.pexels.com/photos/6574741/pexels-photo-6574741.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pies',
  },
  {
    productName: "Irish Whiskey Hallow's Eve Cookies",
    description:
      'orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu',
    quantity: 81,
    price: 1100,
    imageUrl:
      'https://images.pexels.com/photos/5634612/pexels-photo-5634612.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Energy Cake',
    description:
      'eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus',
    quantity: 95,
    price: 5535,
    imageUrl:
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cakes',
  },
  {
    productName: 'Mulberry Muffin',
    description:
      'accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut',
    quantity: 21,
    price: 850,
    imageUrl:
      'https://images.pexels.com/photos/2418652/pexels-photo-2418652.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'muffins',
  },
  {
    productName: 'Mulberry Pastry',
    description:
      'non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus',
    quantity: 66,
    price: 805,
    imageUrl:
      'https://images.pexels.com/photos/5107180/pexels-photo-5107180.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
  {
    productName: 'Be Mine Cookie',
    description:
      'morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla',
    quantity: 7,
    price: 900,
    imageUrl:
      'https://images.pexels.com/photos/7180590/pexels-photo-7180590.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Pine Nut Cookies',
    description:
      'in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis',
    quantity: 16,
    price: 700,
    imageUrl:
      'https://images.pexels.com/photos/10300106/pexels-photo-10300106.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Fruit Thyme Pie',
    description:
      'vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis',
    quantity: 26,
    price: 3500,
    imageUrl:
      'https://images.pexels.com/photos/8105063/pexels-photo-8105063.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pies',
  },
  {
    productName: 'Mini Fruit Cream Cupcake',
    description:
      'in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum',
    quantity: 42,
    price: 650,
    imageUrl:
      'https://images.pexels.com/photos/7474207/pexels-photo-7474207.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cupcakes',
  },
  {
    productName: 'Mini-blueberry Muffin',
    description:
      'orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a',
    quantity: 74,
    price: 600,
    imageUrl:
      'https://images.pexels.com/photos/2418652/pexels-photo-2418652.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'muffins',
  },
  {
    productName: 'Brown Sugar Cookies (sets of 2)',
    description:
      'metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend',
    quantity: 62,
    price: 1050,
    imageUrl:
      'https://images.pexels.com/photos/5900063/pexels-photo-5900063.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Perching Berry Tiered Cake',
    description:
      'sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis',
    quantity: 90,
    price: 70000,
    imageUrl:
      'https://i.postimg.cc/sfSzyty2/0-D10-E034-F0-DD-49-A6-9329-AF624-DEC66-F5.jpg',
    category: 'cakes',
  },
  {
    productName: 'Italian Breadsticks',
    description:
      'id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis',
    quantity: 38,
    price: 1570,
    imageUrl:
      'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'bread',
  },
  {
    productName: 'Lemon Buttercream Cake',
    description:
      'justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat',
    quantity: 10,
    price: 6500,
    imageUrl:
      'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cakes',
  },
  {
    productName: 'Mini Fruit Tortes',
    description:
      'lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere',
    quantity: 89,
    price: 770,
    imageUrl:
      'https://images.pexels.com/photos/9582686/pexels-photo-9582686.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
  {
    productName: 'Blueberry Rush Muffins',
    description:
      'neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui',
    quantity: 51,
    price: 890,
    imageUrl:
      'https://images.pexels.com/photos/2418652/pexels-photo-2418652.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'muffins',
  },
  {
    productName: 'Mini Meringues',
    description:
      'morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie',
    quantity: 59,
    price: 800,
    imageUrl:
      'https://images.pexels.com/photos/8250338/pexels-photo-8250338.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
  {
    productName: 'Lemon Sesame Croissant',
    description:
      'bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce',
    quantity: 95,
    price: 780,
    imageUrl:
      'https://images.pexels.com/photos/3141268/pexels-photo-3141268.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'bread',
  },
  {
    productName: 'Summer Berry Splash Pie',
    description:
      'eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus',
    quantity: 38,
    price: 2700,
    imageUrl:
      'https://images.pexels.com/photos/9008662/pexels-photo-9008662.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pies',
  },
  {
    productName: 'Pistachio Macroons',
    description:
      'lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum',
    quantity: 74,
    price: 1500,
    imageUrl:
      'https://images.pexels.com/photos/8963942/pexels-photo-8963942.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
  {
    productName: 'Fig Cake',
    description:
      'mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum',
    quantity: 20,
    price: 4040,
    imageUrl:
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cakes',
  },
  {
    productName: 'Sesame Poppy Roll',
    description:
      'in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla',
    quantity: 90,
    price: 700,
    imageUrl:
      'https://homebodyeats.com/wp-content/uploads/2021/10/knotted-challah-rolls.jpg',
    category: 'bread',
  },
  {
    productName: 'Godiva Chocolate Chip Cookies',
    description:
      'mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing',
    quantity: 5,
    price: 1530,
    imageUrl:
      'https://images.pexels.com/photos/5853924/pexels-photo-5853924.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Chocolate Creme Cake',
    description:
      'vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper',
    quantity: 59,
    price: 4500,
    imageUrl:
      'https://images.pexels.com/photos/6557291/pexels-photo-6557291.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cakes',
  },
  {
    productName: 'Cheese Danish',
    description:
      'volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus',
    quantity: 26,
    price: 515,
    imageUrl:
      'https://cakescottage.com/wp-content/uploads/2016/03/cream-cheese-danish-a3.jpg',
    category: 'pastries',
  },
  {
    productName: 'Ginger Snap Cookies Sets',
    description:
      'venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar',
    quantity: 48,
    price: 1000,
    imageUrl:
      'https://images.pexels.com/photos/12959868/pexels-photo-12959868.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Mixedish Pumpkin & Sweet Potato Pie',
    description:
      'erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia',
    quantity: 98,
    price: 3500,
    imageUrl:
      'https://images.pexels.com/photos/9813069/pexels-photo-9813069.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pies',
  },
  {
    productName: 'Whmis Mini-Blueberry Muffins',
    description:
      'phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu',
    quantity: 63,
    price: 660,
    imageUrl:
      'https://images.pexels.com/photos/556829/pexels-photo-556829.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'muffins',
  },
  {
    productName: 'Cherry Chocolate Chip Muffin',
    description:
      'at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna',
    quantity: 60,
    price: 925,
    imageUrl:
      'https://www.runningwithspoons.com/wp-content/uploads/2016/08/Chocolate-Cherry-Greek-Yogurt-Muffins3.jpg',
    category: 'muffins',
  },
  {
    productName: 'Grinch Cupcake',
    description:
      'odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus',
    quantity: 53,
    price: 735,
    imageUrl:
      'https://images.pexels.com/photos/6210756/pexels-photo-6210756.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cupcakes',
  },
  {
    productName: 'Sweet Potato Pie',
    description:
      'montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent',
    quantity: 73,
    price: 3045,
    imageUrl:
      'https://images.pexels.com/photos/9813069/pexels-photo-9813069.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pies',
  },
  {
    productName: 'Guava Bread',
    description:
      'semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et',
    quantity: 59,
    price: 2045,
    imageUrl:
      'https://images.pexels.com/photos/1002322/pexels-photo-1002322.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'bread',
  },
  {
    productName: 'Winter Spectacular',
    description:
      'suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa',
    quantity: 38,
    price: 655,
    imageUrl:
      'https://www.pexels.com/photo/clear-glass-bottle-with-milk-3522528/',
    category: 'cookies',
  },
  {
    productName: 'Godiva Chocolate Cookies',
    description:
      'accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula',
    quantity: 44,
    price: 565,
    imageUrl:
      'https://images.pexels.com/photos/3856007/pexels-photo-3856007.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: `Grandma's Molasses Cookie`,
    description:
      'aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis',
    quantity: 42,
    price: 650,
    imageUrl:
      'https://images.pexels.com/photos/6431587/pexels-photo-6431587.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Electric Blue Cupcake',
    description:
      'primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor',
    quantity: 90,
    price: 775,
    imageUrl:
      'https://images.pexels.com/photos/7474207/pexels-photo-7474207.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cupcakes',
  },
  {
    productName: 'Halloween Cookies (kids)',
    description:
      'amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non',
    quantity: 47,
    price: 475,
    imageUrl:
      'https://images.pexels.com/photos/5634612/pexels-photo-5634612.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'cookies',
  },
  {
    productName: 'Chocolate Eclairs',
    description:
      'mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui',
    quantity: 80,
    price: 2535,
    imageUrl:
      'https://images.pexels.com/photos/5706442/pexels-photo-5706442.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pies',
  },
  {
    productName: 'Flour - Corn, Fine',
    description:
      'rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel',
    quantity: 15,
    price: 1015,
    imageUrl:
      'https://images.pexels.com/photos/9582686/pexels-photo-9582686.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
  {
    productName: 'Ice Cream - Chocolate',
    description:
      'condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui',
    quantity: 71,
    price: 1830,
    imageUrl:
      'https://images.pexels.com/photos/11880571/pexels-photo-11880571.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'pastries',
  },
];

const mockOrderItems = [
  { totalQuantity: 3, totalCost: 29.84 },
  { totalQuantity: 9, totalCost: 75.26 },
  { totalQuantity: 10, totalCost: 60.78 },
  { totalQuantity: 6, totalCost: 43.2 },
  { totalQuantity: 6, totalCost: 99.15 },
  { totalQuantity: 5, totalCost: 73.59 },
  { totalQuantity: 3, totalCost: 98.24 },
  { totalQuantity: 13, totalCost: 73.54 },
  { totalQuantity: 11, totalCost: 45.54 },
  { totalQuantity: 13, totalCost: 26.56 },
  { totalQuantity: 6, totalCost: 37.64 },
  { totalQuantity: 8, totalCost: 102.92 },
  { totalQuantity: 5, totalCost: 104.25 },
  { totalQuantity: 9, totalCost: 32.5 },
  { totalQuantity: 3, totalCost: 91.11 },
  { totalQuantity: 15, totalCost: 114.63 },
  { totalQuantity: 2, totalCost: 73.42 },
  { totalQuantity: 14, totalCost: 69.07 },
  { totalQuantity: 15, totalCost: 73.35 },
  { totalQuantity: 12, totalCost: 57.34 },
  { totalQuantity: 5, totalCost: 80.81 },
  { totalQuantity: 5, totalCost: 39.42 },
  { totalQuantity: 10, totalCost: 93.31 },
  { totalQuantity: 6, totalCost: 46.72 },
  { totalQuantity: 5, totalCost: 53.15 },
  { totalQuantity: 6, totalCost: 68.46 },
  { totalQuantity: 14, totalCost: 58.66 },
  { totalQuantity: 15, totalCost: 31.63 },
  { totalQuantity: 3, totalCost: 25.4 },
  { totalQuantity: 3, totalCost: 32.33 },
  { totalQuantity: 13, totalCost: 56.31 },
  { totalQuantity: 8, totalCost: 85.48 },
  { totalQuantity: 3, totalCost: 34.97 },
  { totalQuantity: 1, totalCost: 113.53 },
  { totalQuantity: 12, totalCost: 42.2 },
  { totalQuantity: 9, totalCost: 68.84 },
  { totalQuantity: 14, totalCost: 74.15 },
  { totalQuantity: 11, totalCost: 68.25 },
  { totalQuantity: 4, totalCost: 78.18 },
  { totalQuantity: 7, totalCost: 25.56 },
  { totalQuantity: 12, totalCost: 74.7 },
  { totalQuantity: 11, totalCost: 89.5 },
  { totalQuantity: 4, totalCost: 106.92 },
  { totalQuantity: 14, totalCost: 57.85 },
  { totalQuantity: 2, totalCost: 93.86 },
];

const mockOrders = [
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'closed' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'open' },
  { status: 'closed' },
];

module.exports = { mockUsers, mockProducts, mockOrders, mockOrderItems };
