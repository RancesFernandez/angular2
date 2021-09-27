var countries_Nsp = (function () {
    var countriesAndStates = [
        {
            "name": "Afghanistan",
            "states": [
                "Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamyan", "Daykundi", "Farah", "Faryab", "Ghazni",
                "Ghowr", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khowst", "Kunar", "Kunduz",
                "Laghman", "Logar", "Nangarhar", "Nimroz", "Nuristan", "Oruzgan", "Paktia", "Paktika", "Panjshir",
                "Parwan", "Samangan", "Sar-e Pol", "Takhar", "Vardak", "Zabul"
            ]
        }, {
            "name": "Albania",
            "states": [
                "Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës", "Lezhë", "Shkodër",
                "Tiranë", "Vlorë"
            ]
        }, {
            "name": "Algeria",
            "states": [
                "Adrar", "Algiers", "Annaba", "Aïn Defla", "Aïn Témouchent", "Batna", "Biskra", "Blida",
                "Bordj Bou Arréridj", "Bouira", "Boumerdes", "Béchar", "Béjaïa", "Chlef", "Constantine", "Djelfa",
                "El Bayadh", "El Oued", "El Tarf", "Ghardaia", "Guelma", "Illizi", "Jijel", "Khenchela", "Laghouat",
                "M'Sila", "Mascara", "Medea", "Mila", "Mostaganem", "Naama", "Oran", "Ouargla", "Oum el Bouaghi",
                "Relizane", "Saida", "Sidi Bel Abbès", "Skikda", "Souk Ahras", "Sétif", "Tamanrasset", "Tiaret",
                "Tindouf", "Tipaza", "Tissemsilt", "Tizi Ouzou", "Tlemcen", "Tébessa"
            ]
        }, { "name": "American Samoa" }, {
            "name": "Andorra",
            "states": [
                "Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino",
                "Sant Julià de Loria"
            ]
        }, {
            "name": "Angola",
            "states": [
                "Bengo", "Benguela", "Bíe", "Cabinda", "Cuando Cobango", "Cuanza Norte", "Cunene", "Huambo",
                "Huíla", "Kwanza Sul", "Luanda", "Luanda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge",
                "Zaire"
            ]
        }, {
            "name": "Anguilla",
            "states": [
                "Blowing Point", "East End", "George Hill", "Island Harbour", "North Hill", "North Side",
                "Sandy Ground", "Sandy Hill", "South Hill", "Stoney Ground", "The Farrington", "The Quarter",
                "The Valley", "West End"
            ]
        }, { "name": "Antarctica" }, {
            "name": "Antigua and Barbuda",
            "states": [
                "Barbuda", "Redonda", "Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter",
                "Saint Philip"
            ]
        }, {
            "name": "Argentina",
            "states": [
                "Buenos Aires", "Buenos Aires F.D.", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes",
                "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen",
                "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero",
                "Tierra del Fuego", "Tucuman"
            ]
        }, {
            "name": "Armenia",
            "states": [
                "Aragatsotn", "Ararat", "Armavir", "Gegharkunik", "Kotayk", "Lori", "Shirak", "Syunik", "Tavush",
                "Vayots Dzor", "Yerevan"
            ]
        }, { "name": "Aruba" }, {
            "name": "Australia",
            "states": [
                "ACT", "New South Wales", "Northern Territory", "Queensland", "South Australia", "Tasmania",
                "Victoria", "Western Australia"
            ]
        }, {
            "name": "Austria",
            "states": [
                "Burgenland", "Carinthia", "Lower Austria", "Salzburg", "Styria", "Tyrol", "Upper Austria",
                "Vienna", "Vorarlberg"
            ]
        }, {
            "name": "Azerbaijan",
            "states": [
                "Abşeron", "Astara", "Ağcabǝdi", "Ağdam", "Ağdaş", "Ağstafa", "Ağsu", "Baki", "Balakǝn", "Beyləqan",
                "Bilǝsuvar", "Bǝrdǝ", "Daşkǝsǝn", "Füzuli", "Goranboy", "Goygol Rayon", "Göyçay", "Gǝdǝbǝy",
                "Gǝncǝ", "Hacıqabul", "Jabrayil", "Jalilabad", "Kalbajar", "Khojavend", "Kürdǝmir",
                "Lankaran Sahari", "Laçın", "Lerik", "Lənkəran", "Masally", "Mingǝcevir", "Naftalan", "Nakhchivan",
                "Nakhichevan", "Neftçala", "Oğuz", "Qazax", "Qobustan", "Quba", "Qubadlı", "Qusar", "Qǝbǝlǝ", "Qǝx",
                "Saatlı", "Sabirabad", "Salyan", "Samux", "Shabran", "Shaki City", "Shirvan", "Siyǝzǝn", "Sumqayit",
                "Tovuz", "Tǝrtǝr", "Ucar", "Xankǝndi", "Xaçmaz", "Xocalı", "Xızı", "Yardımlı", "Yevlax",
                "Yevlax City", "Zaqatala", "Zǝngilan", "Zərdab", "İmişli", "İsmayıllı", "Şamaxı", "Şuşa",
                "Şuşa Şəhəri", "Şǝki", "Şǝmkir"
            ]
        }, {
            "name": "Bahamas",
            "states": [
                "Acklins", "Berry Islands", "Bimini", "Black Point", "Cat Island", "Central Abaco",
                "Central Andros", "Central Eleuthera", "Crooked Island and Long Cay", "East Grand Bahama", "Exuma",
                "Freeport", "Grand Cay", "Harbour Island", "Hope Town", "Inagua", "Long Island", "Mangrove Cay",
                "Mayaguana", "Moore’s Island", "New Providence", "North Abaco", "North Andros", "North Eleuthera",
                "Ragged Island", "Rum Cay", "San Salvador", "South Abaco", "South Andros", "South Eleuthera",
                "Spanish Wells", "West Grand Bahama"
            ]
        }, {
            "name": "Bahrain",
            "states": ["Central Governorate", "Manama", "Muharraq", "Northern Governorate", "Southern Governorate"]
        }, {
            "name": "Bangladesh",
            "states": [
                "Barisāl", "Chittagong", "Dhaka", "Khulna", "Mymensingh Division", "Rangpur Division", "Rājshāhi",
                "Sylhet"
            ]
        }, {
            "name": "Barbados",
            "states": [
                "Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph",
                "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"
            ]
        }, {
            "name": "Belarus",
            "states": ["Brest", "Gomel", "Grodnenskaya", "Minsk", "Minsk City", "Mogilev", "Vitebsk"]
        }, { "name": "Belgium", "states": ["Brussels Capital", "Flanders", "Wallonia"] },
        { "name": "Belize", "states": ["Belize", "Cayo", "Corozal", "Orange Walk", "Stann Creek", "Toledo"] },
        {
            "name": "Benin",
            "states": [
                "Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono",
                "Ouémé", "Plateau", "Zou"
            ]
        }, {
            "name": "Bermuda",
            "states": [
                "Devonshire", "Hamilton", "Hamilton city", "Paget", "Pembroke", "Saint George", "Saint Georgeʼs",
                "Sandys", "Smithʼs", "Southampton", "Warwick"
            ]
        }, {
            "name": "Bhutan",
            "states": [
                "Bumthang", "Chirang", "Chukha", "Dagana", "Gasa", "Geylegphug", "Haa", "Lhuntse", "Mongar", "Paro",
                "Pemagatshel", "Punakha", "Samchi", "Samdrup Jongkhar", "Shemgang", "Tashigang", "Thimphu",
                "Tongsa", "Trashi Yangste", "Wangdi Phodrang"
            ]
        }, {
            "name": "Bolivia",
            "states": [
                "Chuquisaca", "Cochabamba", "El Beni", "La Paz", "Oruro", "Pando", "Potosí", "Santa Cruz", "Tarija"
            ]
        }, { "name": "Bonaire", "states": ["Bonaire", "Saba", "Sint Eustatius"] },
        { "name": "Bonaire, Sint Eustatius, and Saba" }, {
            "name": "Bosnia and Herzegovina",
            "states": ["Brčko", "Federation of B&H", "Srspka"]
        }, {
            "name": "Botswana",
            "states": [
                "Central", "Ghanzi", "Kgalagadi", "Kgatleng", "Kweneng", "Ngwaketsi", "North-East", "North-West",
                "South-East"
            ]
        }, { "name": "Bouvet Island" }, {
            "name": "Brazil",
            "states": [
                "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Federal District",
                "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Paraná", "Paraíba",
                "Pará", "Pernambuco", "Piauí", "Rio Grande do Norte", "Rio Grande do Sul", "Rio de Janeiro",
                "Rondônia", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"
            ]
        }, { "name": "British Indian Ocean Territory" }, { "name": "British Virgin Islands" },
        { "name": "Brunei", "states": ["Belait", "Brunei and Muara", "Temburong", "Tutong"] },
        {
            "name": "Bulgaria",
            "states": [
                "Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Khaskovo", "Kyustendil", "Kŭrdzhali", "Lovech",
                "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra",
                "Sliven", "Smolyan", "Sofia", "Sofia-Capital", "Stara Zagora", "Tŭrgovishte", "Varna",
                "Veliko Tŭrnovo", "Vidin", "Vratsa", "Yambol"
            ]
        }, {
            "name": "Burkina Faso",
            "states": [
                "Boucle du Mouhoun", "Cascades", "Centre", "Centre-Est", "Centre-Nord", "Centre-Ouest",
                "Centre-Sud", "Est", "Hauts-Bassins", "Nord", "Plateau-Central", "Sahel", "Sud-Ouest"
            ]
        }, {
            "name": "Burundi",
            "states": [
                "Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega",
                "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rumonge",
                "Rutana", "Ruyigi"
            ]
        }, {
            "name": "Cambodia",
            "states": [
                "Banteay Meanchey", "Battambang", "Kampong Cham", "Kampong Chhnang", "Kampong Speu", "Kampong Thom",
                "Kampot", "Kandal", "Kep", "Koh Kong", "Kratie", "Mondolkiri", "Pailin", "Phnom Penh",
                "Preah Sihanouk", "Preah Vihear", "Prey Veng", "Pursat", "Ratanakiri", "Siem Reap", "Stung Treng",
                "Svay Rieng", "Takeo", "Tboung Khmum", "Ŏtâr Méanchey"
            ]
        }, {
            "name": "Cameroon",
            "states": [
                "Adamaoua", "Centre", "East", "Far North", "Littoral", "North", "North-West", "South", "South-West",
                "West"
            ]
        }, {
            "name": "Canada",
            "states": [
                "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
                "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec",
                "Saskatchewan", "Yukon"
            ]
        }, {
            "name": "Cape Verde",
            "states": [
                "Boa Vista", "Brava", "Maio", "Mosteiros", "Paul", "Porto Novo", "Praia", "Ribeira Brava",
                "Ribeira Grande", "Ribeira Grande de Santiago", "Sal", "Santa Catarina", "Santa Catarina do Fogo",
                "Santa Cruz", "São Domingos", "São Filipe", "São Lourenço dos Órgãos", "São Miguel",
                "São Salvador do Mundo", "São Vicente", "Tarrafal", "Tarrafal de São Nicolau"
            ]
        }, {
            "name": "Cayman Islands",
            "states": ["Bodden Town", "East End", "George Town", "North Side", "Sister Island", "West Bay"]
        }, {
            "name": "Central African Republic",
            "states": [
                "Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haut-Mbomou", "Haute-Kotto", "Kémo", "Lobaye",
                "Mambéré-Kadéï", "Mbomou", "Nana-Grébizi", "Nana-Mambéré", "Ombella-M'Poko", "Ouaka", "Ouham",
                "Ouham-Pendé", "Sangha-Mbaéré", "Vakaga"
            ]
        }, {
            "name": "Chad",
            "states": [
                "Barh el Gazel", "Batha", "Borkou", "Chari-Baguirmi", "Ennedi-Est", "Ennedi-Ouest", "Guéra",
                "Hadjer-Lamis", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mandoul", "Mayo-Kebbi Est",
                "Mayo-Kebbi Ouest", "Moyen-Chari", "N’Djaména", "Ouadaï", "Salamat", "Sila", "Tandjilé", "Tibesti",
                "Wadi Fira"
            ]
        }, {
            "name": "Chile",
            "states": [
                "Aisén", "Antofagasta", "Araucanía", "Arica y Parinacota", "Atacama", "Biobío", "Coquimbo",
                "Los Lagos", "Los Ríos", "Magallanes", "Maule", "O'Higgins", "Santiago Metropolitan", "Tarapacá",
                "Valparaíso"
            ]
        }, {
            "name": "China",
            "states": [
                "Anhui", "Beijing", "Chongqing", "Fujian", "Gansu", "Guangdong", "Guangxi", "Guizhou", "Hainan",
                "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Inner Mongolia", "Jiangsu", "Jiangxi", "Jilin",
                "Liaoning", "Ningsia Hui Autonomous Region", "Qinghai", "Shaanxi", "Shandong", "Shanghai", "Shanxi",
                "Sichuan", "Tianjin", "Tibet", "Xinjiang", "Yunnan", "Zhejiang"
            ]
        }, { "name": "Christmas Island" }, { "name": "Cocos [Keeling] Islands" },
        {
            "name": "Colombia",
            "states": [
                "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bogota D.C.", "Bolívar", "Boyacá", "Caldas",
                "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Cundinamarca", "Córdoba", "Guainía", "Guaviare",
                "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío",
                "Risaralda", "San Andres y Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca",
                "Vaupés", "Vichada"
            ]
        }, { "name": "Comoros", "states": ["Anjouan", "Grande Comore", "Mohéli"] }, { "name": "Congo" },
        { "name": "Cook Islands" }, { "name": "Coral Sea Islands Territory" },
        { "name": "Costa Rica", "states": ["Alajuela", "Cartago", "Guanacaste", "Heredia", "Limón", "San José"] },
        {
            "name": "Croatia",
            "states": [
                "Bjelovarsko-Bilogorska", "City of Zagreb", "Dubrovačko-Neretvanska", "Istarska", "Karlovačka",
                "Koprivničko-Križevačka", "Krapinsko-Zagorska", "Ličko-Senjska", "Međimurska", "Osječko-Baranjska",
                "Požeško-Slavonska", "Primorsko-Goranska", "Sisačko-Moslavačka", "Slavonski Brod-Posavina",
                "Splitsko-Dalmatinska", "Varaždinska", "Virovitičk-Podravska", "Vukovar-Sirmium", "Zadarska",
                "Zagrebačka", "Šibensko-Kniniska"
            ]
        }, {
            "name": "Cuba",
            "states": [
                "Artemisa", "Camagüey", "Ciego de Ávila", "Cienfuegos", "Granma", "Guantánamo", "Holguín",
                "Isla de la Juventud", "La Habana", "Las Tunas", "Matanzas", "Mayabeque", "Pinar del Río",
                "Sancti Spíritus", "Santiago de Cuba", "Villa Clara"
            ]
        }, { "name": "Curaçao" }, {
            "name": "Cyprus",
            "states": ["Ammochostos", "Keryneia", "Larnaka", "Limassol", "Nicosia", "Pafos"]
        }, {
            "name": "Czechia",
            "states": [
                "Central Bohemia", "Jihočeský", "Karlovarský", "Královéhradecký", "Liberecký", "Moravskoslezský",
                "Olomoucký", "Pardubický", "Plzeňský", "Praha", "South Moravian", "Vysočina", "Zlín", "Ústecký"
            ]
        }, { "name": "DR Congo" }, {
            "name": "Democratic Republic of the Congo",
            "states": [
                "Bas Uele", "Bas-Congo", "Haut Uele", "Haut-Katanga", "Haut-Lomani", "Ituri", "Kasai",
                "Kasaï-Central", "Kasaï-Oriental", "Kinshasa", "Kwango", "Kwilu", "Lomami", "Lualaba", "Mai Ndombe",
                "Maniema", "Mongala", "Nord Kivu", "Nord-Ubangi", "Sankuru", "South Kivu", "Sud-Ubangi",
                "Tanganika", "Tshopo", "Tshuapa", "Équateur"
            ]
        }, {
            "name": "Denmark",
            "states": ["Capital Region", "Central Jutland", "North Denmark", "South Denmark", "Zealand"]
        }, { "name": "Djibouti", "states": ["Ali Sabieh", "Arta", "Dikhil", "Djibouti", "Obock", "Tadjourah"] },
        {
            "name": "Dominica",
            "states": [
                "Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Joseph", "Saint Luke",
                "Saint Mark", "Saint Patrick", "Saint Paul", "Saint Peter"
            ]
        }, {
            "name": "Dominican Republic",
            "states": [
                "Azua", "Baoruco", "Barahona", "Dajabón", "Duarte", "El Seíbo", "Elías Piña", "Espaillat",
                "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega",
                "María Trinidad Sánchez", "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Nacional", "Pedernales",
                "Peravia", "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan",
                "San Pedro de Macorís", "Santiago", "Santiago Rodríguez", "Santo Domingo", "Sánchez Ramírez",
                "Valverde"
            ]
        }, {
            "name": "East Timor",
            "states": [
                "Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova Lima", "Díli", "Ermera", "Lautém", "Liquiçá",
                "Manatuto", "Manufahi", "Oecusse", "Viqueque"
            ]
        }, {
            "name": "Ecuador",
            "states": [
                "Azuay", "Bolívar", "Carchi", "Cañar", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas",
                "Galápagos", "Guayas", "Imbabura", "Loja", "Los Ríos", "Manabí", "Morona-Santiago", "Napo",
                "Orellana", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo de los Tsáchilas", "Sucumbios",
                "Tungurahua", "Zamora-Chinchipe"
            ]
        }, {
            "name": "Egypt",
            "states": [
                "Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suweif", "Cairo", "Dakahlia", "Damietta", "Faiyum",
                "Gharbia", "Giza", "Ismailia", "Kafr el-Sheikh", "Luxor", "Matruh", "Minya", "Monufia",
                "New Valley", "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag",
                "South Sinai", "Suez"
            ]
        }, {
            "name": "El Salvador",
            "states": [
                "Ahuachapán", "Cabañas", "Chalatenango", "Cuscatlán", "La Libertad", "La Paz", "La Unión",
                "Morazán", "San Miguel", "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulután"
            ]
        }, {
            "name": "Equatorial Guinea",
            "states": ["Annobon", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kié-Ntem", "Litoral", "Wele-Nzas"]
        }, {
            "name": "Eritrea",
            "states": ["Anseba", "Debub", "Gash-Barka", "Maekel", "Northern Red Sea", "Southern Red Sea"]
        }, {
            "name": "Estonia",
            "states": [
                "Harjumaa", "Hiiumaa", "Ida-Virumaa", "Järvamaa", "Jõgevamaa", "Lääne", "Lääne-Virumaa", "Pärnumaa",
                "Põlvamaa", "Raplamaa", "Saare", "Tartu", "Valgamaa", "Viljandimaa", "Võrumaa"
            ]
        }, {
            "name": "Ethiopia",
            "states": [
                "Addis Ababa", "Amhara", "Bīnshangul Gumuz", "Dire Dawa", "Gambela", "Harari", "Oromiya", "SNNPR",
                "Somali", "Tigray", "Āfar"
            ]
        }, { "name": "Falkland Islands" }, {
            "name": "Faroe Islands",
            "states": ["Eysturoy", "Norðoyar", "Sandoy", "Streymoy", "Suðuroy", "Vágar"]
        }, { "name": "Fiji", "states": ["Central", "Eastern", "Northern", "Rotuma", "Western"] },
        {
            "name": "Finland",
            "states": [
                "Central Finland", "Central Ostrobothnia", "Häme", "Kainuu", "Kymenlaakso", "Lapland",
                "North Karelia", "Northern Ostrobothnia", "Northern Savo", "Ostrobothnia", "Pirkanmaa",
                "Päijänne Tavastia", "Satakunta", "South Karelia", "Southern Ostrobothnia", "Southern Savonia",
                "Southwest Finland", "Uusimaa"
            ]
        }, {
            "name": "France",
            "states": [
                "Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre", "Corsica", "Grand Est",
                "Hauts-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire",
                "Provence-Alpes-Côte d'Azur", "Île-de-France"
            ]
        }, { "name": "French Guiana", "states": ["Guyane"] },
        {
            "name": "French Polynesia",
            "states": [
                "Leeward Islands", "Îles Australes", "Îles Marquises", "Îles Tuamotu-Gambier", "Îles du Vent"
            ]
        }, {
            "name": "French Southern Territories",
            "states": ["Crozet", "Kerguelen", "Saint-Paul-et-Amsterdam", "Terre-Adélie", "Îles Éparses"]
        }, {
            "name": "Gabon",
            "states": [
                "Estuaire", "Haut-Ogooué", "Moyen-Ogooué", "Ngouni", "Nyanga", "Ogooué-Ivindo", "Ogooué-Lolo",
                "Ogooué-Maritime", "Woleu-Ntem"
            ]
        }, {
            "name": "Gambia",
            "states": ["Banjul", "Central River", "Lower River", "North Bank", "Upper River", "Western"]
        }, {
            "name": "Georgia",
            "states": [
                "Abkhazia", "Ajaria", "Guria", "Imereti", "Kakheti", "Kvemo Kartli", "Mtskheta-Mtianeti",
                "Racha-Lechkhumi and Kvemo Svaneti", "Samegrelo and Zemo Svaneti", "Samtskhe-Javakheti",
                "Shida Kartli", "T'bilisi"
            ]
        }, {
            "name": "Germany",
            "states": [
                "Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse",
                "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rheinland-Pfalz", "Saarland",
                "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"
            ]
        }, {
            "name": "Ghana",
            "states": [
                "Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East",
                "Upper West", "Volta", "Western"
            ]
        }, { "name": "Gibraltar" }, {
            "name": "Greece",
            "states": [
                "Attica", "Central Greece", "Central Macedonia", "Crete", "East Macedonia and Thrace", "Epirus",
                "Ionian Islands", "Mount Athos", "North Aegean", "Peloponnese", "South Aegean", "Thessaly",
                "West Greece", "West Macedonia"
            ]
        }, { "name": "Greenland", "states": ["Kujalleq", "Qaasuitsup", "Qeqqata", "Sermersooq"] },
        {
            "name": "Grenada",
            "states": [
                "Carriacou and Petite Martinique", "Saint Andrew", "Saint David", "Saint George", "Saint John",
                "Saint Mark", "Saint Patrick"
            ]
        }, { "name": "Guadeloupe", "states": ["Guadeloupe"] },
        {
            "name": "Guam",
            "states": [
                "Agana Heights", "Agat", "Asan", "Barrigada", "Chalan Pago-Ordot", "Dededo", "Hagatna", "Inarajan",
                "Mangilao", "Merizo", "Mongmong-Toto-Maite", "Piti", "Santa Rita", "Sinajana", "Talofofo",
                "Tamuning", "Umatac", "Yigo", "Yona"
            ]
        }, {
            "name": "Guatemala",
            "states": [
                "Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla",
                "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Petén", "Quetzaltenango", "Quiché",
                "Retalhuleu", "Sacatepéquez", "San Marcos", "Santa Rosa", "Sololá", "Suchitepeque", "Totonicapán",
                "Zacapa"
            ]
        }, {
            "name": "Guinea",
            "states": ["Boke", "Conakry", "Faranah", "Kankan", "Kindia", "Labe", "Mamou", "Nzerekore"]
        }, {
            "name": "Guinea-Bissau",
            "states": [
                "Bafatá", "Biombo", "Bissau", "Bolama and Bijagos", "Cacheu", "Gabú", "Oio", "Quinara", "Tombali"
            ]
        }, {
            "name": "Guyana",
            "states": [
                "Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne",
                "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni",
                "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"
            ]
        }, {
            "name": "Haiti",
            "states": [
                "Artibonite", "Centre", "GrandʼAnse", "Nippes", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud",
                "Sud-Est"
            ]
        }, { "name": "Heard Island and McDonald Islands" }, {
            "name": "Honduras",
            "states": [
                "Atlántida", "Bay Islands", "Choluteca", "Colón", "Comayagua", "Copán", "Cortés", "El Paraíso",
                "Francisco Morazán", "Gracias a Dios", "Intibucá", "La Paz", "Lempira", "Ocotepeque", "Olancho",
                "Santa Bárbara", "Valle", "Yoro"
            ]
        }, {
            "name": "Hong Kong",
            "states": [
                "Central and Western", "Eastern", "Islands", "Kowloon City", "Kwai Tsing", "Kwun Tong", "North",
                "Sai Kung", "Sha Tin", "Sham Shui Po", "Southern", "Tai Po", "Tsuen Wan", "Tuen Mun", "Wan Chai",
                "Wong Tai Sin", "Yau Tsim Mong", "Yuen Long"
            ]
        }, {
            "name": "Hungary",
            "states": [
                "Baranya", "Bekes", "Borsod-Abaúj-Zemplén", "Budapest", "Bács-Kiskun", "Csongrád", "Fejér",
                "Győr-Moson-Sopron", "Hajdú-Bihar", "Heves", "Jász-Nagykun-Szolnok", "Komárom-Esztergom", "Nógrád",
                "Pest", "Somogy", "Szabolcs-Szatmár-Bereg", "Tolna", "Vas", "Veszprém", "Zala"
            ]
        }, {
            "name": "Iceland",
            "states": [
                "Capital Region", "East", "Northeast", "Northwest", "South", "Southern Peninsula", "West",
                "Westfjords"
            ]
        }, {
            "name": "India",
            "states": [
                "Andaman and Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh",
                "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Goa", "Gujarat", "Haryana",
                "Himachal Pradesh", "Jharkhand", "Karnataka", "Kashmir", "Kerala", "Laccadives", "Madhya Pradesh",
                "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "NCT", "Nagaland", "Odisha", "Pondicherry",
                "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
                "Uttarakhand", "West Bengal"
            ]
        }, {
            "name": "Indonesia",
            "states": [
                "Aceh", "Bali", "Bangka–Belitung Islands", "Banten", "Bengkulu", "Central Java",
                "Central Kalimantan", "Central Sulawesi", "East Java", "East Kalimantan", "East Nusa Tenggara",
                "Gorontalo", "Jakarta", "Jambi", "Lampung", "Maluku", "North Kalimantan", "North Maluku",
                "North Sulawesi", "North Sumatra", "Papua", "Riau", "Riau Islands", "South Kalimantan",
                "South Sulawesi", "South Sumatra", "Southeast Sulawesi", "West Java", "West Kalimantan",
                "West Nusa Tenggara", "West Papua", "West Sulawesi", "West Sumatra", "Yogyakarta"
            ]
        }, {
            "name": "Iran",
            "states": [
                "Alborz", "Ardabīl", "Bushehr", "Chaharmahal and Bakhtiari", "East Azerbaijan", "Fars", "Golestān",
                "Gīlān", "Hamadān", "Hormozgan", "Isfahan", "Kerman", "Kermānshāh", "Khorāsān-e Jonūbī",
                "Khorāsān-e Shomālī", "Khuzestan", "Kohgīlūyeh va Būyer Aḩmad", "Kordestān", "Lorestān", "Markazi",
                "Māzandarān", "Qazvīn", "Qom", "Razavi Khorasan", "Semnān", "Sistan and Baluchestan", "Tehrān",
                "Yazd", "Zanjan", "Āz̄ārbāyjān-e Gharbī", "Īlām"
            ]
        }, {
            "name": "Iraq",
            "states": [
                "Al Muthanná", "Al Qādisīyah", "An Najaf", "Anbar", "Arbīl", "As Sulaymānīyah", "Baghdad", "Basra",
                "Bābil", "Dahūk", "Dhi Qar", "Diyālá", "Karbalāʼ", "Kirkuk", "Maysan", "Nīnawá", "Salah ad Din",
                "Wāsiţ"
            ]
        }, { "name": "Ireland", "states": ["Connaught", "Leinster", "Munster", "Ulster"] },
        {
            "name": "Israel",
            "states": [
                "Central District", "Haifa", "Jerusalem", "Northern District", "Southern District", "Tel Aviv"
            ]
        }, {
            "name": "Italy",
            "states": [
                "Abruzzo", "Aosta Valley", "Apulia", "Basilicate", "Calabria", "Campania", "Emilia-Romagna",
                "Friuli Venezia Giulia", "Latium", "Liguria", "Lombardy", "Molise", "Piedmont", "Sardinia",
                "Sicily", "The Marches", "Trentino-Alto Adige", "Tuscany", "Umbria", "Veneto"
            ]
        }, {
            "name": "Ivory Coast",
            "states": [
                "Abidjan", "Bas-Sassandra", "Comoé", "Denguélé", "Gôh-Djiboua", "Lacs", "Lagunes", "Montagnes",
                "Sassandra-Marahoué", "Savanes", "Vallée du Bandama", "Woroba", "Yamoussoukro Autonomous District",
                "Zanzan"
            ]
        }, {
            "name": "Jamaica",
            "states": [
                "Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Catherine", "St Ann",
                "St. Andrew", "St. Elizabeth", "St. James", "St. Mary", "St. Thomas", "Trelawny", "Westmoreland"
            ]
        }, {
            "name": "Japan",
            "states": [
                "Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma",
                "Hiroshima", "Hokkaido", "Hyōgo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa",
                "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata",
                "Okayama", "Okinawa", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima",
                "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi", "Ōsaka"
            ]
        }, { "name": "Jervis Bay Territory" }, {
            "name": "Jordan",
            "states": [
                "Ajloun", "Amman", "Aqaba", "Balqa", "Irbid", "Jerash", "Karak", "Madaba", "Mafraq", "Ma’an",
                "Tafielah", "Zarqa"
            ]
        }, {
            "name": "Kazakhstan",
            "states": [
                "Almaty Oblysy", "Almaty Qalasy", "Aqmola", "Aqtöbe", "Astana Qalasy", "Atyraū", "Baikonur",
                "Batys Qazaqstan", "East Kazakhstan", "Mangghystaū", "Ongtüstik Qazaqstan", "Pavlodar",
                "Qaraghandy", "Qostanay", "Qyzylorda", "Soltüstik Qazaqstan", "Zhambyl"
            ]
        }, {
            "name": "Kenya",
            "states": [
                "Baringo", "Bomet", "Bungoma", "Busia", "Elegeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo",
                "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui",
                "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori",
                "Mombasa", "Murang'A", "Nairobi Area", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri",
                "Samburu", "Siaya", "Taita Taveta", "Tana River", "Tharaka - Nithi", "Trans Nzoia", "Turkana",
                "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
            ]
        }, { "name": "Kiribati", "states": ["Gilbert Islands", "Line Islands", "Phoenix Islands"] },
        { "name": "Kosovo", "states": ["Ferizaj", "Gjakova", "Gjilan", "Mitrovica", "Pec", "Pristina", "Prizren"] },
        {
            "name": "Kuwait",
            "states": ["Al Asimah", "Al Aḩmadī", "Al Farwaniyah", "Al Jahrāʼ", "Hawalli", "Mubārak al Kabīr"]
        }, {
            "name": "Kyrgyzstan",
            "states": ["Batken", "Bishkek", "Chüy", "Issyk-Kul", "Jalal-Abad", "Naryn", "Osh", "Osh City", "Talas"]
        }, {
            "name": "Laos",
            "states": [
                "Attapu", "Bokeo", "Bolikhamsai", "Champasak", "Houaphan", "Khammouan", "Louangphabang",
                "Loungnamtha", "Oudômxai", "Phôngsali", "Salavan", "Savannahkhét", "Vientiane",
                "Vientiane Prefecture", "Xiagnabouli", "Xiangkhoang", "Xékong"
            ]
        }, {
            "name": "Latvia",
            "states": [
                "Aglona", "Aizkraukles Rajons", "Aizpute", "Aknīste", "Aloja", "Alsunga", "Alūksnes Novads",
                "Amatas", "Apes", "Auces", "Babīte", "Baldone", "Baltinava", "Balvu Rajons", "Bauskas Rajons",
                "Beverīna", "Brocēni", "Burtnieki", "Carnikava", "Cesvaine", "Cibla", "Cēsu Rajons", "Dagda",
                "Daugavpils", "Daugavpils municipality", "Dobeles Rajons", "Dundaga", "Durbe", "Engure", "Garkalne",
                "Grobiņa", "Gulbenes Rajons", "Ikšķile", "Ilūkste", "Inčukalns", "Jaunjelgava", "Jaunpiebalga",
                "Jaunpils", "Jelgava", "Jelgavas Rajons", "Jēkabpils", "Jēkabpils Municipality", "Jūrmala",
                "Kandava", "Karsava", "Kocēni", "Koknese", "Krimulda", "Krustpils", "Krāslavas Rajons",
                "Kuldīgas Rajons", "Lecava", "Lielvārde", "Liepāja", "Limbažu Rajons", "Lubāna", "Ludzas Rajons",
                "Līgatne", "Līvāni", "Madonas Rajons", "Mazsalaca", "Mesraga", "Mālpils", "Mārupe", "Naukšēni",
                "Nereta", "Nīca", "Ogre", "Olaine", "Ozolnieku", "Preiļu Rajons", "Priekule", "Priekuļi",
                "Pārgaujas", "Pāvilostas", "Pļaviņu", "Raunas", "Riebiņu", "Riga", "Rojas", "Ropažu", "Rucavas",
                "Rugāju", "Rundāles", "Rēzekne", "Rēzeknes Rajons", "Rūjienas", "Salacgrīvas", "Salas", "Salaspils",
                "Saldus Rajons", "Saulkrastu", "Sigulda", "Skrunda", "Skrīveri", "Smiltene", "Stopiņi", "Strenči",
                "Sēja", "Talsu Rajons", "Tukuma Rajons", "Tērvete", "Vaiņode", "Valkas Rajons", "Valmieras Rajons",
                "Varakļāni", "Vecpiebalga", "Vecumnieki", "Ventspils", "Ventspils Rajons", "Viesīte", "Vilanu",
                "Viļaka", "Vārkava", "Zilupes", "Ādaži", "Ērgļi", "Ķegums", "Ķekava"
            ]
        }, {
            "name": "Lebanon",
            "states": [
                "Aakkâr", "Baalbek-Hermel", "Beyrouth", "Béqaa", "Liban-Nord", "Mont-Liban", "Nabatîyé",
                "South Governorate"
            ]
        }, {
            "name": "Lesotho",
            "states": [
                "Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohaleʼs Hoek", "Mokhotlong",
                "Qachaʼs Nek", "Quthing", "Thaba-Tseka"
            ]
        }, {
            "name": "Liberia",
            "states": [
                "Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa",
                "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"
            ]
        }, {
            "name": "Libya",
            "states": [
                "Al Jabal al Akhḑar", "Al Jufrah", "Al Kufrah", "Al Marj", "Al Marqab", "An Nuqāţ al Khams",
                "Ash Shāţiʼ", "Az Zāwiyah", "Banghāzī", "Darnah", "Jabal al Gharbi", "Mişrātah", "Murzuq", "Sabhā",
                "Sha‘bīyat Ghāt", "Sha‘bīyat Nālūt", "Sha‘bīyat Wādī al Ḩayāt", "Sha‘bīyat al Buţnān",
                "Sha‘bīyat al Jafārah", "Sha‘bīyat al Wāḩāt", "Surt", "Tripoli"
            ]
        }, {
            "name": "Liechtenstein",
            "states": [
                "Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen",
                "Triesenberg", "Vaduz"
            ]
        }, {
            "name": "Lithuania",
            "states": [
                "Alytus", "Kaunas", "Klaipėda County", "Marijampolė County", "Panevėžys", "Telšiai County", "Utena",
                "Vilnius"
            ]
        }, { "name": "Luxembourg", "states": ["Diekirch", "Grevenmacher", "Luxembourg"] }, { "name": "Macao" },
        {
            "name": "Macedonia",
            "states": [
                "Aerodrom", "Aračinovo", "Berovo", "Bitola", "Bogdanci", "Bogovinje", "Bosilovo", "Brvenica",
                "Butel", "Centar", "Centar Župa", "Debar", "Debarca", "Delčevo", "Demir Hisar", "Demir Kapija",
                "Dojran", "Dolneni", "Drugovo", "Gazi Baba", "Gevgelija", "Gostivar", "Gradsko", "Ilinden",
                "Jegunovce", "Karbinci", "Karpoš", "Kavadarci", "Kisela Voda", "Kičevo", "Konče", "Kočani",
                "Kratovo", "Kriva Palanka", "Krivogaštani", "Kruševo", "Kumanovo", "Lozovo", "Makedonska Kamenica",
                "Makedonski Brod", "Mavrovo and Rostuša", "Mogila", "Negotino", "Novaci", "Novo Selo", "Ohrid",
                "Opstina Gjorce Petrov", "Opstina Lipkovo", "Opstina Rankovce", "Oslomej", "Pehčevo", "Petrovec",
                "Plasnica", "Prilep", "Probištip", "Radoviš", "Resen", "Rosoman", "Saraj", "Sopište",
                "Staro Nagoričane", "Struga", "Strumica", "Studeničani", "Sveti Nikole", "Tearce", "Tetovo",
                "Valandovo", "Vasilevo", "Veles", "Vevčani", "Vinica", "Vraneštica", "Vrapčište", "Zajas",
                "Zelenikovo", "Zrnovci", "Čair", "Čaška Municipality", "Češinovo-Obleševo", "Čučer-Sandevo", "Štip",
                "Šuto Orizari", "Želino"
            ]
        }, {
            "name": "Madagascar",
            "states": [
                "Alaotra Mangoro", "Amoron'i Mania", "Analamanga", "Analanjirofo", "Androy", "Anosy",
                "Atsimo-Andrefana", "Atsimo-Atsinanana", "Atsinanana", "Betsiboka", "Boeny", "Bongolava", "Diana",
                "Ihorombe", "Itasy", "Melaky", "Menabe", "Sava", "Sofia", "Upper Matsiatra", "Vakinankaratra",
                "Vatovavy Fitovinany"
            ]
        }, { "name": "Malawi", "states": ["Central Region", "Northern Region", "Southern Region"] },
        {
            "name": "Malaysia",
            "states": [
                "Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Melaka", "Negeri Sembilan", "Pahang",
                "Penang", "Perak", "Perlis", "Putrajaya", "Sabah", "Sarawak", "Selangor", "Terengganu"
            ]
        }, {
            "name": "Maldives",
            "states": [
                "Baa Atholhu", "Dhaalu Atholhu", "Faafu Atholhu", "Gaafu Alifu Atholhu", "Gaafu Dhaalu Atholhu",
                "Gnyaviyani Atoll", "Haa Alifu Atholhu", "Haa Dhaalu Atholhu", "Kaafu Atoll", "Laamu",
                "Lhaviyani Atholhu", "Meemu Atholhu", "Noonu Atoll", "Northern Ari Atoll", "Raa Atoll", "Seenu",
                "Shaviyani Atholhu", "Southern Ari Atoll", "Thaa Atholhu", "Vaavu Atholhu"
            ]
        }, {
            "name": "Mali",
            "states": ["Bamako", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Sikasso", "Ségou", "Tombouctou"]
        }, {
            "name": "Malta",
            "states": [
                "Attard", "Balzan", "Birkirkara", "Birżebbuġa", "Bormla", "Dingli", "Għajnsielem",
                "Il-Belt Valletta", "Il-Birgu", "Il-Fgura", "Il-Fontana", "Il-Furjana", "Il-Gudja", "Il-Gżira",
                "Il-Kalkara", "Il-Marsa", "Il-Mellieħa", "Il-Mosta", "Il-Munxar", "Il-Qala", "Il-Qrendi",
                "Il-Ħamrun", "In-Nadur", "In-Naxxar", "Ir-Rabat", "Is-Siġġiewi", "Is-Swieqi", "Ix-Xagħra",
                "Ix-Xewkija", "Ix-Xgħajra", "Iż-Żebbuġ", "Iż-Żejtun", "Iż-Żurrieq", "Kirkop", "L-Għarb", "L-Għasri",
                "L-Iklin", "L-Imdina", "L-Imqabba", "L-Imsida", "L-Imtarfa", "L-Imġarr", "L-Isla", "Lija", "Luqa",
                "Marsaskala", "Marsaxlokk", "Paola", "Pembroke", "Qormi", "Safi", "Saint John", "Saint Julian",
                "Saint Lawrence", "Saint Lucia", "Saint Paul’s Bay", "Saint Venera", "Sannat", "Tal-Pietà",
                "Tarxien", "Tas-Sliema", "Ta’ Kerċem", "Ta’ Xbiex", "Victoria", "Ħal Għargħur", "Ħal Għaxaq",
                "Ħaż-Żabbar", "Ħaż-Żebbuġ"
            ]
        }, {
            "name": "Marshall Islands",
            "states": [
                "Ailinginae Atoll", "Ailinglaplap Atoll", "Ailuk Atoll", "Arno Atoll", "Aur Atoll", "Bikar Atoll",
                "Bikini Atoll", "Bokak Atoll", "Ebon Atoll", "Enewetak Atoll", "Erikub Atoll", "Jabat Island",
                "Jaluit Atoll", "Jemo Island", "Kili Island", "Kwajalein Atoll", "Lae Atoll", "Lib Island",
                "Likiep Atoll", "Majuro Atoll", "Maloelap Atoll", "Mejit Island", "Mili Atoll", "Namdrik Atoll",
                "Namu Atoll", "Rongelap Atoll", "Rongrik Atoll", "Taka Atoll", "Ujae Atoll", "Ujelang",
                "Utrik Atoll", "Wotho Atoll", "Wotje Atoll"
            ]
        }, { "name": "Martinique", "states": ["Martinique"] },
        {
            "name": "Mauritania",
            "states": [
                "Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh El Gharbi",
                "Hodh ech Chargui", "Inchiri", "Nouakchott", "Tagant", "Tiris Zemmour", "Trarza"
            ]
        }, {
            "name": "Mauritius",
            "states": [
                "Agalega Islands", "Black River", "Cargados Carajos", "Flacq", "Grand Port", "Moka",
                "Pamplemousses", "Plaines Wilhems", "Port Louis", "Rivière du Rempart", "Rodrigues", "Savanne"
            ]
        }, {
            "name": "Mayotte",
            "states": [
                "Acoua", "Bandraboua", "Bandrele", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi",
                "Kani-Kéli", "Koungou", "M'Tsangamouji", "Mamoudzou", "Mtsamboro", "Ouangani", "Pamandzi", "Sada",
                "Tsingoni"
            ]
        }, {
            "name": "Mexico",
            "states": [
                "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua",
                "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico City",
                "Michoacán", "Morelos", "México", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro",
                "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala",
                "Veracruz", "Yucatán", "Zacatecas"
            ]
        }, { "name": "Micronesia", "states": ["Chuuk", "Kosrae", "Pohnpei", "Yap"] },
        {
            "name": "Moldova",
            "states": [
                "Anenii Noi", "Basarabeasca", "Bender", "Briceni", "Bălţi", "Cahul", "Cantemir", "Chişinău",
                "Cimişlia", "Criuleni", "Călăraşi", "Căuşeni", "Donduşeni", "Drochia", "Dubăsari", "Floreşti",
                "Făleşti", "Glodeni", "Găgăuzia", "Hînceşti", "Laloveni", "Leova", "Nisporeni", "Orhei",
                "Raionul Edineţ", "Raionul Ocniţa", "Raionul Soroca", "Rezina", "Rîşcani", "Strășeni",
                "Stînga Nistrului", "Sîngerei", "Taraclia", "Teleneşti", "Ungheni", "Şoldăneşti", "Ştefan-Vodă"
            ]
        }, { "name": "Monaco", "states": [""] }, {
            "name": "Mongolia",
            "states": [
                "Arhangay", "Bayan-Ölgiy", "Bayanhongor", "Bulgan", "Central Aimak", "Darhan Uul", "Dzabkhan",
                "East Aimak", "East Gobi Aymag", "Govĭ-Altay", "Govĭ-Sumber", "Hentiy", "Hovd", "Hövsgöl",
                "Middle Govĭ", "Orhon", "Selenge", "Sühbaatar", "Ulaanbaatar", "Uvs", "Ömnögovĭ", "Övörhangay"
            ]
        }, {
            "name": "Montenegro",
            "states": [
                "Andrijevica", "Bar", "Berane", "Bijelo Polje", "Budva", "Cetinje", "Danilovgrad", "Herceg Novi",
                "Kotor", "Mojkovac", "Opština Kolašin", "Opština Nikšić", "Opština Plav", "Opština Plužine",
                "Opština Rožaje", "Opština Šavnik", "Opština Žabljak", "Pljevlja", "Podgorica", "Tivat", "Ulcinj"
            ]
        }, { "name": "Montserrat", "states": ["Saint Anthony", "Saint Georges", "Saint Peter"] },
        {
            "name": "Morocco",
            "states": [
                "Béni Mellal-Khénifra", "Casablanca-Settat", "Dakhla-Oued Ed-Dahab", "Drâa-Tafilalet", "Fès-Meknès",
                "Guelmim-Oued Noun", "Laâyoune-Sakia El Hamra", "Marrakesh-Safi", "Oriental", "Rabat-Salé-Kénitra",
                "Souss-Massa", "Tanger-Tetouan-Al Hoceima"
            ]
        }, {
            "name": "Mozambique",
            "states": [
                "Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Maputo City", "Nampula", "Niassa",
                "Sofala", "Tete", "Zambézia"
            ]
        }, {
            "name": "Myanmar [Burma]",
            "states": [
                "Ayeyarwady", "Bago", "Chin", "Kachin", "Kayah", "Kayin", "Magway", "Mandalay", "Mon",
                "Nay Pyi Taw", "Rakhine", "Sagain", "Shan", "Tanintharyi", "Yangon"
            ]
        }, {
            "name": "Namibia",
            "states": [
                "Erongo", "Hardap", "Karas", "Kavango East", "Kavango West", "Khomas", "Kunene", "Ohangwena",
                "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi"
            ]
        }, {
            "name": "Nauru",
            "states": [
                "Aiwo", "Anabar", "Anetan", "Anibare", "Baiti", "Boe", "Buada", "Denigomodu", "Ewa", "Ijuw",
                "Meneng", "Nibok", "Uaboe", "Yaren"
            ]
        }, {
            "name": "Nepal",
            "states": ["", "Central Region", "Eastern Region", "Far Western", "Mid Western", "Western Region"]
        }, {
            "name": "Netherlands",
            "states": [
                "Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "North Brabant",
                "North Holland", "Overijssel", "South Holland", "Utrecht", "Zeeland"
            ]
        }, { "name": "New Caledonia", "states": ["Loyalty Islands", "North Province", "South Province"] },
        {
            "name": "New Zealand",
            "states": [
                "Auckland", "Bay of Plenty", "Canterbury", "Chatham Islands", "Gisborne", "Hawke's Bay",
                "Manawatu-Wanganui", "Marlborough", "Nelson", "Northland", "Otago", "Southland", "Taranaki",
                "Tasman", "Waikato", "Wellington", "West Coast"
            ]
        }, {
            "name": "Nicaragua",
            "states": [
                "Atlántico Norte (RAAN)", "Atlántico Sur", "Boaco", "Carazo", "Chinandega", "Chontales", "Estelí",
                "Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Rivas",
                "Río San Juan"
            ]
        }, {
            "name": "Niger",
            "states": ["Agadez", "Diffa", "Dosso", "Maradi", "Niamey", "Tahoua", "Tillabéri", "Zinder"]
        }, {
            "name": "Nigeria",
            "states": [
                "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
                "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano",
                "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
                "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
            ]
        }, { "name": "Niue" }, { "name": "Norfolk Island" }, {
            "name": "North Korea",
            "states": [
                "Chagang-do", "Hamgyŏng-bukto", "Hamgyŏng-namdo", "Hwanghae-bukto", "Hwanghae-namdo", "Kangwŏn-do",
                "P'yŏngan-bukto", "P'yŏngan-namdo", "Pyongyang", "Rason", "Yanggang-do"
            ]
        }, { "name": "Northern Mariana Islands", "states": ["Northern Islands", "Rota", "Saipan", "Tinian"] },
        {
            "name": "Norway",
            "states": [
                "Akershus", "Aust-Agder", "Buskerud", "Finnmark", "Hedmark", "Hordaland", "Møre og Romsdal",
                "Nord-Trøndelag", "Nordland", "Oppland", "Oslo", "Rogaland", "Sogn og Fjordane", "Sør-Trøndelag",
                "Telemark", "Troms", "Vest-Agder", "Vestfold", "Østfold"
            ]
        }, {
            "name": "Oman",
            "states": [
                "Al Batinah North", "Al Batinah South", "Al Buraimi", "Al Wusţá", "Az̧ Z̧āhirah", "Dhofar",
                "Musandam", "Northeastern Governorate", "Southeastern Governorate"
            ]
        }, {
            "name": "Pakistan",
            "states": [
                "Azad Kashmir", "Balochistān", "FATA", "Gilgit-Baltistan", "Islāmābād", "Khyber Pakhtunkhwa",
                "Punjab", "Sindh"
            ]
        }, {
            "name": "Palau",
            "states": [
                "Aimeliik", "Airai", "Angaur", "Hatohobei", "Kayangel", "Koror", "Melekeok", "Ngaraard",
                "Ngarchelong", "Ngardmau", "Ngaremlengui", "Ngatpang", "Ngchesar", "Ngiwal", "Peleliu", "Sonsorol"
            ]
        }, { "name": "Palestine", "states": ["Gaza Strip", "West Bank"] },
        {
            "name": "Panama",
            "states": [
                "Bocas del Toro", "Chiriquí", "Coclé", "Colón", "Darién", "Emberá", "Guna Yala", "Herrera",
                "Los Santos", "Ngöbe-Buglé", "Panamá", "Panamá Oeste", "Veraguas"
            ]
        }, {
            "name": "Papua New Guinea",
            "states": [
                "Bougainville", "Central Province", "Chimbu", "East New Britain", "East Sepik", "Eastern Highlands",
                "Enga", "Gulf", "Hela", "Jiwaka", "Madang", "Manus", "Milne Bay", "Morobe", "National Capital",
                "New Ireland", "Northern Province", "Sandaun", "Southern Highlands", "West New Britain",
                "Western Highlands", "Western Province"
            ]
        }, {
            "name": "Paraguay",
            "states": [
                "Alto Paraguay", "Alto Paraná", "Amambay", "Asunción", "Boquerón", "Caaguazú", "Caazapá",
                "Canindeyú", "Central", "Concepción", "Cordillera", "Guairá", "Itapúa", "Misiones", "Paraguarí",
                "Presidente Hayes", "San Pedro", "Ñeembucú"
            ]
        }, {
            "name": "Peru",
            "states": [
                "Amazonas", "Ancash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco",
                "Huancavelica", "Huanuco", "Ica", "Junin", "La Libertad", "Lambayeque", "Lima", "Lima region",
                "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes",
                "Ucayali"
            ]
        }, {
            "name": "Philippines",
            "states": [
                "ARMM", "Bicol", "Cagayan Valley", "Calabarzon", "Caraga", "Central Luzon", "Central Visayas",
                "Cordillera", "Davao", "Eastern Visayas", "Ilocos", "Metro Manila", "Mimaropa",
                "Negros Island Region", "Northern Mindanao", "Soccsksargen", "Western Visayas",
                "Zamboanga Peninsula"
            ]
        }, { "name": "Pitcairn Islands" }, {
            "name": "Poland",
            "states": [
                "Greater Poland", "Kujawsko-Pomorskie", "Lesser Poland Voivodeship", "Lower Silesia", "Lublin",
                "Lubusz", "Mazovia", "Opole Voivodeship", "Podlasie", "Pomerania", "Silesian Voivodeship",
                "Subcarpathian Voivodeship", "Warmia-Masuria", "West Pomerania", "Łódź Voivodeship",
                "Świętokrzyskie"
            ]
        }, {
            "name": "Portugal",
            "states": [
                "Aveiro", "Azores", "Beja", "Braga", "Bragança", "Castelo Branco", "Coimbra", "Faro", "Guarda",
                "Leiria", "Lisbon", "Madeira", "Portalegre", "Porto", "Santarém", "Setúbal", "Viana do Castelo",
                "Vila Real", "Viseu", "Évora"
            ]
        }, {
            "name": "Puerto Rico",
            "states": [
                "Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Arecibo", "Arroyo", "Añasco",
                "Barceloneta", "Barranquitas", "Bayamón", "Cabo Rojo", "Caguas", "Camuy", "Canovanas", "Carolina",
                "Catano", "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerio", "Corozal", "Culebra", "Dorado",
                "Fajardo", "Florida", "Guanica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo",
                "Hormigueros", "Humacao", "Isabela", "Juana Diaz", "Lajas", "Lares", "Las Marias", "Las Piedras",
                "Loiza", "Luquillo", "Manati", "Maricao", "Maunabo", "Mayaguez", "Moca", "Morovis",
                "Municipio de Jayuya", "Municipio de Juncos", "Naguabo", "Naranjito", "Orocovis", "Patillas",
                "Penuelas", "Ponce", "Quebradillas", "Rincon", "Rio Grande", "Sabana Grande", "Salinas",
                "San German", "San Juan", "San Lorenzo", "San Sebastian", "Santa Isabel Municipio", "Toa Alta",
                "Toa Baja", "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa",
                "Yauco"
            ]
        }, {
            "name": "Qatar",
            "states": [
                "Al Khawr", "Al Wakrah", "Baladīyat Umm Şalāl", "Baladīyat ad Dawḩah", "Baladīyat ar Rayyān",
                "Baladīyat az̧ Z̧a‘āyin", "Madīnat ash Shamāl"
            ]
        }, {
            "name": "Republic of the Congo",
            "states": [
                "Bouenza", "Brazzaville", "Cuvette", "Cuvette-Ouest", "Kouilou", "Likouala", "Lékoumou", "Niari",
                "Plateaux", "Pointe-Noire", "Pool", "Sangha"
            ]
        }, {
            "name": "Romania",
            "states": [
                "Alba", "Arad", "Argeş", "Bacău", "Bihor", "Bistriţa-Năsăud", "Botoşani", "Braşov", "Brăila",
                "Bucureşti", "Buzău", "Caraş-Severin", "Cluj", "Constanța", "Covasna", "Călăraşi", "Dolj",
                "Dâmboviţa", "Galaţi", "Giurgiu", "Gorj", "Harghita", "Hunedoara", "Ialomiţa", "Iaşi", "Ilfov",
                "Maramureş", "Mehedinţi", "Mureş", "Neamţ", "Olt", "Prahova", "Satu Mare", "Sibiu", "Suceava",
                "Sălaj", "Teleorman", "Timiş", "Tulcea", "Vaslui", "Vrancea", "Vâlcea"
            ]
        }, {
            "name": "Russia",
            "states": [
                "Adygeya", "Altai", "Altai Krai", "Amur", "Arkhangelskaya", "Astrakhan", "Bashkortostan",
                "Belgorod", "Brjansk", "Chechnya", "Chelyabinsk", "Chukot", "Chukotka", "Chuvashia", "Dagestan",
                "Ingushetiya", "Irkutsk", "Ivanovo", "Jaroslavl", "Jewish Autonomous Oblast", "Kabardino-Balkariya",
                "Kaliningrad", "Kalmykiya", "Kaluga", "Kamtsjatka", "Karachayevo-Cherkesiya", "Karelia", "Kemerovo",
                "Khabarovsk", "Khakasiya", "Khanty-Mansia", "Kirov", "Komi", "Kostroma", "Krasnodarskiy",
                "Krasnoyarskiy", "Kurgan", "Kursk", "Leningradskaya Oblast'", "Lipetsk", "Magadan", "Mariy-El",
                "Mordoviya", "Moscow", "Moscow Oblast", "Murmansk", "Nenets", "Nizjnij Novgorod", "North Ossetia",
                "Novgorod", "Novosibirsk", "Omsk", "Orenburg", "Orjol", "Penza", "Perm", "Primorskiy", "Pskov",
                "Republic of Tyva", "Respublika Buryatiya", "Rjazan", "Rostov", "Sakhalin", "Samara", "Saratov",
                "Smolensk", "St.-Petersburg", "Stavropol'skiy", "Sverdlovsk", "Tambov", "Tatarstan", "Tomsk",
                "Transbaikal Territory", "Tula", "Tverskaya", "Tyumenskaya", "Udmurtiya", "Ulyanovsk", "Vladimir",
                "Yamalo-Nenets"
            ]
        }, {
            "name": "Rwanda",
            "states": ["Eastern Province", "Kigali", "Northern Province", "Southern Province", "Western Province"]
        }, { "name": "Réunion", "states": ["Réunion"] }, { "name": "Saint Barthélemy" },
        { "name": "Saint Helena", "states": ["Ascension", "Saint Helena", "Tristan da Cunha"] },
        {
            "name": "Saint Kitts and Nevis",
            "states": [
                "Christ Church Nichola Town", "Middle Island", "Saint Anne Sandy Point", "Saint George Basseterre",
                "Saint George Gingerland", "Saint James Windwa", "Saint John Capesterre", "Saint John Figtree",
                "Saint Mary Cayon", "Saint Paul Capesterre", "Saint Paul Charlestown", "Saint Peter Basseterre",
                "Saint Thomas Lowland", "Trinity Palmetto Point"
            ]
        }, {
            "name": "Saint Lucia",
            "states": [
                "Anse-la-Raye", "Canaries", "Castries", "Choiseul", "Dennery", "Gros-Islet", "Laborie", "Micoud",
                "Soufrière", "Vieux-Fort"
            ]
        }, { "name": "Saint Martin" }, {
            "name": "Saint Pierre and Miquelon",
            "states": ["Miquelon-Langlade", "Saint-Pierre"]
        }, {
            "name": "Saint Vincent and the Grenadines",
            "states": ["Charlotte", "Grenadines", "Saint Andrew", "Saint David", "Saint George", "Saint Patrick"]
        }, {
            "name": "Samoa",
            "states": [
                "A'ana", "Aiga-i-le-Tai", "Atua", "Fa‘asaleleaga", "Gagaifomauga", "Gaga‘emauga", "Palauli",
                "Satupa‘itea", "Tuamasaga", "Vaisigano", "Va‘a-o-Fonoti"
            ]
        }, {
            "name": "San Marino",
            "states": [
                "Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino",
                "San Marino", "Serravalle"
            ]
        }, {
            "name": "Saudi Arabia",
            "states": [
                "'Asir", "Al Bahah", "Al Jawf", "Al Madīnah al Munawwarah", "Al-Qassim", "Ar Riyāḑ",
                "Eastern Province", "Jizan", "Makkah", "Najran", "Northern Borders", "Tabuk", "Ḩāʼil"
            ]
        }, {
            "name": "Senegal",
            "states": [
                "Dakar", "Diourbel", "Fatick", "Kaffrine", "Kaolack", "Kolda", "Kédougou", "Louga", "Matam",
                "Saint-Louis", "Sédhiou", "Tambacounda", "Thiès", "Ziguinchor"
            ]
        }, { "name": "Serbia", "states": ["Central Serbia", "Vojvodina"] },
        {
            "name": "Seychelles",
            "states": [
                "Anse Boileau", "Anse Etoile", "Anse Royale", "Anse-aux-Pins", "Au Cap", "Baie Lazare",
                "Baie Sainte Anne", "Beau Vallon", "Bel Air", "Bel Ombre", "Cascade", "English River", "Glacis",
                "Grand Anse Mahe", "Grand Anse Praslin", "Inner Islands", "Les Mamelles", "Mont Buxton",
                "Mont Fleuri", "Plaisance", "Pointe Larue", "Port Glaud", "Roche Caiman", "Saint Louis", "Takamaka"
            ]
        }, {
            "name": "Sierra Leone",
            "states": ["Eastern Province", "Northern Province", "Southern Province", "Western Area"]
        }, {
            "name": "Singapore",
            "states": ["Central Singapore", "North East", "North West", "South East", "South West"]
        }, { "name": "Sint Maarten" }, {
            "name": "Slovakia",
            "states": [
                "Banskobystrický", "Bratislavský", "Košický", "Nitriansky", "Prešovský", "Trenčiansky", "Trnavský",
                "Žilinský"
            ]
        }, {
            "name": "Slovenia",
            "states": [
                "Apače", "Beltinci", "Benedikt", "Bistrica ob Sotli", "Bled", "Bloke", "Bohinj", "Borovnica",
                "Bovec", "Braslovče", "Brda", "Brezovica", "Cankova", "Celje", "Cerklje na Gorenjskem", "Cerknica",
                "Cerkno", "Cerkvenjak", "Cirkulane", "Comune di Ancarano", "Destrnik", "Divača", "Dobje",
                "Dobrepolje", "Dobrna", "Dobrova-Horjul-Polhov Gradec", "Dobrovnik-Dobronak", "Dol pri Ljubljani",
                "Dolenjske Toplice", "Domžale", "Dornava", "Dravograd", "Duplek", "Gorenja Vas-Poljane",
                "Gorišnica", "Gorje", "Gornja Radgona", "Gornji Grad", "Gornji Petrovci", "Grad", "Grosuplje",
                "Hajdina", "Hodoš-Hodos", "Horjul", "Hoče-Slivnica", "Hrastnik", "Hrpelje-Kozina", "Idrija", "Ig",
                "Ilirska Bistrica", "Ivančna Gorica", "Izola-Isola", "Jesenice", "Jezersko", "Kamnik", "Kanal",
                "Kidričevo", "Kobarid", "Kobilje", "Komen", "Komenda", "Koper-Capodistria", "Kostanjevica na Krki",
                "Kostel", "Kozje", "Kočevje", "Kranj", "Kranjska Gora", "Križevci", "Krško", "Kungota", "Kuzma",
                "Laško", "Lenart", "Lendava-Lendva", "Litija", "Ljubno", "Ljutomer", "Logatec", "Log–Dragomer",
                "Lovrenc na Pohorju", "Loška Dolina", "Loški Potok", "Lukovica", "Luče", "Majšperk", "Makole",
                "Maribor", "Markovci", "Medvode", "Mengeš", "Metlika", "Mežica", "Miklavž na Dravskem Polju",
                "Miren-Kostanjevica", "Mirna", "Mirna Peč", "Mislinja", "Mokronog-Trebelno", "Moravske Toplice",
                "Moravče", "Mozirje", "Murska Sobota", "Muta", "Naklo", "Nazarje", "Nova Gorica", "Novo Mesto",
                "Odranci", "Oplotnica", "Ormož", "Osilnica", "Pesnica", "Piran-Pirano", "Pivka", "Podlehnik",
                "Podvelka", "Podčetrtek", "Poljčane", "Polzela", "Postojna", "Prebold", "Preddvor", "Prevalje",
                "Ptuj", "Puconci", "Radenci", "Radeče", "Radlje ob Dravi", "Radovljica", "Ravne na Koroškem",
                "Razkrižje", "Rače-Fram", "Renče-Vogrsko", "Rečica ob Savinji", "Ribnica", "Ribnica na Pohorju",
                "Rogatec", "Rogaška Slatina", "Ruše", "Selnica ob Dravi", "Semič", "Sentjur", "Sevnica", "Sežana",
                "Slovenj Gradec", "Slovenska Bistrica", "Slovenska Konjice", "Sodražica", "Solčava",
                "Središče ob Dravi", "Starše", "Straža", "Sv. Trojica v Slov. Goricah", "Sveta Ana",
                "Sveti Andraž v Slovenskih Goricah", "Sveti Jurij", "Sveti Jurij v Slovenskih Goricah",
                "Sveti Tomaž", "Tabor", "Tišina", "Tolmin", "Trbovlje", "Trebnje", "Trzin", "Velenje",
                "Velika Polana", "Velike Lašče", "Veržej", "Videm", "Vipava", "Vitanje", "Vodice", "Vojnik",
                "Vransko", "Vrhnika", "Vuzenica", "Zagorje ob Savi", "Zavrč", "Zreče", "Črna na Koroškem",
                "Šalovci", "Šentilj", "Šentjernej", "Šentrupert", "Šenčur", "Škocjan", "Škofja Loka", "Škofljica",
                "Šmarje pri Jelšah", "Šmarješke Toplice", "Šmartno ob Paki", "Šmartno pri Litiji", "Šoštanj",
                "Štore", "Žalec", "Železniki", "Žetale", "Žiri", "Žirovnica"
            ]
        }, {
            "name": "Solomon Islands",
            "states": [
                "Central Province", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira", "Malaita",
                "Rennell and Bellona", "Temotu", "Western Province"
            ]
        }, {
            "name": "Somalia",
            "states": [
                "Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Lower Juba",
                "Lower Shabeelle", "Middle Juba", "Middle Shabele", "Mudug", "Nugaal", "Sanaag", "Sool", "Togdheer",
                "Woqooyi Galbeed"
            ]
        }, {
            "name": "South Africa",
            "states": [
                "Eastern Cape", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North-West", "Northern Cape",
                "Orange Free State", "Western Cape"
            ]
        }, { "name": "South Georgia and South Sandwich Islands" },
        {
            "name": "South Korea",
            "states": [
                "Busan", "Chungcheongbuk-do", "Chungcheongnam-do", "Daegu", "Daejeon", "Gangwon-do", "Gwangju",
                "Gyeonggi-do", "Gyeongsangbuk-do", "Gyeongsangnam-do", "Incheon", "Jeju-do", "Jeollabuk-do",
                "Jeollanam-do", "Sejong-si", "Seoul", "Ulsan"
            ]
        }, {
            "name": "South Sudan",
            "states": [
                "Central Equatoria", "Eastern Equatoria", "Jonglei", "Lakes", "Northern Bahr al Ghazal", "Unity",
                "Upper Nile", "Warrap", "Western Bahr al Ghazal", "Western Equatoria"
            ]
        }, {
            "name": "Spain",
            "states": [
                "Andalusia", "Aragon", "Asturias", "Balearic Islands", "Basque Country", "Canary Islands",
                "Cantabria", "Castille and León", "Castille-La Mancha", "Catalonia", "Ceuta", "Extremadura",
                "Galicia", "La Rioja", "Madrid", "Melilla", "Murcia", "Navarre", "Valencia"
            ]
        }, {
            "name": "Sri Lanka",
            "states": [
                "Central", "Eastern Province", "North Central", "North Western", "Northern Province",
                "Sabaragamuwa", "Southern", "Uva", "Western"
            ]
        }, {
            "name": "Sudan",
            "states": [
                "Al Jazīrah", "Al Qaḑārif", "Blue Nile", "Central Darfur", "Eastern Darfur", "Kassala", "Khartoum",
                "North Kordofan", "Northern Darfur", "Northern State", "Red Sea", "River Nile", "Sinnār",
                "Southern Darfur", "Southern Kordofan", "West Kordofan State", "Western Darfur", "White Nile"
            ]
        }, {
            "name": "Suriname",
            "states": [
                "Brokopondo", "Commewijne", "Coronie", "Marowijne", "Nickerie", "Para", "Paramaribo", "Saramacca",
                "Sipaliwini", "Wanica"
            ]
        }, { "name": "Svalbard and Jan Mayen" }, {
            "name": "Swaziland",
            "states": ["Hhohho", "Lubombo", "Manzini", "Shiselweni"]
        }, {
            "name": "Sweden",
            "states": [
                "Blekinge", "Dalarna", "Gotland", "Gävleborg", "Halland", "Jämtland", "Jönköping", "Kalmar",
                "Kronoberg", "Norrbotten", "Skåne", "Stockholm", "Södermanland", "Uppsala", "Värmland",
                "Västerbotten", "Västernorrland", "Västmanland", "Västra Götaland", "Örebro", "Östergötland"
            ]
        }, {
            "name": "Switzerland",
            "states": [
                "Aargau", "Appenzell Ausserrhoden", "Appenzell Innerrhoden", "Basel-City", "Basel-Landschaft",
                "Bern", "Fribourg", "Geneva", "Glarus", "Grisons", "Jura", "Lucerne", "Neuchâtel", "Nidwalden",
                "Obwalden", "Saint Gallen", "Schaffhausen", "Schwyz", "Solothurn", "Thurgau", "Ticino", "Uri",
                "Valais", "Vaud", "Zug", "Zurich"
            ]
        }, {
            "name": "Syria",
            "states": [
                "Al-Hasakah", "Aleppo", "Ar-Raqqah", "As-Suwayda", "Daraa", "Deir ez-Zor", "Dimashq", "Hama",
                "Homs", "Idlib", "Latakia", "Quneitra", "Rif-dimashq", "Tartus"
            ]
        }, { "name": "São Tomé and Príncipe", "states": ["Príncipe", "São Tomé Island"] },
        { "name": "Taiwan", "states": ["Fukien", "Kaohsiung", "Taipei", "Taiwan"] },
        {
            "name": "Tajikistan",
            "states": ["Dushanbe", "Gorno-Badakhshan", "Khatlon", "Republican Subordination", "Viloyati Sughd"]
        }, {
            "name": "Tanzania",
            "states": [
                "Arusha", "Dar es Salaam", "Dodoma", "Geita", "Iringa", "Kagera", "Katavi", "Kigoma", "Kilimanjaro",
                "Lindi", "Manyara", "Mara", "Mbeya", "Morogoro", "Mtwara", "Mwanza", "Njombe", "Pemba North",
                "Pemba South", "Pwani", "Rukwa", "Ruvuma", "Shinyanga", "Simiyu", "Singida", "Tabora", "Tanga",
                "Zanzibar Central/South", "Zanzibar North", "Zanzibar Urban/West"
            ]
        }, { "name": "Territory of Ashmore and Cartier Islands" },
        {
            "name": "Thailand",
            "states": [
                "Amnat Charoen", "Ang Thong", "Bangkok", "Buriram", "Chachoengsao", "Chai Nat", "Chaiyaphum",
                "Changwat Bueng Kan", "Changwat Nong Bua Lamphu", "Changwat Ubon Ratchathani",
                "Changwat Udon Thani", "Chanthaburi", "Chiang Mai", "Chiang Rai", "Chon Buri", "Chumphon",
                "Kalasin", "Kamphaeng Phet", "Kanchanaburi", "Khon Kaen", "Krabi", "Lampang", "Lamphun", "Loei",
                "Lop Buri", "Mae Hong Son", "Maha Sarakham", "Mukdahan", "Nakhon Nayok", "Nakhon Pathom",
                "Nakhon Phanom", "Nakhon Ratchasima", "Nakhon Sawan", "Nakhon Si Thammarat", "Nan", "Narathiwat",
                "Nong Khai", "Nonthaburi", "Pathum Thani", "Pattani", "Phangnga", "Phatthalung", "Phayao",
                "Phetchabun", "Phetchaburi", "Phichit", "Phitsanulok", "Phra Nakhon Si Ayutthaya", "Phrae",
                "Phuket", "Prachin Buri", "Prachuap Khiri Khan", "Ranong", "Ratchaburi", "Rayong", "Roi Et",
                "Sa Kaeo", "Sakon Nakhon", "Samut Prakan", "Samut Sakhon", "Samut Songkhram", "Sara Buri", "Satun",
                "Sing Buri", "Sisaket", "Songkhla", "Sukhothai", "Suphan Buri", "Surat Thani", "Surin", "Tak",
                "Trang", "Trat", "Uthai Thani", "Uttaradit", "Yala", "Yasothon"
            ]
        }, { "name": "Togo", "states": ["Centrale", "Kara", "Maritime", "Plateaux", "Savanes"] },
        { "name": "Tokelau", "states": ["Atafu", "Fakaofo", "Nukunonu"] },
        { "name": "Tonga", "states": ["Ha‘apai", "Niuas", "Tongatapu", "Vava‘u", "ʻEua"] },
        {
            "name": "Trinidad and Tobago",
            "states": [
                "Borough of Arima", "Chaguanas", "City of Port of Spain", "City of San Fernando",
                "Couva-Tabaquite-Talparo", "Diego Martin", "Eastern Tobago", "Mayaro", "Penal/Debe", "Point Fortin",
                "Princes Town", "San Juan/Laventille", "Sangre Grande", "Siparia", "Tobago", "Tunapuna/Piarco"
            ]
        }, {
            "name": "Tunisia",
            "states": [
                "Al Mahdīyah", "Al Munastīr", "Al Qayrawān", "Al Qaşrayn", "Ariana", "Banzart", "Bin ‘Arūs",
                "Bājah", "Gafsa", "Jundūbah", "Kef", "Madanīn", "Manouba", "Nābul", "Qibilī", "Qābis", "Silyānah",
                "Sīdī Bū Zayd", "Sūsah", "Tataouine", "Tawzar", "Tūnis", "Zaghwān", "Şafāqis"
            ]
        }, {
            "name": "Turkey",
            "states": [
                "Adana", "Adıyaman", "Afyonkarahisar", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan",
                "Artvin", "Aydın", "Ağrı", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl",
                "Bitlis", "Bolu", "Burdur", "Bursa", "Canakkale", "Denizli", "Diyarbakır", "Düzce", "Edirne",
                "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri",
                "Hatay", "Isparta", "Istanbul", "Iğdır", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu",
                "Kayseri", "Kilis", "Kocaeli", "Konya", "Kütahya", "Kırklareli", "Kırıkkale", "Kırşehir", "Malatya",
                "Manisa", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize",
                "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak",
                "Van", "Yalova", "Yozgat", "Zonguldak", "Çankırı", "Çorum", "İzmir", "Şanlıurfa", "Şırnak"
            ]
        }, { "name": "Turkmenistan", "states": ["Ahal", "Ashgabat", "Balkan", "Daşoguz", "Lebap", "Mary"] },
        { "name": "Turks and Caicos Islands" }, {
            "name": "Tuvalu",
            "states": ["Funafuti", "Nanumanga", "Nanumea", "Niutao", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu"]
        }, {
            "name": "U.S. Minor Outlying Islands",
            "states": [
                "Baker Island", "Howland Island", "Jarvis Island", "Johnston Atoll", "Kingman Reef",
                "Midway Islands", "Navassa Island", "Palmyra Atoll", "Wake Island"
            ]
        },
        {
            "name": "U.S. Virgin Islands",
            "states": ["Saint Croix Island", "Saint John Island", "Saint Thomas Island"]
        },
        { "name": "Uganda", "states": ["Central Region", "Eastern Region", "Northern Region", "Western Region"] },
        {
            "name": "Ukraine",
            "states": [
                "Cherkasy", "Chernihiv", "Chernivtsi", "Dnipropetrovsk", "Donetsk", "Gorod Sevastopol",
                "Ivano-Frankivsk", "Kharkiv", "Kherson", "Khmelnytskyi", "Kiev", "Kirovohrad", "Kyiv City",
                "Luhansk", "Lviv", "Mykolaiv", "Odessa", "Poltava", "Republic of Crimea", "Rivne", "Sumy",
                "Ternopil", "Transcarpathia", "Vinnyts'ka", "Volyn", "Zaporizhia", "Zhytomyr"
            ]
        }, {
            "name": "United Arab Emirates",
            "states": [
                "Abu Dhabi", "Ajman", "Al Fujayrah", "Ash Shāriqah", "Dubai", "Raʼs al Khaymah", "Umm al Qaywayn"
            ]
        }, { "name": "United Kingdom", "states": ["England", "Northern Ireland", "Scotland", "Wales"] },
        {
            "name": "United States",
            "states": [
                "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
                "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
                "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
                "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
                "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
                "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
                "Virginia", "Washington", "Washington, D.C.", "West Virginia", "Wisconsin", "Wyoming"
            ]
        }, {
            "name": "Uruguay",
            "states": [
                "Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja",
                "Maldonado", "Montevideo", "Paysandú", "Rivera", "Rocha", "Río Negro", "Salto", "San José",
                "Soriano", "Tacuarembó", "Treinta y Tres"
            ]
        }, {
            "name": "Uzbekistan",
            "states": [
                "Andijon", "Bukhara", "Fergana", "Jizzax", "Karakalpakstan", "Namangan", "Navoiy", "Qashqadaryo",
                "Samarqand", "Sirdaryo", "Surxondaryo", "Toshkent", "Toshkent Shahri", "Xorazm"
            ]
        }, { "name": "Vanuatu", "states": ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"] },
        { "name": "Vatican City" }, {
            "name": "Venezuela",
            "states": [
                "Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Capital", "Carabobo", "Cojedes",
                "Delta Amacuro", "Dependencias Federales", "Falcón", "Guárico", "Lara", "Miranda", "Monagas",
                "Mérida", "Nueva Esparta", "Portuguesa", "Sucre", "Trujillo", "Táchira", "Vargas", "Yaracuy",
                "Zulia"
            ]
        }, {
            "name": "Vietnam",
            "states": [
                "An Giang", "Bà Rịa-Vũng Tàu", "Bình Dương", "Bình Phước", "Bình Thuận", "Bình Định", "Bạc Liêu",
                "Bắc Giang", "Bắc Kạn", "Bắc Ninh", "Bến Tre", "Cao Bằng", "Cà Mau", "Cần Thơ", "Gia Lai", "Ha Nội",
                "Hau Giang", "Ho Chi Minh City", "Hà Giang", "Hà Nam", "Hà Tĩnh", "Hòa Bình", "Hưng Yên",
                "Hải Dương", "Hải Phòng", "Khánh Hòa", "Kiến Giang", "Kon Tum", "Lai Châu", "Long An", "Lào Cai",
                "Lâm Đồng", "Lạng Sơn", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên",
                "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La",
                "Thanh Hóa", "Thái Bình", "Thái Nguyên", "Thừa Thiên-Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang",
                "Tây Ninh", "Tỉnh Ðiện Biên", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái", "Ðắc Lắk", "Ðắk Nông", "Đà Nẵng",
                "Đồng Nai", "Đồng Tháp"
            ]
        }, {
            "name": "Wallis and Futuna",
            "states": ["Circonscription d'Alo", "Circonscription d'Uvéa", "Circonscription de Sigave"]
        }, { "name": "Western Sahara" }, {
            "name": "Yemen",
            "states": [
                "Abyan", "Aden", "Al Bayḑāʼ", "Al Hudaydah", "Al Jawf", "Al Mahrah", "Al Maḩwīt",
                "Amanat Al Asimah", "Aḑ Ḑāli‘", "Dhamār", "Ibb", "Laḩij", "Ma’rib", "Muḩāfaz̧at Ḩaḑramawt", "Omran",
                "Raymah", "Sanaa", "Shabwah", "Soqatra", "Ta‘izz", "Şa‘dah", "Ḩajjah"
            ]
        }, {
            "name": "Zambia",
            "states": [
                "Central", "Copperbelt", "Eastern", "Luapula", "Lusaka", "Muchinga", "North-Western", "Northern",
                "Southern", "Western"
            ]
        }, {
            "name": "Zimbabwe",
            "states": [
                "Bulawayo", "Harare", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West",
                "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"
            ]
        }, { "name": "Åland", "states": ["Mariehamns stad", "Ålands landsbygd", "Ålands skärgård"] }
    ];

    var ret = {
        getCountriesAndStates: getCountriesAndStates,
        getCountries: getCountries,
        getCountryStates: getCountryStates
    }

    return ret;

    function getCountriesAndStates() {
        return countriesAndStates;
    }
    function getCountries() {
        return countriesAndStates.map(function (elem) { return elem.name; });
    }
    function getCountryStates(countryName) {
        var elem = countriesAndStates.filter(function (elem) { return elem.name === countryName; })[0];
        if (elem) {
            return elem.states || [];
        }
    }
})();